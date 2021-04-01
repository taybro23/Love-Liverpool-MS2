
// navbar scroll fade, walkthrough from youtube video - https://www.youtube.com/watch?v=xYA2bcEHKg8&t=570s

$(document).ready(function() {
    $(window).scroll(function() {
        $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
    });
});