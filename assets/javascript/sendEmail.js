window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
            emailjs.sendForm('service_4wmr0tj', 'Love Liverpool', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED.', error);
                });
            });
        };
