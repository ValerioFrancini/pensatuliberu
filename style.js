function checkPassword() {
    const password = document.getElementById('password').value;
    const content = document.getElementById('content');

    if (password === 'tvb') {
        content.style.display = 'block';
    } else {
        alert('scemottu');
    }
}