const STAR_COLORS=[
  "#dcecff",
  "#edf4ff",
  "#fff6dd",
  "#ffdca0",
  "#ffb07a",
  "#ff8a65"
];

let BACKGROUND_STARS=[];

async function loadBackgroundStars(){

  try{
    let res=await fetch("data/background_stars.bin");
    let buf=await res.arrayBuffer();
    let view=new DataView(buf);

    let count=view.getUint16(0,true);
    let offset=2;

    BACKGROUND_STARS=[];

    for(let i=0;i<count;i++){

      let sha=view.getUint16(offset,true)/100; offset+=2;
      let dec=view.getInt16(offset,true)/100; offset+=2;
      let mag=view.getUint16(offset,true)/100; offset+=2;
      let colorIndex=view.getInt8(offset); offset+=1;

      BACKGROUND_STARS.push([
        "BG"+i,
        sha,
        dec,
        mag,
        STAR_COLORS[colorIndex] || "#ffffff"
      ]);
    }

    console.log("Background stars loaded:",BACKGROUND_STARS.length);

    if(typeof autoUpdateSky==="function"){
      autoUpdateSky();
    }

  }catch(e){
    console.log("Background stars load failed:",e);
  }
}

loadBackgroundStars();