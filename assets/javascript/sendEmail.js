window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
            emailjs.sendForm('service_4wmr0tj', 'Love Liverpool', this)
                .then(function() {
                    console.log('SUCCESS!');
                    document.getElementById("contact-form").reset();
                }, function(error) {
                    console.log('FAILED.', error);
                });
            });
        };