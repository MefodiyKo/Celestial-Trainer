window.addEventListener("DOMContentLoaded", function(){

  setTimeout(function(){

    if(typeof setNowUTC==="function") setNowUTC();
    if(typeof populateObjectList==="function") populateObjectList();
    if(typeof updateSightCorrections==="function") updateSightCorrections();

    if(typeof autoUpdateSky==="function") autoUpdateSky();
    else if(typeof drawSkyView==="function") drawSkyView();

    if(typeof setupSkyViewControls==="function"){
      setupSkyViewControls();
    }

    if(typeof showStarPlanner==="function") showStarPlanner();
    if(typeof showPlanetFinder==="function") showPlanetFinder();
    if(typeof showTheory==="function") showTheory();

  },300);

});