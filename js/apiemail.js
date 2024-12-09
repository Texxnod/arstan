const btn = document.getElementById('emailjs_btn');

document.getElementById('contact-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_1dqmx4m';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('SUCCESS!');
            }, (err) => {
                btn.value = 'Send Email';
                alert('FAILED...', JSON.stringify(err));
            });
    });