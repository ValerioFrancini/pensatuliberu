// Suggested code may be subject to a license. Learn more: ~LicenseLog:391619498.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:640613752.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3052444937.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:43056930.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:298110285.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:869544001.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2421725028.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1073653048.

const loginForm = document.getElementById('login-
form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const registrationForm = document.getElementById('registration-form'); 

if (registrationForm) { // Check if registration form exists on the current page
    registrationForm.addEventListener('submit',
 (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Basic validation (add more as needed)
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Store registration data (use more secure methods in a real app)
        localStorage.setItem('username', username
);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password); 

        console.log('User registered:', username);   
        // Redirect to main app page after login
        window.location.href = 'index.html';
    });
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Retrieve stored credentials (use more secure methods in a real app)
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Basic authentication (add more robust checks in a real app)
    if (username === storedUsername && password === storedPassword) {
        console.log('User logged in:', username);
        // Redirect to the main app page after login
        window.location.href = 'main-app.html'; // Replace 'main-app.html' with your app's page
    } else {
        alert('Invalid username or password!');
    }
});
