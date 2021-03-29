
// scroll to top button. code followed from youtube video and w3s - https://www.youtube.com/watch?v=FK5DEa1Hvco / https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

const btnScroll = document.querySelector("#btnscroll");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  };
};

btnScroll.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth",
    });
});

// navbar scroll fade, walkthrough from youtube video - https://www.youtube.com/watch?v=xYA2bcEHKg8&t=570s

$(document).ready(function() {
    $(window).scroll(function() {
        $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
    });
});

// places of interest buttons, walkthrough for jquery from CI used // 

/*$(document).ready(function (){

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
        $(".fomt4").toggle(); 
    });

    $("#fombtn5").click(function(){
        $(".fomt5").toggle(); 
    });

    $("#fombtn6").click(function(){
        $(".fomt6").toggle(); 
    });

});*/


// places mouse over event


function placesOne() {
    document.getElementsByClassName("image-overlay").style.display = "block";
};
function placesOneOut() {
    document.getElementsByClassName("image-overlay").style.display = "none";
};
