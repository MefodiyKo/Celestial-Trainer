function drawMoonSymbol(ctx,x,y,size,illum,waxing){

ctx.save();

/* Moon dark base */
ctx.beginPath();
ctx.arc(x,y,size,0,Math.PI*2);
ctx.fillStyle="#06152a";
ctx.fill();

/* Clip to Moon circle */
ctx.beginPath();
ctx.arc(x,y,size,0,Math.PI*2);
ctx.clip();

let k=illum/100;

/* Full Moon */
if(k>0.97){
  ctx.beginPath();
  ctx.arc(x,y,size,0,Math.PI*2);
  ctx.fillStyle="#dddddd";
  ctx.fill();
}

/* New Moon */
else if(k<0.03){
  ctx.beginPath();
  ctx.arc(x,y,size,0,Math.PI*2);
  ctx.fillStyle="#152a3d";
  ctx.fill();
}

/* Crescent */
else if(k<0.5){

  let crescentWidth=size*(0.25+k*1.5);

  ctx.beginPath();

  if(waxing){
    ctx.ellipse(x+size*0.45,y,crescentWidth,size,0,-Math.PI/2,Math.PI/2);
    ctx.lineTo(x+size*0.45,y-size);
  }else{
    ctx.ellipse(x-size*0.45,y,crescentWidth,size,0,Math.PI/2,Math.PI*1.5);
    ctx.lineTo(x-size*0.45,y+size);
  }

  ctx.fillStyle="#dddddd";
  ctx.fill();
}

/* Quarter */
else if(k>=0.48 && k<=0.52){

  ctx.beginPath();

  if(waxing){
    ctx.rect(x,y-size,size,size*2);
  }else{
    ctx.rect(x-size,y-size,size,size*2);
  }

  ctx.fillStyle="#dddddd";
  ctx.fill();
}

/* Gibbous */
else{

  ctx.beginPath();
  ctx.arc(x,y,size,0,Math.PI*2);
  ctx.fillStyle="#dddddd";
  ctx.fill();

  let shadowWidth=size*((1-k)*1.8);

  ctx.beginPath();

  if(waxing){
    ctx.ellipse(x-size*0.65,y,shadowWidth,size,0,0,Math.PI*2);
  }else{
    ctx.ellipse(x+size*0.65,y,shadowWidth,size,0,0,Math.PI*2);
  }

  ctx.fillStyle="#06152a";
  ctx.fill();
}

/* Border */
ctx.restore();

ctx.save();
ctx.strokeStyle="#ffffff";
ctx.lineWidth=1;
ctx.beginPath();
ctx.arc(x,y,size,0,Math.PI*2);
ctx.stroke();
ctx.restore();

}
function drawSkyView(){
let canvas=document.getElementById("skyCanvas");
let ctx=canvas.getContext("2d");
ctx.clearRect(0,0,canvas.width,canvas.height);
skyObjects=[];

let selectedObject=celestialObject.value;
let selectedInfo=null;
let data=getInputData();

ctx.fillStyle="#06152a";
ctx.fillRect(0,0,canvas.width,canvas.height);

let horizonY=170,left=28,right=340,topY=24,width=right-left;

let course=parseFloat(skyCourse.value);
if(isNaN(course))course=0;

let mode=skyMode.value;

ctx.strokeStyle="#9ee7ff";
ctx.beginPath();
ctx.moveTo(left,horizonY);
ctx.lineTo(right,horizonY);
ctx.stroke();

ctx.fillStyle="#9ee7ff";
ctx.font="11px Arial";

let leftDir=norm360(course-90);
let centerDir=norm360(course);
let rightDir=norm360(course+90);

ctx.fillText(leftDir.toFixed(0)+"°",left,horizonY+16);
ctx.fillText(centerDir.toFixed(0)+"°",left+width/2-12,horizonY+16);
ctx.fillText(rightDir.toFixed(0)+"°",right-35,horizonY+16);
/* Horizon ticks every 10° */

ctx.strokeStyle="#5fb8d9";
ctx.lineWidth=1;

for(let deg=-90;deg<=90;deg+=10){

  let x=left+((deg+90)/180)*width;

  let tick=4;

  if(deg%30===0)tick=8;

  ctx.beginPath();
  ctx.moveTo(x,horizonY);
  ctx.lineTo(x,horizonY-tick);
  ctx.stroke();

}
let heading=norm360(course);

function cardinal(d){

if(d>=315 || d<45)return "N";
if(d>=45 && d<135)return "E";
if(d>=135 && d<225)return "S";
return "W";

}

ctx.fillStyle="#9ee7ff";
ctx.font="12px Arial";

ctx.fillText(cardinal(leftDir),left+18,horizonY-10);
ctx.fillText(cardinal(centerDir),left+width/2-4,horizonY-10);
ctx.fillText(cardinal(rightDir),right-18,horizonY-10);
if(data.error){
ctx.fillText("Enter UTC and position.",10,25);
return;
}

function azToX(az){
az=norm360(az);

if(mode==="north"){
  return left+(az/360)*width;
}

/* Course centered: show only 180° sector */
let rel=normalizeError(az-course);

if(rel<-90 || rel>90){
  return null;
}

return left+((rel+90)/180)*width;
}

let objects=[];
let sun=sunAlmanac(data.date,data.time);
let sunR=calculateHcZn(data.lat,sun.Dec,norm360(sun.GHA+data.lon));
if(sunR.Hc>-5)objects.push({name:"Sun",type:"sun",hc:sunR.Hc,zn:sunR.Zn,mag:-26});

let moon=moonAlmanac(data.date,data.time);
let moonR=calculateHcZn(data.lat,moon.Dec,norm360(moon.GHA+data.lon));

if(moonR.Hc>0){
  objects.push({
    name:"Moon",
    type:"moon",
    hc:moonR.Hc,
    zn:moonR.Zn,
    mag:-12,
    illumination:moon.Illumination,
    waxing:moon.Waxing,
    phaseName:moon.PhaseName
  });
}
["Venus","Mars","Jupiter","Saturn"].forEach(name=>{

let p=planetAlmanac(data.date,data.time,name);

let r=calculateHcZn(
data.lat,
p.Dec,
norm360(p.GHA+data.lon)
);

if(
  r.Hc>0 &&
  (
    sunR.Hc<0 ||
    name==="Venus"
  )
){

objects.push({
name:name,
type:"planet",
hc:r.Hc,
zn:r.Zn,
mag:0
});

}

});
if(sunR.Hc<-6){
for(let name in STAR_CATALOG){
let st=STAR_CATALOG[name];
let GHA=norm360(sun.GHAAries+st.SHA);
let rr=calculateHcZn(data.lat,st.Dec,norm360(GHA+data.lon));
if(rr.Hc>5){
  objects.push({
    name:name,
    type:"star",
    hc:rr.Hc,
    zn:rr.Zn,
    mag:st.Mag
  });
}
}
}
let plottedStars = {};
objects.forEach(o=>{
let x=azToX(o.zn);

if(x===null)return;

let y=horizonY-(o.hc/90)*(horizonY-topY);
if(y<topY)y=topY;
if(y>horizonY)y=horizonY;

let size;

if(o.type==="sun") size=8;
else if(o.type==="moon") size=7;
else if(o.name==="Venus") size=6;
else if(o.name==="Jupiter") size=5;
else if(o.name==="Mars") size=4;
else if(o.name==="Saturn") size=4;
else{
  let twinkle = 0.4 * Math.sin(Date.now()/500 + o.name.length);
  size = Math.max(1.5, 5 - o.mag * 1.1 + twinkle);
}

ctx.fillStyle=
o.type==="sun" ? "#ffd966" :
o.type==="moon" ? "#dddddd" :
o.name==="Venus" ? "#ffffff" :
o.name==="Mars" ? "#ff8a65" :
o.name==="Jupiter" ? "#f5deb3" :
o.name==="Saturn" ? "#ffe08a" :
"#ffffff";

if(o.type==="moon"){

  drawMoonSymbol(ctx,x,y,size,o.illumination,!o.waxing);

}else{

  if(o.type==="star" && o.mag<1.0){

    ctx.save();
    ctx.globalAlpha=0.25;

    ctx.beginPath();
    ctx.arc(x,y,size+3,0,Math.PI*2);
    ctx.fill();

    ctx.restore();

  }

  ctx.beginPath();
  ctx.arc(x,y,size,0,Math.PI*2);
  ctx.fill();

}

if(o.name===selectedObject){

  selectedInfo=o;

  /* Bearing line */
  ctx.strokeStyle="#ffd966";
  ctx.lineWidth=1;

  ctx.beginPath();
  ctx.moveTo(x,horizonY);
  ctx.lineTo(x,y);
  ctx.stroke();

  /* Selection ring */
  ctx.lineWidth=2;
  ctx.beginPath();
  ctx.arc(x,y,size+7,0,Math.PI*2);
  ctx.stroke();

  ctx.lineWidth=1;

}

ctx.fillStyle="#ffffff";
ctx.font="10px Arial";

let labelX = x + 7;
let labelY = y + 4;

let textWidth = ctx.measureText(o.name).width;

if(labelX + textWidth > right - 5){
  labelX = x - textWidth - 7;
}

if(labelY < topY + 10){
  labelY = topY + 10;
}

if(labelY > horizonY - 5){
  labelY = horizonY - 5;
}

ctx.fillText(o.name,labelX,labelY);

skyObjects.push({
name:o.name,
x:x,
y:y,
r:22
});
if(o.type==="star"){
  plottedStars[o.name]={
    x:x,
    y:y
  };
}
});
if(sunR.Hc<-6){

  ctx.save();
  ctx.globalAlpha = 0.45;
  ctx.strokeStyle = "#9ee7ff";
  ctx.lineWidth = 1;

CONSTELLATION_LINES.forEach(line=>{

  let a = plottedStars[line[0]];
  let b = plottedStars[line[1]];

  if(a && b){

    let selectedStar = STAR_CATALOG[selectedObject];
    let sameConstellation = false;

    if(selectedStar && STAR_CATALOG[line[0]] && STAR_CATALOG[line[1]]){
      sameConstellation =
      STAR_CATALOG[line[0]].Con === selectedStar.Con &&
      STAR_CATALOG[line[1]].Con === selectedStar.Con;
    }

    ctx.strokeStyle = sameConstellation ? "#ffd966" : "#9ee7ff";
    ctx.globalAlpha = sameConstellation ? 0.9 : 0.35;
    ctx.lineWidth = sameConstellation ? 2 : 1;

    ctx.beginPath();
    ctx.moveTo(a.x,a.y);
    ctx.lineTo(b.x,b.y);
    ctx.stroke();

  }

});

  ctx.restore();

}
if(selectedInfo){

let infoHTML =
"<b>Selected:</b> "+selectedInfo.name+
"<br>Hc: "+selectedInfo.hc.toFixed(1)+"°"+
"<br>Zn: "+selectedInfo.zn.toFixed(1)+"°";

if(STAR_CATALOG[selectedInfo.name]){

  let st = STAR_CATALOG[selectedInfo.name];

  infoHTML +=
  "<br>Constellation: "+st.Con+
  "<br>Magnitude: "+st.Mag.toFixed(1)+
  "<br>SHA: "+st.SHA.toFixed(0)+"°"+
  "<br>Dec: "+formatDec(st.Dec);

}

document.getElementById("selectedObjectInfo").innerHTML=infoHTML;
}
ctx.fillStyle="#9ee7ff";
ctx.fillText("Sky View OK | Course "+course.toFixed(0)+"°",10,210);
if(sunR.Hc<-6){
  setTimeout(drawSkyView,700);
}
}
let skyDragging=false;

function setupSkyViewControls(){

let canvas=document.getElementById("skyCanvas");
if(!canvas)return;

canvas.addEventListener("touchstart",function(e){
  let rect=canvas.getBoundingClientRect();
  let y=e.touches[0].clientY-rect.top;

  if(y>150 && y<190){
    skyDragging=true;
    e.preventDefault();
  }
},{passive:false});

canvas.addEventListener("touchmove",function(e){
  if(!skyDragging)return;

  let rect=canvas.getBoundingClientRect();
  let x=e.touches[0].clientX-rect.left;
  let canvasWidth=rect.width;

  let rel=(x/canvasWidth-0.5)*180;
  let current=parseFloat(skyCourse.value);
  if(isNaN(current))current=0;

  skyCourse.value=String(norm360(current+rel*0.03).toFixed(0)).padStart(3,"0");

  drawSkyView();
  e.preventDefault();
},{passive:false});

canvas.addEventListener("touchend",function(){
  skyDragging=false;
});

canvas.addEventListener("mousedown",function(e){
  let rect=canvas.getBoundingClientRect();
  let y=e.clientY-rect.top;

  if(y>150 && y<190){
    skyDragging=true;
    e.preventDefault();
  }
});

canvas.addEventListener("mousemove",function(e){
  if(!skyDragging)return;

  let rect=canvas.getBoundingClientRect();
  let x=e.clientX-rect.left;
  let canvasWidth=rect.width;

  let rel=(x/canvasWidth-0.5)*180;
  let current=parseFloat(skyCourse.value);
  if(isNaN(current))current=0;

  skyCourse.value=String(norm360(current+rel*0.03).toFixed(0)).padStart(3,"0");

  drawSkyView();
});

canvas.addEventListener("mouseup",function(){
  skyDragging=false;
});

canvas.addEventListener("mouseleave",function(){
  skyDragging=false;
});

}