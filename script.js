(function() {
    'use strict';

    window.addEventListener('load', function() {
        var forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms).forEach((form) => {
            form.addEventListener('submit', (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })

})();

function checkEmailPasswords() {
    let passwords = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let msg = document.getElementById("messg");

    if (passwords != confirmPassword) {
        msg.textContent = "Passwords do not match";
    } else {
        msg.textContent = "Passwords match";
    }
}