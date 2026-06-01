 let currentAltitude = null;

function openTab(tabName, button) {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    button.classList.add("active");
}

function updateUTC() {
    document.getElementById("utc").innerText =
        new Date().toISOString().substring(11, 19);
}

setInterval(updateUTC, 1000);
updateUTC();

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

function formatAngle(decimalDegrees) {
    let deg = Math.floor(decimalDegrees);
    let min = (decimalDegrees - deg) * 60;

    return deg + "° " + min.toFixed(1) + "'";
}

function calcGyro() {
    let trueB = parseFloat(document.getElementById("trueBearing").value);
    let gyroB = parseFloat(document.getElementById("gyroBearing").value);

    if (isNaN(trueB) || isNaN(gyroB)) {
        document.getElementById("gyroResult").innerText = "Enter both values";
        return;
    }

    let error = trueB - gyroB;

    while (error > 180) error -= 360;
    while (error < -180) error += 360;

    let direction = error >= 0 ? "E" : "W";

    document.getElementById("gyroResult").innerText =
        "Gyro Error: " + Math.abs(error).toFixed(1) + "° " + direction;
}

function calcCompass() {
    let t = parseFloat(document.getElementById("trueCompass").value);
    let c = parseFloat(document.getElementById("compassBearing").value);

    if (isNaN(t) || isNaN(c)) {
        document.getElementById("compassResult").innerText = "Enter both values";
        return;
    }

    let error = t - c;

    while (error > 180) error -= 360;
    while (error < -180) error += 360;

    let dir = error >= 0 ? "E" : "W";

    document.getElementById("compassResult").innerText =
        "Compass Error: " + Math.abs(error).toFixed(1) + "° " + dir;
}

function calcTotalError() {
    let v = parseFloat(document.getElementById("variation").value);
    let d = parseFloat(document.getElementById("deviation").value);

    if (isNaN(v) || isNaN(d)) {
        document.getElementById("totalErrorResult").innerText =
            "Enter variation and deviation";
        return;
    }

    let total = v + d;
    let dir = total >= 0 ? "E" : "W";

    document.getElementById("totalErrorResult").innerText =
        "Total Error: " + Math.abs(total).toFixed(1) + "° " + dir;
}