const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    // Servicio y template para el correo a ti (administrador)
    const serviceID = 'default_service';
    const templateIDAdmin = 'template_k54n6hl';  // Este es el que te enviará a ti.
    // Servicio y template para la respuesta automática al usuario
    const templateIDUser = 'template_w8oaoos';  // Este es el que se enviará al usuario.

    // Primero, enviamos el correo a ti (como administrador)
    emailjs.sendForm(serviceID, templateIDAdmin, this)
        .then(() => {
            // Luego de que se envía el correo a ti, enviamos la respuesta al usuario
            emailjs.sendForm(serviceID, templateIDUser, this)
                .then(() => {
                    btn.value = 'Send Email';
                    alert('Message sent and automatic response sent to the user!');
                    
                    // Limpiar el formulario
                    document.getElementById('form').reset();
                }, (err) => {
                    btn.value = 'Send Email';
                    alert('Error sending response to user: ' + JSON.stringify(err));
                });
        }, (err) => {
            btn.value = 'Send Email';
            alert('Error sending message to admin: ' + JSON.stringify(err));
        });
});
