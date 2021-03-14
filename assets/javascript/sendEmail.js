window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
            emailjs.sendForm('service_4wmr0tj', 'Love Liverpool', this)
                .then(function() {
                    console.log('SUCCESS!');
                    document.getElementById("contact-form").reset();
                    alert("Form submitted, a member of our team will get back to you shortly!");
                }, function(error) {
                    console.log('FAILED.', error);
                    alert("Form failed to submit, please try again.")
                });
            });
        };