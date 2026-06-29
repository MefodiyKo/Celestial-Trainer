/* Celestial Trainer - Sky View v3 */
function skyV3StarColor(name){

  const colors={
    Sirius:"#dcecff",
    Canopus:"#fff1d0",
    Arcturus:"#ffd28a",
    Vega:"#e8f1ff",
    Capella:"#fff0b0",
    Rigel:"#d6e8ff",
    Betelgeuse:"#ffb07a",
    Aldebaran:"#ffb07a",
    Antares:"#ff8a65",
    Spica:"#dcecff",
    Altair:"#f2f6ff",
    Deneb:"#e8f1ff",
    Achernar:"#dbe9ff",
    Procyon:"#fff2d0",
    Pollux:"#ffdca0"
  };

  return colors[name] || "#ffffff";
}
function drawSkyProBrightStar(ctx,x,y,size,color){

  let g=ctx.createRadialGradient(x,y,0,x,y,size*2.8);

  g.addColorStop(0,color);
  g.addColorStop(0.25,color);
  g.addColorStop(1,"rgba(255,255,255,0)");

  ctx.fillStyle=g;
  ctx.beginPath();
  ctx.arc(x,y,size*2.8,0,Math.PI*2);
  ctx.fill();

  ctx.fillStyle=color;
  ctx.beginPath();
  ctx.arc(x,y,size,0,Math.PI*2);
  ctx.fill();

  ctx.strokeStyle=color;
  ctx.lineWidth=1;

  ctx.beginPath();
  ctx.moveTo(x-size*1.3,y);
  ctx.lineTo(x+size*1.3,y);
  ctx.moveTo(x,y-size*1.3);
  ctx.lineTo(x,y+size*1.3);
  ctx.stroke();
}
function drawSkyViewV3(){
  let canvas=document.getElementById("skyCanvas");
  if(!canvas)return;

  let rect=canvas.getBoundingClientRect();
  let dpr=window.devicePixelRatio||1;
  let W=rect.width||360;
  let H=rect.height||420;

  if(canvas.width!==Math.round(W*dpr)||canvas.height!==Math.round(H*dpr)){
    canvas.width=Math.round(W*dpr);
    canvas.height=Math.round(H*dpr);
  }

  let ctx=canvas.getContext("2d");
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,W,H);

  skyObjects=[];
  window.skyAllStarPositions = {};

  let data=getInputData();
  let selectedObject=celestialObject.value;
  let selectedInfo=null;

  if(data.error){
    ctx.fillStyle="#06152a";
    ctx.fillRect(0,0,W,H);
    ctx.fillStyle="#9ee7ff";
    ctx.font="13px Arial";
    ctx.fillText("Enter UTC and position.",14,24);
    return;
  }

  let course=parseFloat(skyCourse.value);
  if(isNaN(course))course=0;

  let mode=skyMode.value;

  let sun=sunAlmanac(data.date,data.time);
  let sunR=calculateHcZn(data.lat,sun.Dec,norm360(sun.GHA+data.lon));

  drawSkyV3Background(ctx,W,H,sunR.Hc);

  let left=14;
  let right=W-14;
  let width=right-left;
  let topY=18;
  let horizonY=H*0.76;

  drawSkyV3Sea(ctx,W,H,horizonY);
  if(sunR.Hc<-12){
    drawSkyV3MilkyWay(ctx,W,H,horizonY);
}
if(sunR.Hc<-6){
  drawSkyV3BackgroundStars(ctx,W,H,horizonY);
}
  drawSkyV3Horizon(ctx,left,right,width,horizonY,course);

  function project(az,hc){
    az=norm360(az);

    let center=mode==="north"?0:course;
    let rel=normalizeError(az-center);

    if(rel<-90||rel>90)return null;

    let t=(rel+90)/180;
    let x=left+t*width;

    let h=Math.max(0,Math.min(90,hc));
    let alt=Math.sin(degToRad(h));

    let skyTop=topY;
    let skyBottom=horizonY;

    let sideCurve=Math.sin(t*Math.PI);
    let domeLift=H*0.05*sideCurve;

    let usable=(skyBottom-skyTop)*0.80;
    let y=skyBottom-alt*usable-domeLift;

    if(y<skyTop)y=skyTop;
    if(y>skyBottom)y=skyBottom;

    return {x,y,t};
  }

  let objects=[];

  if(sunR.Hc>-5){
    objects.push({
      name:"Sun",
      type:"sun",
      hc:sunR.Hc,
      zn:sunR.Zn,
      mag:-26
    });
  }

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
    let r=calculateHcZn(data.lat,p.Dec,norm360(p.GHA+data.lon));

    if(r.Hc>0&&(sunR.Hc<0||name==="Venus")){
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
      let r=calculateHcZn(data.lat,st.Dec,norm360(GHA+data.lon));

      if(r.Hc>5){
        objects.push({
          name:name,
          type:"star",
          hc:r.Hc,
          zn:r.Zn,
          mag:st.Mag
        });
      }
    }
  }

  let plottedStars={};

  objects.forEach(o=>{
    let pos=project(o.zn,o.hc);
    if(!pos)return;

    let x=pos.x;
    let y=pos.y;

    let size=3;

if(o.type==="sun") size=9;

else if(o.type==="moon") size=15;

else if(o.name==="Venus") size=6.5;

else if(o.name==="Jupiter") size=5.8;

else if(o.name==="Mars") size=4.8;

else if(o.name==="Saturn") size=4.5;

else{

    /* Realistic stellar brightness */

    let mag=o.mag;

    size=
        5.8*Math.pow(0.72,mag+1);

    size=Math.max(1.2,size);

}

   let fade=Math.min(1,Math.max(0.18,o.hc/28));

if(o.type==="star"){
  fade *= Math.max(0.35, 1 - o.mag*0.18);
}

    ctx.save();
    ctx.globalAlpha=fade;

    if(o.type==="sun"){

  /* Outer corona */
  let corona=ctx.createRadialGradient(
      x,y,size*0.5,
      x,y,size*5
  );

  corona.addColorStop(0,"rgba(255,245,180,0.70)");
  corona.addColorStop(0.35,"rgba(255,220,120,0.30)");
  corona.addColorStop(1,"rgba(255,200,80,0)");

  ctx.fillStyle=corona;
  ctx.beginPath();
  ctx.arc(x,y,size*5,0,Math.PI*2);
  ctx.fill();

  /* Inner glow */
  let glow=ctx.createRadialGradient(
      x,y,1,
      x,y,size*1.4
  );

  glow.addColorStop(0,"#fffef8");
  glow.addColorStop(0.55,"#ffe58a");
  glow.addColorStop(1,"#ffb63a");

  ctx.fillStyle=glow;
  ctx.beginPath();
  ctx.arc(x,y,size,0,Math.PI*2);
  ctx.fill();

  /* Bright core */
  ctx.fillStyle="#fffdf2";
  ctx.beginPath();
  ctx.arc(x,y,size*0.45,0,Math.PI*2);
  ctx.fill();

}
    else if(o.type==="moon"){
      drawSkyV3Glow(ctx,x,y,size+16,"rgba(220,220,255,0.25)");
      drawSkyV3Moon(ctx,x,y,size,o.illumination,!o.waxing);
    }
    else{
      ctx.fillStyle=
  o.name==="Venus"?"#ffffff":
  o.name==="Mars"?"#ff8a65":
  o.name==="Jupiter"?"#f5deb3":
  o.name==="Saturn"?"#ffe08a":
  o.type==="star"?skyV3StarColor(o.name):
  "#ffffff";

      if(o.type==="star"&&o.mag<1){
        drawSkyV3Glow(ctx,x,y,size+5,"rgba(255,255,255,0.20)");
      }

   if(o.type==="star"){

  let twinkle = 0.85 + 0.15*Math.sin(Date.now()/350 + x*0.05 + y*0.04);

  ctx.save();
  ctx.globalAlpha *= twinkle;

  if(o.mag<1.0){
  drawSkyProBrightStar(ctx,x,y,size,skyV3StarColor(o.name));
}else{
  ctx.beginPath();
  ctx.arc(x,y,size,0,Math.PI*2);
  ctx.fill();
}

  ctx.restore();

}else{

  ctx.beginPath();
  ctx.arc(x,y,size,0,Math.PI*2);
  ctx.fill();

}
    }

    ctx.restore();

    if(o.name===selectedObject){
      selectedInfo=o;

      let hy=skyV3HorizonY(x,left,width,horizonY);

      ctx.strokeStyle="#ffd966";
      ctx.lineWidth=1.3;
      ctx.beginPath();
      ctx.moveTo(x,hy);
      ctx.lineTo(x,y);
      ctx.stroke();

      ctx.lineWidth=2;
      ctx.beginPath();
      ctx.arc(x,y,size+8,0,Math.PI*2);
      ctx.stroke();

      ctx.lineWidth=1;
    }

    ctx.fillStyle="#ffffff";
    ctx.font="10px Arial";

    let labelX=x+7;
    let labelY=y+4;
    let tw=ctx.measureText(o.name).width;

    if(labelX+tw>right-4)labelX=x-tw-7;
    if(labelY<topY+10)labelY=topY+10;
    if(labelY>horizonY-6)labelY=horizonY-6;

    ctx.fillText(o.name,labelX,labelY);

    skyObjects.push({name:o.name,x:x,y:y,r:22});

    if(o.type==="star"){
      plottedStars[o.name]={x:x,y:y};
    }
  });

  if(sunR.Hc<-6){
    drawSkyV3Constellations(ctx,plottedStars,selectedObject);
  }

  if(selectedInfo){
    let infoHTML=
      "<b>Selected:</b> "+selectedInfo.name+
      "<br>Hc: "+selectedInfo.hc.toFixed(1)+"°"+
      "<br>Zn: "+selectedInfo.zn.toFixed(1)+"°";

    if(STAR_CATALOG[selectedInfo.name]){
      let st=STAR_CATALOG[selectedInfo.name];

      infoHTML+=
        "<br>Constellation: "+st.Con+
        "<br>Magnitude: "+st.Mag.toFixed(1)+
        "<br>SHA: "+st.SHA.toFixed(0)+"°"+
        "<br>Dec: "+formatDec(st.Dec);
    }

    document.getElementById("selectedObjectInfo").innerHTML=infoHTML;
  }

  ctx.fillStyle="#9ee7ff";
  ctx.font="11px Arial";
  ctx.fillText("Sky View v3 | Course "+course.toFixed(0)+"°",12,H-14);
}

function skyV3HorizonY(x,left,width,horizonY){
  let t=(x-left)/width;
  return horizonY-16*Math.sin(Math.PI*t);
}

function skyV3Cardinal(d){
  if(d>=315||d<45)return "N";
  if(d>=45&&d<135)return "E";
  if(d>=135&&d<225)return "S";
  return "W";
}
function drawSkyV3MilkyWay(ctx,W,H,horizonY){

  ctx.save();

  ctx.translate(W*0.55,H*0.38);
  ctx.rotate(-0.62);

  for(let i=0;i<9;i++){

    let x=(Math.sin(i*12.989)*0.5)*W*0.18;
    let y=(-H*0.55)+(i/8)*H*1.1;
    let rx=W*(0.10+0.04*Math.sin(i));
    let ry=H*(0.16+0.05*Math.cos(i*1.7));

    let g=ctx.createRadialGradient(x,y,0,x,y,rx);

    g.addColorStop(0,"rgba(230,240,255,0.18)");
    g.addColorStop(0.45,"rgba(120,160,220,0.08)");
    g.addColorStop(1,"rgba(255,255,255,0)");

    ctx.globalAlpha=0.75;
    ctx.fillStyle=g;

    ctx.beginPath();
    ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);
    ctx.fill();
  }

  /* dark dust lane */
  ctx.globalAlpha=0.28;
  ctx.fillStyle="rgba(0,5,18,0.85)";

  ctx.beginPath();
  ctx.ellipse(W*0.035,0,W*0.045,H*0.70,0.1,0,Math.PI*2);
  ctx.fill();

  ctx.restore();
}
function drawSkyV3BackgroundStars(ctx,W,H,horizonY){

  if(typeof BACKGROUND_STARS==="undefined")return;

  let data=getInputData();
  if(data.error)return;

  let sun=sunAlmanac(data.date,data.time);

  let course=parseFloat(skyCourse.value);
  if(isNaN(course))course=0;

  let mode=skyMode.value;

  let left=14;
  let right=W-14;
  let width=right-left;
  let topY=18;

  function projectStar(az,hc){

    let center=mode==="north"?0:course;
    let rel=normalizeError(az-center);

    if(rel<-90||rel>90)return null;

    let t=(rel+90)/180;
    let x=left+t*width;

    let h=Math.max(0,Math.min(90,hc));
    let alt=Math.sin(degToRad(h));

    let skyTop=topY;
    let skyBottom=horizonY;

    let sideCurve=Math.sin(t*Math.PI);
    let domeLift=H*0.05*sideCurve;

    let usable=(skyBottom-skyTop)*0.80;
    let y=skyBottom-alt*usable-domeLift;

    return {x:x,y:y};
  }

  ctx.save();

  BACKGROUND_STARS.forEach(st=>{

    let name=st[0];
    let SHA=st[1];
    let Dec=st[2];
    let Mag=st[3];
    let Color=st[4];

    let GHA=norm360(sun.GHAAries+SHA);
    let r=calculateHcZn(data.lat,Dec,norm360(GHA+data.lon));

    if(r.Hc<=0)return;

    let pos=projectStar(r.Zn,r.Hc);
    if(!pos)return;
window.skyAllStarPositions[name]={x:pos.x,y:pos.y};
    let size=Math.max(0.45,3.4*Math.pow(0.72,Mag+1));
    let alpha=Math.min(0.85,Math.max(0.12,1-Mag*0.13));

    ctx.globalAlpha=alpha;
    ctx.fillStyle=Color||"#ffffff";

    ctx.beginPath();
    ctx.arc(pos.x,pos.y,size,0,Math.PI*2);
    ctx.fill();

  });

  ctx.restore();
}
function drawSkyV3Background(ctx,W,H,sunHc){
  let g=ctx.createLinearGradient(0,0,0,H);

  if(sunHc>5){
    g.addColorStop(0,"#1b6fa8");
    g.addColorStop(0.6,"#63b7e6");
    g.addColorStop(1,"#d6f3ff");
  }
  else if(sunHc>-6){
    g.addColorStop(0,"#102b4a");
    g.addColorStop(0.65,"#234f78");
    g.addColorStop(1,"#d98b4a");
  }
  else if(sunHc>-12){
    g.addColorStop(0,"#06152a");
    g.addColorStop(0.7,"#0b2b4c");
    g.addColorStop(1,"#17476d");
  }
  else{
    g.addColorStop(0,"#00040a");
    g.addColorStop(0.65,"#020812");
    g.addColorStop(1,"#06152a");
  }

  ctx.fillStyle=g;
  ctx.fillRect(0,0,W,H);
}

function drawSkyV3Sea(ctx,W,H,horizonY){
  let haze=ctx.createLinearGradient(0,horizonY-60,0,horizonY+30);
  haze.addColorStop(0,"rgba(255,255,255,0)");
  haze.addColorStop(0.5,"rgba(180,230,255,0.16)");
  haze.addColorStop(1,"rgba(120,180,210,0.25)");
  ctx.fillStyle=haze;
  ctx.fillRect(0,horizonY-60,W,90);

  let sea=ctx.createLinearGradient(0,horizonY,0,H);
  sea.addColorStop(0,"rgba(15,65,85,0.85)");
  sea.addColorStop(1,"rgba(3,18,30,0.95)");
  ctx.fillStyle=sea;
  ctx.fillRect(0,horizonY,W,H-horizonY);
}

function drawSkyV3Horizon(ctx,left,right,width,horizonY,course){
  ctx.strokeStyle="#9ee7ff";
  ctx.lineWidth=2;

  ctx.beginPath();
  for(let x=left;x<=right;x++){
    let y=skyV3HorizonY(x,left,width,horizonY);
    if(x===left)ctx.moveTo(x,y);
    else ctx.lineTo(x,y);
  }
  ctx.stroke();

  ctx.strokeStyle="#5fb8d9";
  ctx.lineWidth=1;

  for(let deg=-90;deg<=90;deg+=10){
    let x=left+((deg+90)/180)*width;
    let hy=skyV3HorizonY(x,left,width,horizonY);
    let tick=deg%30===0?9:4;

    ctx.beginPath();
    ctx.moveTo(x,hy);
    ctx.lineTo(x,hy-tick);
    ctx.stroke();
  }

  let leftDir=norm360(course-90);
  let centerDir=norm360(course);
  let rightDir=norm360(course+90);

  ctx.fillStyle="#9ee7ff";
  ctx.font="11px Arial";

  ctx.fillText(leftDir.toFixed(0)+"°",left,horizonY+18);
  ctx.fillText(centerDir.toFixed(0)+"°",left+width/2-12,horizonY+18);
  ctx.fillText(rightDir.toFixed(0)+"°",right-35,horizonY+18);

  ctx.font="12px Arial";
  ctx.fillText(skyV3Cardinal(leftDir),left+18,skyV3HorizonY(left,left,width,horizonY)-10);
  ctx.fillText(skyV3Cardinal(centerDir),left+width/2-4,skyV3HorizonY(left+width/2,left,width,horizonY)-10);
  ctx.fillText(skyV3Cardinal(rightDir),right-18,skyV3HorizonY(right,left,width,horizonY)-10);
}

function drawSkyV3Glow(ctx,x,y,r,color){
  ctx.save();
  ctx.fillStyle=color;
  ctx.beginPath();
  ctx.arc(x,y,r,0,Math.PI*2);
  ctx.fill();
  ctx.restore();
}

function drawSkyV3Moon(ctx,x,y,size,illum,waxing){

  ctx.save();

  let k=Math.max(0,Math.min(1,illum/100));

  /* Moon glow */
  let glow=ctx.createRadialGradient(x,y,size*0.4,x,y,size*4.5);
  glow.addColorStop(0,"rgba(230,230,255,0.35)");
  glow.addColorStop(0.35,"rgba(180,190,255,0.12)");
  glow.addColorStop(1,"rgba(180,190,255,0)");

  ctx.fillStyle=glow;
  ctx.beginPath();
  ctx.arc(x,y,size*4.5,0,Math.PI*2);
  ctx.fill();

  /* Moon disk base */
  ctx.beginPath();
  ctx.arc(x,y,size,0,Math.PI*2);
  ctx.clip();

  let body=ctx.createRadialGradient(
    x-size*0.35,y-size*0.35,size*0.1,
    x,y,size*1.15
  );

  body.addColorStop(0,"#fff6dc");
  body.addColorStop(0.45,"#d8d2c0");
  body.addColorStop(1,"#6f6f72");

  ctx.fillStyle=body;
  ctx.fillRect(x-size,y-size,size*2,size*2);

  /* Phase shadow */
  ctx.globalCompositeOperation="source-over";

  let shadowAlpha=0.78;
  ctx.fillStyle="rgba(2,8,18,"+shadowAlpha+")";

  if(k<0.97){

    let shadowShift;

    if(k<0.5){
      shadowShift=size*(k*2);
    }else{
      shadowShift=size*((1-k)*2);
    }

    ctx.beginPath();

    if(waxing){
      ctx.ellipse(x-size*0.55+shadowShift,y,size*(1.15-shadowShift/size*0.3),size*1.15,0,0,Math.PI*2);
    }else{
      ctx.ellipse(x+size*0.55-shadowShift,y,size*(1.15-shadowShift/size*0.3),size*1.15,0,0,Math.PI*2);
    }

    if(k<0.5){
      ctx.fill();
    }else{
      ctx.globalCompositeOperation="destination-out";
      ctx.fill();
      ctx.globalCompositeOperation="source-over";
    }
  }

  /* Craters / maria */
  ctx.globalAlpha=0.28;
  ctx.fillStyle="rgba(70,70,75,0.75)";

  const spots=[
    [-0.25,-0.25,0.20],
    [0.18,-0.18,0.15],
    [-0.05,0.10,0.18],
    [0.28,0.20,0.12],
    [-0.32,0.28,0.10],
    [0.05,0.34,0.08]
  ];

  spots.forEach(s=>{
    ctx.beginPath();
    ctx.ellipse(
      x+s[0]*size,
      y+s[1]*size,
      s[2]*size,
      s[2]*size*0.65,
      0.4,
      0,
      Math.PI*2
    );
    ctx.fill();
  });

  ctx.restore();

  /* Moon rim */
  ctx.save();
  ctx.strokeStyle="rgba(255,255,255,0.85)";
  ctx.lineWidth=1;
  ctx.beginPath();
  ctx.arc(x,y,size,0,Math.PI*2);
  ctx.stroke();
  ctx.restore();
}
function skyStarAlias(name){
  const A={
    "Navi":"Gamma Cassiopeiae",
    "Ruchbah":"Delta Cassiopeiae",
    "Segin":"Epsilon Cassiopeiae",
    "Sadr":"Gamma Cygni",
    "Gienah Cygni":"Epsilon Cygni",
    "Delta Cygni":"Delta Cygni",
    "Albireo":"Beta Cygni",
    "Merak":"Beta Ursae Majoris",
    "Phecda":"Gamma Ursae Majoris",
    "Megrez":"Delta Ursae Majoris",
    "Mizar":"Zeta Ursae Majoris",
    "Pherkad":"Gamma Ursae Minoris",
    "Almach":"Gamma Andromedae",
    "Mirach":"Beta Andromedae",
    "Scheat":"Beta Pegasi",
    "Mintaka":"Delta Orionis",
    "Alnitak":"Zeta Orionis",
    "Saiph":"Kappa Orionis",
    "Mirzam":"Beta Canis Majoris",
    "Wezen":"Delta Canis Majoris",
    "Aludra":"Eta Canis Majoris",
    "Gomeisa":"Beta Canis Minoris",
    "Algieba":"Gamma Leonis",
    "Zosma":"Delta Leonis",
    "Chertan":"Theta Leonis",
    "Porrima":"Gamma Virginis",
    "Vindemiatrix":"Epsilon Virginis",
    "Zavijava":"Beta Virginis",
    "Zaniah":"Eta Virginis",
    "Muphrid":"Eta Bootis",
    "Izar":"Epsilon Bootis",
    "Nekkar":"Beta Bootis",
    "Seginus":"Gamma Bootis",
    "Tarazed":"Gamma Aquilae",
    "Alshain":"Beta Aquilae",
    "Okab":"Zeta Aquilae",
    "Sheliak":"Beta Lyrae",
    "Sulafat":"Gamma Lyrae"
  };
  return A[name] || name;
}
function drawSkyV3Constellations(ctx,plottedStars,selectedObject){

  let starMap=Object.assign({}, window.skyAllStarPositions || {}, plottedStars || {});

  ctx.save();

  CONSTELLATION_LINES.forEach(line=>{

    let a=starMap[line[0]] || starMap[skyStarAlias(line[0])];
let b=starMap[line[1]] || starMap[skyStarAlias(line[1])];

    if(!a || !b)return;

  ctx.strokeStyle="rgba(120,210,255,0.85)";
ctx.globalAlpha=0.75;
ctx.lineWidth=0.9;

    ctx.beginPath();
    ctx.moveTo(a.x,a.y);
    ctx.lineTo(b.x,b.y);
    ctx.stroke();

  });

  ctx.restore();
}

/* Override old Sky View completely */

window.drawSkyView = drawSkyViewV3;

window.autoUpdateSky = function(){
  drawSkyViewV3();
};

window.setupSkyViewControls = function(){

  let canvas=document.getElementById("skyCanvas");
  if(!canvas)return;

  let skyV3Dragging=false;
  let skyV3LastX=null;

  function getPoint(e){
    let rect=canvas.getBoundingClientRect();
    let p=e.touches ? e.touches[0] : e;

    return {
      x:p.clientX-rect.left,
      y:p.clientY-rect.top,
      rect:rect
    };
  }

  function trySelectObject(x,y){

  for(let i=skyObjects.length-1;i>=0;i--){

    let o=skyObjects[i];

    let dx=x-o.x;
    let dy=y-o.y;

    if(Math.sqrt(dx*dx+dy*dy)<34){

      /* Проверяем, есть ли объект в списке */
      let exists=false;

      for(let j=0;j<celestialObject.options.length;j++){
        if(celestialObject.options[j].value===o.name){
          exists=true;
          break;
        }
      }

      /* Если нет — добавляем */
      if(!exists){
        let opt=document.createElement("option");
        opt.value=o.name;
        opt.text=o.name;
        celestialObject.add(opt);
      }

      celestialObject.value=o.name;

      calculateObject();
      drawSkyViewV3();

      return true;
    }
  }

  return false;
}

  function start(e){
    let p=getPoint(e);

    if(trySelectObject(p.x,p.y)){
      e.preventDefault();
      return;
    }

    let activeTop=p.rect.height*0.55;
    let activeBottom=p.rect.height*0.95;

    if(p.y>activeTop && p.y<activeBottom){
      skyV3Dragging=true;
      skyV3LastX=p.x;
      e.preventDefault();
    }
  }

  function move(e){
    if(!skyV3Dragging)return;

    let p=getPoint(e);
    let dx=p.x-skyV3LastX;
    skyV3LastX=p.x;

    let current=parseFloat(skyCourse.value);
    if(isNaN(current))current=0;

    skyCourse.value=String(norm360(current+dx*0.35).toFixed(0)).padStart(3,"0");

    drawSkyViewV3();
    e.preventDefault();
  }

  function end(){
    skyV3Dragging=false;
    skyV3LastX=null;
  }

  canvas.addEventListener("touchstart",start,{passive:false});
  canvas.addEventListener("touchmove",move,{passive:false});
  canvas.addEventListener("touchend",end);

  canvas.addEventListener("mousedown",start);
  canvas.addEventListener("mousemove",move);
  canvas.addEventListener("mouseup",end);
  canvas.addEventListener("mouseleave",end);
};