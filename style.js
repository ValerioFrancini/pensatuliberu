const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Store user data in localStorage (you might want to use more secure methods in a real app)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect or show a success message
    console.log('User logged in:', username);
    // You can redirect to the main app page here
    // window.location.href = 'main-app.html'; // Example
});
