let sextantActive=false;
let sextantFrozenAngle=0;

let sextantStream=null;

let sextantBodyLocked=false;
let sextantBodyX=250;
let sextantBodyY=120;
let sextantDisplayBodyY=120;
let sextantHorizonY=180;

let sextantStartPitch=0;
let sextantCurrentPitch=0;
let sextantCurrentRoll=0;
let sextantHeading=0;
let sextantHasHeading=false;
let sextantPixelScale=6;

async function startSextant(){

  sextantActive=true;
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
    }

  }catch(err){
    alert("Sensor error: "+err);
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

  let canvas=document.getElementById("sextantCanvas");
  let rect=canvas.getBoundingClientRect();

  sextantBodyX=
    (event.clientX-rect.left)*
    (canvas.width/rect.width);

  sextantBodyY=
    (event.clientY-rect.top)*
    (canvas.height/rect.height);

  sextantStartPitch=sextantCurrentPitch;
  sextantBodyLocked=true;
sextantFrozenAngle=0;

let captured=document.getElementById("sextantCaptured");
if(captured){
  captured.innerText="--";
}
  drawSextant();
}

function getTrainingHs(){

  if(!sextantBodyLocked){
    return 0;
  }

  return Math.abs(
    sextantCurrentPitch - sextantStartPitch
  );
}
function freezeSextant(){

  sextantFrozenAngle=getTrainingHs();

  let captured=document.getElementById("sextantCaptured");

  if(captured){
    captured.innerText=
      sextantFrozenAngle.toFixed(1)+"°";
  }

  if(sextantFrozenAngle<=0.2){
    alert("Body is on horizon. Hs captured.");
  }else{
    alert(
      "Body is not on horizon yet. Current remaining angle: "+
      sextantFrozenAngle.toFixed(1)+"°"
    );
  }
}
function useCapturedHsForSight(){

  let capturedText = document.getElementById("sextantCaptured")?.innerText || "--";

  if(capturedText === "--"){
    alert("No captured Hs available. Freeze angle first.");
    return;
  }

  let hsValue = parseFloat(capturedText);

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

  let object = document.getElementById("celestialObject")?.value || "Sun";

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
}
function resetSextantBody(){

  sextantBodyLocked=false;
  sextantFrozenAngle=0;
  sextantBodyX=250;
  sextantBodyY=120;
  sextantDisplayBodyY=120;
  sextantStartPitch=sextantCurrentPitch;

  let captured=document.getElementById("sextantCaptured");
  if(captured){
    captured.innerText="--";
  }

  let angle=document.getElementById("sextantAngle");
  if(angle){
    angle.innerText="0.0°";
  }

  drawSextant();
}
function drawSextant(){

  let canvas=document.getElementById("sextantCanvas");
  if(!canvas)return;

  let ctx=canvas.getContext("2d");

  ctx.clearRect(0,0,canvas.width,canvas.height);

  sextantHorizonY=canvas.height/2;

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

    let pitchDelta=
      sextantCurrentPitch-sextantStartPitch;

    sextantDisplayBodyY=
      sextantBodyY+
      pitchDelta*sextantPixelScale;

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
    ctx.fillText("BODY",sextantBodyX+15,sextantDisplayBodyY+5);
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