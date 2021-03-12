
/*
onclick="fombtn1()"

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


onclick="fombtn2()"

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


onclick="fombtn3()"

function fombtn3() {
    if (!toggled) {
        toggled = true;
        document.getElementById("fomt3").style.display = "none";
        return;
    }
    if (toggled) {
        toggled = false;
        document.getElementById("fomt3").style.display = "block";
        return;
    }
}

*/

$("#fombtn1").click(function(){
   $("#fomt1").toggle(); 
});
$("#fombtn2").click(function(){
   $("#fomt2").toggle(); 
});
$("#fombtn3").click(function(){
   $(".fomt3").toggle(); 
});
