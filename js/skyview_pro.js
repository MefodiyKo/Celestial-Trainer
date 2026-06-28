/* Celestial Trainer - Sky View Pro */

console.log("Sky View Pro loaded");

/* PRO override */
window.drawSkyView = function(){
  drawSkyViewV3();
};

window.autoUpdateSky = function(){
  drawSkyViewV3();
};