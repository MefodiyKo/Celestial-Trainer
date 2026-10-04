let sextantARBaseSet=false;
let sextantARBasePitch=0;
let sextantARBaseRoll=0;
let sextantARCenterAlt=0;

let sextantActive=false;
let sextantFrozenAngle=0;

let sextantStream=null;

let sextantBodyLocked=false;
let sextantBodyX=250;
let sextantBodyY=120;
let sextantDisplayBodyY=120;
let sextantHorizonY=180;

let sextantStartPitch=0;
let sextantStartRoll=0;
let sextantCurrentPitch=0;
let sextantCurrentRoll=0;
let sextantHeading=0;
let sextantHasHeading=false;
let sextantHeadingOffset=0;
let sextantPitchOffset=0;
let sextantLockedObject=null;
let sextantLockedHs=null;

function fillDMSFromDecimal(value, degId, minId, dirId, posDir, negDir){
  let dir = value >= 0 ? posDir : negDir;
  let abs = Math.abs(value);
  let deg = Math.floor(abs);
  let min = (abs - deg) * 60;

  document.getElementById(degId).value = deg;
  document.getElementById(minId).value = min.toFixed(3);
  document.getElementById(dirId).value = dir;
}

async function prepareSextantNavData(){

  let data = getInputData();
  if(!data.error) return true;

  if(!document.getElementById("dateUTC")?.value && typeof setNowUTC === "function"){
    setNowUTC();
    data=getInputData();
    if(!data.error)return true;
  }

  if(!navigator.geolocation){
    alert("GPS not available. Enter position manually.");
    return false;
  }

  return new Promise(resolve=>{
    navigator.geolocation.getCurrentPosition(
      pos=>{
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        fillDMSFromDecimal(lat,"latDeg","latMin","latDir","N","S");
        fillDMSFromDecimal(lon,"lonDeg","lonMin","lonDir","E","W");

        resolve(true);
      },
      err=>{
        alert("GPS position required for AR Sextant.");
        resolve(false);
      },
      {
        enableHighAccuracy:true,
        timeout:10000,
        maximumAge:0
      }
    );
  });
}
async function startSextant(){

  let navReady = await prepareSextantNavData();
if(!navReady)return;

  stopSextant();
  sextantActive=true;
  sextantARBaseSet=false;
  sextantHasHeading=false;
  sextantHeading=0;
  sextantHeadingOffset=0;
  sextantPitchOffset=0;
  window.removeEventListener("deviceorientation",handleSextantOrientation);
if(
  typeof DeviceOrientationEvent!=="undefined" &&
  typeof DeviceOrientationEvent.requestPermission==="function"
){
  try{

    let permission=
      await DeviceOrientationEvent.requestPermission();

    if(permission==="granted"){
      window.addEventListener(
        "deviceorientation",
        handleSextantOrientation
      );
    }else{
      alert("Sensor permission denied.");
      sextantActive=false;
      return;
    }

  }catch(err){
    alert("Sensor error: "+err);
    sextantActive=false;
    return;
  }
}else{
  window.addEventListener(
    "deviceorientation",
    handleSextantOrientation
  );
}
  try{
    sextantStream=await navigator.mediaDevices.getUserMedia({
      video:{facingMode:"environment"},
      audio:false
    });

    document.getElementById("sextantVideo").srcObject=sextantStream;

  }catch(e){
    alert("Camera error: "+e.message);
    sextantActive=false;
    window.removeEventListener("deviceorientation",handleSextantOrientation);
    return;
  }

  let canvas=document.getElementById("sextantCanvas");

  if(canvas){
    canvas.onclick=function(event){
      selectSextantBody(event);
    };
  }

  drawSextant();
  let view=document.getElementById("sextantView");

if(view){
  view.style.display="block";
  view.style.position="fixed";
  view.style.left="0";
  view.style.top="0";
  view.style.width="100vw";
  view.style.height="100vh";
  view.style.margin="0";
  view.style.borderRadius="0";
  view.style.zIndex="9999";
}

document.body.classList.add("sextant-fullscreen");

}

function stopSextant(){

  sextantActive=false;

  window.removeEventListener("deviceorientation",handleSextantOrientation);

  if(sextantStream){
    sextantStream.getTracks().forEach(t=>t.stop());
    sextantStream=null;
  }

  let video=document.getElementById("sextantVideo");
  if(video)video.srcObject=null;

document.body.classList.remove("sextant-fullscreen");
let view=document.getElementById("sextantView");

if(view){
  view.style.display="";
  view.style.position="relative";
  view.style.width="100%";
  view.style.height="360px";
  view.style.marginTop="15px";
  view.style.borderRadius="8px";
  view.style.zIndex="";
}
}

function handleSextantOrientation(event){

  sextantCurrentPitch=event.beta || 0;
  sextantCurrentRoll=event.gamma || 0;

if(!sextantARBaseSet){
  sextantARBasePitch=sextantCurrentPitch;
  sextantARBaseRoll=sextantCurrentRoll;
  sextantARBaseSet=true;
}
  let pitchBox=document.getElementById("sextantPitch");
  let rollBox=document.getElementById("sextantRoll");
if(typeof event.webkitCompassHeading==="number"){
  sextantHeading=event.webkitCompassHeading;
  sextantHasHeading=true;
}else if(typeof event.alpha==="number"){
  sextantHeading=norm360(360-event.alpha);
  sextantHasHeading=true;
}
  if(pitchBox){
    pitchBox.innerText=sextantCurrentPitch.toFixed(1)+"°";
  }

  if(rollBox){
    rollBox.innerText=sextantCurrentRoll.toFixed(1)+"°";
  }

  drawSextant();
}

function selectSextantBody(event){

  if(!sextantActive){
    alert("Start sensors first.");
    return;
  }

  let canvas=document.getElementById("sextantCanvas");
  let rect=canvas.getBoundingClientRect();

  let tapX=
    (event.clientX-rect.left)*
    (canvas.width/rect.width);

  let tapY=
    (event.clientY-rect.top)*
    (canvas.height/rect.height);

  let nearest=null;
  let nearestDistance=Infinity;

  getVisibleSkyObjects().forEach(object=>{
    let point=projectSextantObject(object.zn,object.hc,canvas);
    if(!point)return;

    let distance=Math.hypot(tapX-point.x,tapY-point.y);
    if(distance<nearestDistance){
      nearestDistance=distance;
      nearest={object,point};
    }
  });

  if(!nearest || nearestDistance>45){
    alert("Tap a labelled celestial object.");
    return;
  }

  sextantBodyX=nearest.point.x;
  sextantBodyY=nearest.point.y;
  sextantDisplayBodyY=nearest.point.y;
  sextantLockedObject=nearest.object.name;
  sextantLockedHs=nearest.object.hc;

  let objectSelect=document.getElementById("celestialObject");
  if(objectSelect){
    let hasOption=[...objectSelect.options]
      .some(option=>option.value===sextantLockedObject);

    if(!hasOption){
      let option=document.createElement("option");
      option.value=sextantLockedObject;
      option.textContent="⭐ "+sextantLockedObject;
      objectSelect.appendChild(option);
    }

    objectSelect.value=sextantLockedObject;
    if(typeof updateSightCorrections==="function"){
      updateSightCorrections();
    }
  }

  sextantStartPitch=sextantCurrentPitch;
  sextantStartRoll=sextantCurrentRoll;
  sextantBodyLocked=true;
sextantFrozenAngle=0;

let captured=document.getElementById("sextantCaptured");
if(captured){
  captured.innerText="--";
}
  drawSextant();
}

function getTrainingHs(){

  if(!sextantBodyLocked || !Number.isFinite(sextantLockedHs)){
    return 0;
  }

  return sextantLockedHs;
}

function getSextantTiltDelta(){
  let pitchDelta=sextantCurrentPitch-sextantStartPitch;
  let rollDelta=sextantCurrentRoll-sextantStartRoll;

  return Math.abs(pitchDelta)>=Math.abs(rollDelta)
    ? pitchDelta
    : rollDelta;
}

function getSextantRemainingAngle(){
  let canvas=document.getElementById("sextantCanvas");
  if(!canvas || !sextantBodyLocked)return Infinity;

  let pixelsPerDegree=canvas.height/90;
  return Math.abs(sextantDisplayBodyY-sextantHorizonY)/pixelsPerDegree;
}

function getSextantCameraAltitude(){
  let pitchDelta=sextantCurrentPitch-sextantARBasePitch;
  let rollDelta=sextantCurrentRoll-sextantARBaseRoll;
  let tiltMove=Math.abs(pitchDelta)>Math.abs(rollDelta)
    ? pitchDelta
    : rollDelta;

  return sextantARCenterAlt+tiltMove+sextantPitchOffset;
}

function getSextantProjectedHorizonY(canvas){
  let vFOV=90;
  let cameraAlt=getSextantCameraAltitude();
  let projectedY=canvas.height/2+(cameraAlt/(vFOV/2))*(canvas.height/2);

  /* Keep the training horizon visible after AR calibration. */
  let minY=canvas.height*0.35;
  let maxY=canvas.height*0.68;
  return Math.max(minY,Math.min(maxY,projectedY));
}

function freezeSextant(){

  if(!sextantActive || !sextantBodyLocked){
    alert("Start sensors and tap a labelled celestial object first.");
    return;
  }

  drawSextant();
  let remaining=getSextantRemainingAngle();

  if(remaining>1){
    alert(
      "Lower the captured body to the horizon. Remaining angle: "+
      remaining.toFixed(1)+"°"
    );
    return;
  }

  sextantFrozenAngle=getTrainingHs();

  let captured=document.getElementById("sextantCaptured");

  if(captured){
    captured.innerText=
      sextantFrozenAngle.toFixed(1)+"°";
  }

  alert("Body is on horizon. Hs captured for "+sextantLockedObject+".");
}
function useCapturedHsForSight(){

  if(!Number.isFinite(sextantFrozenAngle) || sextantFrozenAngle<=0){
    alert("No captured Hs available. Freeze angle first.");
    return;
  }

  let hsValue = sextantFrozenAngle;

  if(isNaN(hsValue)){
    alert("Captured Hs is not valid.");
    return;
  }

  let deg = Math.floor(hsValue);
  let min = (hsValue - deg) * 60;

  let hsDegInput = document.getElementById("hsDeg");
  let hsMinInput = document.getElementById("hsMin");

  if(hsDegInput && hsMinInput){
    hsDegInput.value = deg;
    hsMinInput.value = min.toFixed(1);

    hsDegInput.dispatchEvent(new Event("input"));
    hsMinInput.dispatchEvent(new Event("input"));
    hsDegInput.dispatchEvent(new Event("change"));
    hsMinInput.dispatchEvent(new Event("change"));
  }

  let object = sextantLockedObject || "Sun";
  let objectSelect=document.getElementById("celestialObject");
  if(objectSelect)objectSelect.value=object;

  if(typeof calculateObject==="function" && !calculateObject()){
    alert("Could not calculate the captured object for Sight Reduction.");
    return;
  }

  window.lastObservation = {
    source: "Digital Sextant",
    object: object,
    hsDecimal: hsValue,
    hsDeg: deg,
    hsMin: min.toFixed(1),

    dateUTC: document.getElementById("dateUTC")?.value || "",
    utcHour: document.getElementById("utcHour")?.value || "",
    utcMin: document.getElementById("utcMin")?.value || "",
    utcSec: document.getElementById("utcSec")?.value || "",

    latDeg: document.getElementById("latDeg")?.value || "",
    latMin: document.getElementById("latMin")?.value || "",
    latDir: document.getElementById("latDir")?.value || "",

    lonDeg: document.getElementById("lonDeg")?.value || "",
    lonMin: document.getElementById("lonMin")?.value || "",
    lonDir: document.getElementById("lonDir")?.value || ""
  };

  alert(
    "Observation sent to Sight Reduction:\n" +
    object + "\n" +
    "Hs: " + deg + "° " + min.toFixed(1) + "'"
  );

  stopSextant();

  let sightTab=[...document.querySelectorAll(".tab")]
    .find(button=>button.getAttribute("onclick")?.includes("'sight'"));
  if(sightTab && typeof openTab==="function")openTab("sight",sightTab);
}
function resetSextantBody(){

  sextantBodyLocked=false;
  sextantFrozenAngle=0;
  sextantBodyX=250;
  sextantBodyY=120;
  sextantDisplayBodyY=120;
  sextantStartPitch=sextantCurrentPitch;
  sextantStartRoll=sextantCurrentRoll;
  sextantLockedObject=null;
  sextantLockedHs=null;

  let captured=document.getElementById("sextantCaptured");
  if(captured){
    captured.innerText="--";
  }

  let angle=document.getElementById("sextantAngle");
  if(angle){
    angle.innerText="0.0°";
  }

  let hsDegInput=document.getElementById("hsDeg");
  let hsMinInput=document.getElementById("hsMin");
  if(hsDegInput)hsDegInput.value="";
  if(hsMinInput)hsMinInput.value="";

  if(window.lastObservation?.source==="Digital Sextant"){
    window.lastObservation=null;
  }

  drawSextant();
}
function drawSextant(){

  let canvas=document.getElementById("sextantCanvas");
  if(!canvas)return;

  let ctx=canvas.getContext("2d");

  ctx.clearRect(0,0,canvas.width,canvas.height);

  sextantHorizonY=getSextantProjectedHorizonY(canvas);

  let hs=getTrainingHs();

  let angleBox=document.getElementById("sextantAngle");
  if(angleBox){
    angleBox.innerText=hs.toFixed(1)+"°";
  }

  ctx.strokeStyle="#9ee7ff";
  ctx.lineWidth=3;
  ctx.beginPath();
  ctx.moveTo(0,sextantHorizonY);
  ctx.lineTo(canvas.width,sextantHorizonY);
  ctx.stroke();

  ctx.strokeStyle="#ffd966";
  ctx.lineWidth=2;
  ctx.beginPath();
  ctx.moveTo(canvas.width/2,sextantHorizonY-25);
  ctx.lineTo(canvas.width/2,sextantHorizonY+25);
  ctx.stroke();

  ctx.fillStyle="white";
  ctx.font="18px Arial";
  ctx.fillText("Camera Sextant Training Mode",20,35);

  ctx.fillStyle="#ffffff";
  ctx.font="16px Arial";

  if(!sextantBodyLocked){
    ctx.fillText("1. Aim camera at body",20,65);
    ctx.fillText("2. Tap the body",20,95);
  }else{
    ctx.fillText("3. Lower body to horizon",20,65);
    ctx.fillText("4. Freeze when body touches horizon",20,95);
  }

  ctx.fillText("Hs: "+hs.toFixed(1)+"°",20,125);

  if(sextantBodyLocked){

    let indexMovement=Math.abs(getSextantTiltDelta());
    let pixelsPerDegree=canvas.height/90;
    let remainingAngle=sextantLockedHs-indexMovement;

    sextantDisplayBodyY=
      sextantHorizonY-
      remainingAngle*pixelsPerDegree;

    ctx.strokeStyle="#ffd966";
    ctx.lineWidth=2;

    ctx.beginPath();
    ctx.moveTo(sextantBodyX,sextantDisplayBodyY);
    ctx.lineTo(sextantBodyX,sextantHorizonY);
    ctx.stroke();

    ctx.fillStyle="#ffd966";
    ctx.beginPath();
    ctx.arc(sextantBodyX,sextantDisplayBodyY,10,0,Math.PI*2);
    ctx.fill();

    ctx.fillStyle="#ffd966";
    ctx.font="15px Arial";
    ctx.fillText(sextantLockedObject || "BODY",sextantBodyX+15,sextantDisplayBodyY+5);
  }

  ctx.fillStyle="#9ee7ff";
  ctx.font="14px Arial";
  ctx.fillText("HORIZON",20,sextantHorizonY-10);

  ctx.fillStyle="#cccccc";
  ctx.font="12px Arial";
  ctx.fillText("For training only — not for official navigation",20,340);
  drawSextantSkyObjects(ctx,canvas);
}
function drawSextantSkyObjects(ctx,canvas){

  let data=getInputData();
  if(data.error){
    ctx.fillStyle="red";
    ctx.font="16px Arial";
    ctx.fillText("AR: no UTC / position data",20,165);
    return;
  }
  let course=parseFloat(skyCourse.value);
  if(isNaN(course))course=0;

  let W=canvas.width;
  let H=canvas.height;

  let objects=getVisibleSkyObjects();

  let visibleCount=0;
  let showLabels=document.getElementById("showSkyLabels")?.checked!==false;

  objects.forEach(o=>{

let p = projectSextantObject(o.zn,o.hc,canvas);
    if(!p)return;

    visibleCount++;

    let size=4;

    if(o.type==="sun")size=12;
    else if(o.type==="moon")size=10;
    else if(o.name==="Venus")size=7;
    else if(o.type==="planet")size=6;
    else size=Math.max(2,5-o.mag);

    ctx.save();

    ctx.globalAlpha=0.95;

    ctx.fillStyle=
      o.type==="sun"?"#ffd966":
      o.type==="moon"?"#dddddd":
      o.name==="Mars"?"#ff8a65":
      o.name==="Jupiter"?"#ffe0a0":
      o.name==="Saturn"?"#ffe08a":
      "#ffffff";

    ctx.beginPath();
    ctx.arc(p.x,p.y,size,0,Math.PI*2);
    ctx.fill();

    ctx.strokeStyle="rgba(255,217,102,0.9)";
    ctx.lineWidth=1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,size+5,0,Math.PI*2);
    ctx.stroke();

    if(showLabels){
      ctx.fillStyle="#ffffff";
      ctx.font="14px Arial";
      ctx.fillText(o.name,p.x+size+7,p.y+5);
    }

    ctx.restore();

  });

  ctx.save();
  ctx.fillStyle="#9ee7ff";
  ctx.font="14px Arial";
ctx.fillText(
  "AR Sky | objects: "+visibleCount+
  " | HDG "+(sextantHasHeading?sextantHeading.toFixed(0):"---")+"°"+
  " | Pitch "+sextantCurrentPitch.toFixed(0)+"°"+
  " | HOff "+sextantHeadingOffset.toFixed(0)+"°"+
  " | POff "+sextantPitchOffset.toFixed(0)+"°",
  20,
  165
);
  ctx.restore();
}

function projectSextantObject(zn,hc,canvas){
  if(hc<=0)return null;

  let W=canvas.width;
  let H=canvas.height;
  let courseInput=document.getElementById("skyCourse");
  let heading=sextantHasHeading
    ? sextantHeading
    : parseFloat(courseInput?.value);
  if(isNaN(heading))heading=0;

  heading=norm360(heading+sextantHeadingOffset);
  let relAz=normalizeError(zn-heading);
  let hFOV=120;
  if(relAz < -hFOV/2 || relAz > hFOV/2)return null;

  let x=W/2+(relAz/(hFOV/2))*(W/2);
  let horizonY=getSextantProjectedHorizonY(canvas);
  let vFOV=90;
  let pixelsPerDegree=H/vFOV;
  let y=horizonY-hc*pixelsPerDegree;
  if(y < -H*0.15 || y > H*1.15)return null;

  return {
    x,
    y
  };
}

/* ===== AR calibration ===== */

function adjustARHeading(delta){
  sextantHeadingOffset += delta;
  drawSextant();
}

function adjustARPitch(delta){
  sextantPitchOffset += delta;
  drawSextant();
}

function resetARCalibration(){
  sextantHeadingOffset = 0;
  sextantPitchOffset = 0;
  drawSextant();
}


function nudgeARLeft(){ adjustARHeading(-1); }
function nudgeARRight(){ adjustARHeading(1); }
function nudgeARUp(){ adjustARPitch(1); }
function nudgeARDown(){ adjustARPitch(-1); }
function calibrateARToSelectedObject(){

  let selected=document.getElementById("celestialObject")?.value || "Sun";
  let objects=getVisibleSkyObjects();
  let target=objects.find(o=>o.name===selected);

  if(!target){
    alert(selected+" is not visible now.");
    return;
  }

  let heading=sextantHasHeading ? sextantHeading : parseFloat(skyCourse.value);
  if(isNaN(heading))heading=0;

  sextantHeadingOffset=normalizeError(target.zn-heading);

  let pitchDelta=sextantCurrentPitch-sextantARBasePitch;
  let rollDelta=sextantCurrentRoll-sextantARBaseRoll;

  let tiltMove=
    Math.abs(pitchDelta)>Math.abs(rollDelta)
    ? pitchDelta
    : rollDelta;

  sextantPitchOffset=target.hc-sextantARCenterAlt-tiltMove;

  drawSextant();

  alert(
    "AR calibrated to "+selected+
    "\nHeading offset: "+sextantHeadingOffset.toFixed(1)+"°"+
    "\nPitch offset: "+sextantPitchOffset.toFixed(1)+"°"
  );
}
