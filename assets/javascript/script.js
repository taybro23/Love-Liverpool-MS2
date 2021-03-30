
// scroll to top button. code followed from w3s - https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

var btnScroll = document.querySelector("#btnscroll");

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