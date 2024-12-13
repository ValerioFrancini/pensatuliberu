document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.getElementById('password-form');
    const errorMessage = document.getElementById('error-message');

    passwordForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const enteredPassword = document.getElementById('password').value;
        const correctPassword = 'tvb';

        if (enteredPassword === correctPassword) {
            window.location.href = 'app.html'; 
        } else {
            errorMessage.textContent = 'Scemottu!';
        }
    });
});
