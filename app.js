let currentAltitude = null;

function openTab(tabName, button) {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(tabName).classList.add("active");
    button.classList.add("active");
}

function updateUTC() {
    const utc = new Date().toISOString().substring(11, 19);
    const utcBox = document.getElementById("utc");
    if (utcBox) utcBox.innerText = utc;
}

setInterval(updateUTC, 1000);
updateUTC();

function normalizeAngle(a) {
    while (a >= 360) a -= 360;
    while (a < 0) a += 360;
    return a;
}

function normalizeError(e) {
    while (e > 180) e -= 360;
    while (e < -180) e += 360;
    return e;
}

function formatError(e) {
    e = normalizeError(e);
    let dir = e >= 0 ? "E" : "W";
    return Math.abs(e).toFixed(1) + "° " + dir;
}

function formatAngle(a) {
    let deg = Math.floor(a);
    let min = (a - deg) * 60;
    return deg + "° " + min.toFixed(1) + "'";
}

async function startSextant() {
    if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
        try {
            const permission = await DeviceOrientationEvent.requestPermission();
            if (permission !== "granted") {
                alert("Sensor permission not granted");
                return;
            }
        } catch (e) {
            alert("Sensor permission error");
            return;
        }
    }

    window.addEventListener("deviceorientation", handleOrientation);
}

function handleOrientation(event) {
    let beta = event.beta;

    if (beta === null) {
        document.getElementById("altitude").innerText = "Sensor not available";
        return;
    }

    let altitude = 90 - Math.abs(90 - beta);

    if (altitude < 0) altitude = 0;
    if (altitude > 90) altitude = 90;

    currentAltitude = altitude;
    document.getElementById("altitude").innerText = formatAngle(altitude);
}

function calcGyro() {
    let trueB = parseFloat(document.getElementById("trueBearing").value);
    let gyroB = parseFloat(document.getElementById("gyroBearing").value);

    if (isNaN(trueB) || isNaN(gyroB)) {
        document.getElementById("gyroResult").innerText = "Enter both values";
        return;
    }

    let error = normalizeError(trueB - gyroB);

    document.getElementById("gyroResult").innerText =
        "Gyro Error: " + formatError(error);
}

function calcCompass() {
    let t = parseFloat(document.getElementById("trueCompass").value);
    let c = parseFloat(document.getElementById("compassBearing").value);

    if (isNaN(t) || isNaN(c)) {
        document.getElementById("compassResult").innerText = "Enter both values";
        return;
    }

    let error = normalizeError(t - c);

    document.getElementById("compassResult").innerText =
        "Compass Error: " + formatError(error);
}

function calcTotalError() {
    let v = parseFloat(document.getElementById("variation").value);
    let d = parseFloat(document.getElementById("deviation").value);

    if (isNaN(v) || isNaN(d)) {
        document.getElementById("totalErrorResult").innerText =
            "Enter variation and deviation";
        return;
    }

    let total = normalizeError(v + d);

    document.getElementById("totalErrorResult").innerText =
        "Total Error: " + formatError(total);
}

/*
Temporary test almanac.
Later this function will be replaced by real offline almanac calculation:
Date + UTC + Lat + Lon + Object → True Bearing / Zn
*/
function getTrueBearingFromAlmanac(objectName) {
    if (objectName === "Sun") return 063.0;
    if (objectName === "Moon") return 219.0;
    if (objectName === "Venus") return 120.0;
    if (objectName === "Mars") return 145.0;
    if (objectName === "Jupiter") return 180.0;
    if (objectName === "Saturn") return 200.0;
if (objectName === "Polaris") return 0.0;
    if (objectName === "Sirius") return 135.0;
    if (objectName === "Canopus") return 160.0;
    return 0.0;
}

function calculateObservation() {
    let date = document.getElementById("obsDate").value;
    let time = document.getElementById("obsTime").value;
    let lat = document.getElementById("obsLat").value;
    let lon = document.getElementById("obsLon").value;
    let objectName = document.getElementById("objectName").value;

    let gyroBearing = parseFloat(document.getElementById("obsGyro").value);
    let standardBearing = parseFloat(document.getElementById("obsStandard").value);
    let variation = parseFloat(document.getElementById("obsVariation").value);

    if (isNaN(gyroBearing) || isNaN(standardBearing) || isNaN(variation)) {
        document.getElementById("observationResult").innerHTML =
            "Enter Gyro Bearing, Standard Bearing and Variation";
        return;
    }

    let trueBearing = getTrueBearingFromAlmanac(objectName);

    let gyroError = normalizeError(trueBearing - gyroBearing);
    let compassError = normalizeError(trueBearing - standardBearing);
    let deviation = normalizeError(compassError - variation);

    document.getElementById("observationResult").innerHTML =
        "<b>COMPASS OBSERVATION</b><br><br>" +
        "Date: " + (date || "--") + "<br>" +
        "UTC: " + (time || "--") + "<br>" +
        "Position: " + (lat || "--") + " / " + (lon || "--") + "<br>" +
        "Object: " + objectName + "<br><br>" +
        "True Bearing: " + trueBearing.toFixed(1) + "°<br>" +
        "Gyro Bearing: " + gyroBearing.toFixed(1) + "°<br>" +
        "Standard Bearing: " + standardBearing.toFixed(1) + "°<br><br>" +
        "Gyro Error: " + formatError(gyroError) + "<br>" +
        "Compass Error: " + formatError(compassError) + "<br>" +
        "Variation: " + formatError(variation) + "<br>" +
        "Deviation: " + formatError(deviation);
}