
// navbar scroll fade, walkthrough from youtube video - https://www.youtube.com/watch?v=xYA2bcEHKg8&t=570s

$(document).ready(function() {
    $(window).scroll(function() {
        $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
    });
});

// scroll to top button, help from youtube video and w3s - https://www.youtube.com/watch?v=FK5DEa1Hvco / https://www.w3schools.com/howto/howto_js_scroll_to_top.asp 

const scrollBtn = document.querySelector("#scroll-btn");

window.onscroll = function () {
    scrollFunction();
};

// function for hiding/showing scroll to top button 

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// function for when scroll to top button is clicked

scrollBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth"
    });
});