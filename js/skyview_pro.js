/* Celestial Trainer - Sky View Pro */

console.log("Sky View Pro active");

function drawSkyViewPro(){
  drawSkyViewV3();

  let canvas=document.getElementById("skyCanvas");
  if(!canvas)return;

  let ctx=canvas.getContext("2d");
  let rect=canvas.getBoundingClientRect();
  let W=rect.width;
  let H=rect.height;

  ctx.save();
  ctx.setTransform(1,0,0,1,0,0);
  ctx.globalAlpha=0.18;

  /* PRO atmosphere */
let horizonGlow=ctx.createLinearGradient(0,H*0.35,0,H);

horizonGlow.addColorStop(0,"rgba(255,255,255,0)");
horizonGlow.addColorStop(0.55,"rgba(160,220,255,0.08)");
horizonGlow.addColorStop(0.78,"rgba(210,240,255,0.18)");
horizonGlow.addColorStop(1,"rgba(20,40,60,0.25)");

ctx.fillStyle=horizonGlow;
ctx.fillRect(0,0,W,H);

/* subtle lens vignette */
let v=ctx.createRadialGradient(W/2,H*0.35,W*0.10,W/2,H*0.35,W*0.95);
v.addColorStop(0,"rgba(255,255,255,0.03)");
v.addColorStop(0.68,"rgba(0,0,0,0)");
v.addColorStop(1,"rgba(0,0,0,0.42)");

ctx.fillStyle=v;
ctx.fillRect(0,0,W,H);

  ctx.restore();
}

/* Override active renderer */
window.drawSkyView=drawSkyViewPro;
window.autoUpdateSky=function(){
  drawSkyViewPro();
};

/* Override controls for PRO */
window.setupSkyViewControls=function(){

  let canvas=document.getElementById("skyCanvas");
  if(!canvas)return;

  let dragging=false;
  let lastX=null;

  function getPoint(e){
    let rect=canvas.getBoundingClientRect();
    let p=e.touches ? e.touches[0] : e;
    return {
      x:p.clientX-rect.left,
      y:p.clientY-rect.top,
      rect:rect
    };
  }

  function selectObject(x,y){
    for(let i=skyObjects.length-1;i>=0;i--){
      let o=skyObjects[i];
      let dx=x-o.x;
      let dy=y-o.y;

      if(Math.sqrt(dx*dx+dy*dy)<42){

        let exists=false;

        for(let j=0;j<celestialObject.options.length;j++){
          if(celestialObject.options[j].value===o.name){
            exists=true;
            break;
          }
        }

        if(!exists){
          let opt=document.createElement("option");
          opt.value=o.name;
          opt.text=o.name;
          celestialObject.add(opt);
        }

        celestialObject.value=o.name;
        calculateObject();
        drawSkyViewPro();
        return true;
      }
    }

    return false;
  }

  function start(e){
    let p=getPoint(e);

    if(selectObject(p.x,p.y)){
      e.preventDefault();
      return;
    }

    if(p.y>p.rect.height*0.50 && p.y<p.rect.height*0.96){
      dragging=true;
      lastX=p.x;
      e.preventDefault();
    }
  }

  function move(e){
    if(!dragging)return;

    let p=getPoint(e);
    let dx=p.x-lastX;
    lastX=p.x;

    let current=parseFloat(skyCourse.value);
    if(isNaN(current))current=0;

    skyCourse.value=String(norm360(current+dx*0.35).toFixed(0)).padStart(3,"0");

    drawSkyViewPro();
    e.preventDefault();
  }

  function end(){
    dragging=false;
    lastX=null;
  }

  canvas.addEventListener("touchstart",start,{passive:false});
  canvas.addEventListener("touchmove",move,{passive:false});
  canvas.addEventListener("touchend",end);

  canvas.addEventListener("mousedown",start);
  canvas.addEventListener("mousemove",move);
  canvas.addEventListener("mouseup",end);
  canvas.addEventListener("mouseleave",end);
};