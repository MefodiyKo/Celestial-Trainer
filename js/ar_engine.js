/* Celestial Trainer - AR Engine v1 */

const CT_AR = {
  hFOV: 120,
  vFOV: 90,

  toRad(d){ return d * Math.PI / 180; },
  toDeg(r){ return r * 180 / Math.PI; },

  clampAngle(a){
    while(a < -180) a += 360;
    while(a > 180) a -= 360;
    return a;
  },

  objectVector(az, alt){
    let A = this.toRad(az);
    let h = this.toRad(alt);

    return {
      x: Math.cos(h) * Math.sin(A),
      y: Math.sin(h),
      z: Math.cos(h) * Math.cos(A)
    };
  },

  cameraVectorFromDevice(heading, pitch, roll){
    let hdg = this.toRad(heading);
    let alt = this.toRad(90 - Math.abs(pitch));

    return {
      x: Math.cos(alt) * Math.sin(hdg),
      y: Math.sin(alt),
      z: Math.cos(alt) * Math.cos(hdg),
      roll: this.toRad(roll || 0)
    };
  },

  projectObject(az, alt, heading, pitch, roll, W, H){

    if(alt <= 0) return null;

    let relAz = this.clampAngle(az - heading);

    let cameraAlt = 0;
    let relAlt = alt - cameraAlt;

    if(relAz < -this.hFOV/2 || relAz > this.hFOV/2) return null;
    if(relAlt < -this.vFOV/2 || relAlt > this.vFOV/2) return null;

    let x = W/2 + (relAz / (this.hFOV/2)) * (W/2);
    let y = H/2 - (relAlt / (this.vFOV/2)) * (H/2);

    let r = this.toRad(roll || 0);
    let dx = x - W/2;
    let dy = y - H/2;

    return {
      x: W/2 + dx*Math.cos(r) - dy*Math.sin(r),
      y: H/2 + dx*Math.sin(r) + dy*Math.cos(r)
    };
  }
};