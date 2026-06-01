function openTab(tabName, button) {
    const sections = document.querySelectorAll(".section");
    const tabs = document.querySelectorAll(".tab");

    sections.forEach(section => section.classList.remove("active"));
    tabs.forEach(tab => tab.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    button.classList.add("active");
}

function updateUTC() {
    const utcBox = document.getElementById("utc");
    if (utcBox) {
        utcBox.innerText = new Date().toISOString().substring(11, 19);
    }
}

setInterval(updateUTC, 1000);
updateUTC();

function normalizeError(error) {
    while (error > 180) error -= 360;
    while (error < -180) error += 360;
    return error;
}

function formatError(error) {
    error = normalizeError(error);
    const dir = error >= 0 ? "E" : "W";
    return Math.abs(error).toFixed(1) + "° " + dir;
}

function calcGyro() {
    const trueB = parseFloat(document.getElementById("trueBearing").value);
    const gyroB = parseFloat(document.getElementById("gyroBearing").value);

    if (isNaN(trueB) || isNaN(gyroB)) {
        document.getElementById("gyroResult").innerText = "Enter both values";
        return;
    }

    const error = normalizeError(trueB - gyroB);
    document.getElementById("gyroResult").innerText =
        "Gyro Error: " + formatError(error);
}

function calcCompass() {
    const trueB = parseFloat(document.getElementById("trueCompass").value);
    const compassB = parseFloat(document.getElementById("compassBearing").value);

    if (isNaN(trueB) || isNaN(compassB)) {
        document.getElementById("compassResult").innerText = "Enter both values";
        return;
    }

    const error = normalizeError(trueB - compassB);
    document.getElementById("compassResult").innerText =
        "Compass Error: " + formatError(error);
}

function calcTotalError() {
    const variation = parseFloat(document.getElementById("variation").value);
    const deviation = parseFloat(document.getElementById("deviation").value);

    if (isNaN(variation) || isNaN(deviation)) {
        document.getElementById("totalErrorResult").innerText =
            "Enter variation and deviation";
        return;
    }

    const total = normalizeError(variation + deviation);
    document.getElementById("totalErrorResult").innerText =
        "Total Error: " + formatError(total);
}

async function startSextant() {
    alert("Sextant sensor test started");
}

function calculateObservation() {
    const objectName = document.getElementById("objectName").value;
    const gyroBearing = parseFloat(document.getElementById("obsGyro").value);
    const standardBearing = parseFloat(document.getElementById("obsStandard").value);
    const variation = parseFloat(document.getElementById("obsVariation").value);

    if (isNaN(gyroBearing) || isNaN(standardBearing) || isNaN(variation)) {
        document.getElementById("observationResult").innerHTML =
            "Enter Gyro Bearing, Standard Bearing and Variation";
        return;
    }

    const trueBearing = 63.0;

    const gyroError = normalizeError(trueBearing - gyroBearing);
    const compassError = normalizeError(trueBearing - standardBearing);
    const deviation = normalizeError(compassError - variation);

    document.getElementById("observationResult").innerHTML =
        "<b>COMPASS OBSERVATION</b><br><br>" +
        "Object: " + objectName + "<br>" +
        "True Bearing: " + trueBearing.toFixed(1) + "°<br>" +
        "Gyro Bearing: " + gyroBearing.toFixed(1) + "°<br>" +
        "Standard Bearing: " + standardBearing.toFixed(1) + "°<br><br>" +
        "Gyro Error: " + formatError(gyroError) + "<br>" +
        "Compass Error: " + formatError(compassError) + "<br>" +
        "Variation: " + formatError(variation) + "<br>" +
        "Deviation: " + formatError(deviation);
}