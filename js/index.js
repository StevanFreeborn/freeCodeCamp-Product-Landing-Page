window.onload = function() {
    document.getElementById('email').focus();
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('gmail-service', 'better-seating-template', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            }); 
        this.classList.add('hide')
        document.getElementById('submit-message').classList.remove('hide');
    });
}