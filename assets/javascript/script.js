// places of interest buttons, walkthrough for jquery from CI used // 

$(document).ready(function (){

    $("#fombtn1").click(function(){
        $("#fomt1").toggle(); 
        });

    $("#fombtn2").click(function(){
        $("#fomt2").toggle(); 
        });

    $("#fombtn3").click(function(){
        $(".fomt3").toggle(); 
        });
    
    $("#fombtn4").click(function(){
        $("#fomt4").toggle(); 
        });

    $("#fombtn5").click(function(){
        $("#fomt5").toggle(); 
        });

    $("#fombtn6").click(function(){
        $("#fomt6").toggle(); 
        });

    });


// the beatles, albert dock, liverpool cathederal 



// scroll to top button. code followed from youtube video - https://www.youtube.com/watch?v=FK5DEa1Hvco

const btnScroll = document.querySelector("#btnscroll");

btnScroll.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth"
    });
});

