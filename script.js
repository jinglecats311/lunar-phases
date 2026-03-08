function checkMoonPhase() {
    var input = document.getElementById("dateInput").value;
    var d = new Date(input);

    // Reference from new moon
    var knownNewMoon = new Date("1990-01-27");
    var diffTime = d - knownNewMoon;
    var diffDays = diffTime / 1000 / 60 / 60 / 24;

    // Lunar cycle (average)
    var lunation = 29.53;
    var phase = (diffDays % lunation) / lunation;

    var phaseName = "";
    var illumination = 0;

    if (phase < 0.03 || phase > 0.97) {
        phaseName = "New Moon";
        illumination = 0;
    } else if (phase < 0.22) {
        phaseName = "Waxing Crescent";
        illumination = phase * 100;
    } else if (phase < 0.28) {
        phaseName = "First Quarter";
        illumination = 50;
    } else if (phase < 0.47) {
        phaseName = "Waxing Gibbous";
        illumination = 50 + (phase - 0.28)/0.19 * 50;
    } else if (phase < 0.53) {
        phaseName = "Full Moon";
        illumination = 100;
    } else if (phase < 0.72) {
        phaseName = "Waning Gibbous";
        illumination = 100 - (phase - 0.53)/0.19 * 50;
    } else if (phase < 0.78) {
        phaseName = "Last Quarter";
        illumination = 50;
    } else {
        phaseName = "Waning Crescent";
        illumination = 50 - (phase - 0.78)/0.22 * 50;
    }

    illumination = Math.round(illumination);

    document.getElementById("result").innerHTML = 
        "Moon phase: " + phaseName + "<br>" +
        "Illumination: " + illumination + "%";
}