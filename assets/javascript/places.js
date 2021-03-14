var toggled = false

function fombtn1() {
    if (!toggled) {
        toggled = true;
        document.getElementById("fomt1").style.display = "none";
        return;
    }
    if (toggled) {
        toggled = false;
        document.getElementById("fomt1").style.display = "block";
        return;
    }
}

function fombtn2() {
    if (!toggled) {
        toggled = true;
        document.getElementById("fomt2").style.display = "none";
        return;
    }
    if (toggled) {
        toggled = false;
        document.getElementById("fomt2").style.display = "block";
        return;
    }
}

function fombtn3() {
    if (!toggled) {
        toggled = true;
        document.getElementById("fomt3").style.display = "none";
        document.getElementById("fomt4").style.display = "none";
        return;
    }
    if (toggled) {
        toggled = false;
        document.getElementById("fomt3").style.display = "block";
        document.getElementById("fomt4").style.display = "block";
        return;
    }
}