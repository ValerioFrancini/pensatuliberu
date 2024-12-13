const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const registrationForm = document.getElementById('registration-form');

if (registrationForm) {
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value; 
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        console.log('User registered:', username);
        window.location.href = 'index.html'; // Redirect to login after registration
    });
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        console.log('User logged in:', username);
        window.location.href = 'main-app.html'; // Redirect to main-app.html after login
    } else {
        alert('Invalid username or password!');
    }
});

// Add this code to display the welcome message on main-app.html
if (window.location.pathname.endsWith('main-app.html')) { 
    const username = localStorage.getItem('username');
    const welcomeMessageElement = document.getElementById('welcome-message');
    if (username) {
        welcomeMessageElement.textContent = `Benvenuto ${username}!`;
    } else {
        welcomeMessageElement.textContent = 'Benvenuto!'; 
    }
}
