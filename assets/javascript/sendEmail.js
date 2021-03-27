
// walkthrough from CI, EmailJS and stack overflow used to help code this section - https://stackoverflow.com/questions/7288669/jquery-div-show-delay5000-hide-doesnt-work/7288701

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
            emailjs.sendForm('service_4wmr0tj', 'Love Liverpool', this)
                .then(function() {
                    document.getElementById("contact-form").reset();
                    $("#success").show(0).delay(10000).queue( function(next) {
                        $(this).hide();
                        next();
                    });
                }, function(error) {
                    $("#fail").show(0).delay(10000).queue( function(next) {
                        $(this).hide();
                        next();
                    });
                });
    });
};
