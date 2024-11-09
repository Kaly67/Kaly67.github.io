/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.getElementById('contactForm').addEventListener('input', function() {
    const form = this;
    const isValid = form.checkValidity();  // Vérifie la validité de tous les champs
    const submitButton = document.getElementById('submitButton');
    if (isValid) {
        submitButton.classList.remove('disabled');
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.classList.add('disabled');
        submitButton.setAttribute('disabled', 'true');
    }
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire

    const form = this;
    const isValid = form.checkValidity();

    if (isValid) {
        // Simulation de succès de la soumission
        document.getElementById('submitSuccessMessage').classList.remove('d-none');
        document.getElementById('submitErrorMessage').classList.add('d-none');
    } else {
        // Simulation d'échec de la soumission
        document.getElementById('submitErrorMessage').classList.remove('d-none');
        document.getElementById('submitSuccessMessage').classList.add('d-none');
    }
});
