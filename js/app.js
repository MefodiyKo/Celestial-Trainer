window.addEventListener("load", function(){

  if(typeof setNowUTC==="function") setNowUTC();
  if(typeof populateObjectList==="function") populateObjectList();
  if(typeof updateSightCorrections==="function") updateSightCorrections();

  if(typeof drawSkyView==="function") drawSkyView();
  else if(typeof autoUpdateSky==="function") autoUpdateSky();

  if(typeof showStarPlanner==="function") showStarPlanner();
  if(typeof showPlanetFinder==="function") showPlanetFinder();
  if(typeof showTheory==="function") showTheory();

  if(typeof setupSkyViewControls==="function"){
    setupSkyViewControls();
  }

});