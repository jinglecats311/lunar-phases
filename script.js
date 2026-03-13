function checkMoonPhase() {
    var input = document.getElementById("dateInput").value;
    var parts = input.split("-");
    var d = new Date(Date.UTC(parts[0], parts[1]-1, parts[2], 12));

    // Reference from new moon
    var knownNewMoon = new Date("2000-01-06T18:14:00");
    var diffTime = d - knownNewMoon;
    var diffDays = diffTime / 1000 / 60 / 60 / 24;

    // Lunar cycle (average)
    var lunation = 29.53058867;
    var phase = ((diffDays % lunation) + lunation) % lunation / lunation;

    var phaseName = "";
    var illumination = 0;

    if (phase < 0.03 || phase > 0.97) {
        phaseName = "New Moon";
    } else if (phase < 0.22) {
        phaseName = "Waxing Crescent";
    } else if (phase < 0.28) {
        phaseName = "First Quarter";
    } else if (phase < 0.47) {
        phaseName = "Waxing Gibbous";
    } else if (phase < 0.53) {
        phaseName = "Full Moon";
    } else if (phase < 0.72) {
        phaseName = "Waning Gibbous";
    } else if (phase < 0.78) {
        phaseName = "Last Quarter";
    } else {
        phaseName = "Waning Crescent";
    }

    var illumination = Math.round((1 - Math.cos(2 * Math.PI * phase)) / 2 * 100);

    document.getElementById("result").innerHTML = 
        "Moon phase: " + phaseName + "<br>" +
        "Illumination: " + illumination + "%";

}
