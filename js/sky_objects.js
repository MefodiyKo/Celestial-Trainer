function getVisibleSkyObjects(){

  let data=getInputData();
  if(data.error)return [];

  let objects=[];

  let sun=sunAlmanac(data.date,data.time);
  let sunR=calculateHcZn(data.lat,sun.Dec,norm360(sun.GHA+data.lon));

  objects.push({name:"Sun",type:"sun",hc:sunR.Hc,zn:sunR.Zn,mag:-26});

  let moon=moonAlmanac(data.date,data.time);
  let moonR=calculateHcZn(data.lat,moon.Dec,norm360(moon.GHA+data.lon));

  objects.push({name:"Moon",type:"moon",hc:moonR.Hc,zn:moonR.Zn,mag:-12});

  ["Venus","Mars","Jupiter","Saturn"].forEach(name=>{
    let p=planetAlmanac(data.date,data.time,name);
    let r=calculateHcZn(data.lat,p.Dec,norm360(p.GHA+data.lon));

    objects.push({
      name:name,
      type:"planet",
      hc:r.Hc,
      zn:r.Zn,
      mag:0
    });
  });

  for(let name in STAR_CATALOG){
    let st=STAR_CATALOG[name];
    let GHA=norm360(sun.GHAAries+st.SHA);
    let r=calculateHcZn(data.lat,st.Dec,norm360(GHA+data.lon));

    objects.push({
      name:name,
      type:"star",
      hc:r.Hc,
      zn:r.Zn,
      mag:st.Mag
    });
  }

  return objects.filter(o=>o.hc>0);
}