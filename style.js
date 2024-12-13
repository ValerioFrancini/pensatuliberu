function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password === 'tvb') {
        // Reindirizza alla pagina app.html
        window.location.href = 'app.html';
    } else {
        errorMessage.textContent = 'Password errata';
    }
}