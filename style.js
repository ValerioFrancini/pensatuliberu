function checkPassword() {
    const password = document.getElementById('password').value;
    const content = document.getElementById('content');
    const errorMessage = document.getElementById('error-message'); // Nuovo elemento per il messaggio di errore

    if (password === 'tvb') {
        content.style.display = 'block';
        errorMessage.style.display = 'none'; // Nascondi il messaggio di errore
    } else {
        content.style.display = 'none';
        errorMessage.style.display = 'block'; // Mostra il messaggio di errore
    }
}