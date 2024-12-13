// Gets references to the password input and access button elements
const passwordInput = document.getElementById('password');
const accessButton = document.getElementById('access-button');

// Adds an event listener to the access button
// When the button is clicked, it checks the entered password
// If the password is correct, it redirects to the main app page
// If the password is incorrect, it displays an alert message
accessButton.addEventListener('click', () => {
    const enteredPassword = passwordInput.value;
    const correctPassword = 'odiogliindifferenti'; 

    if (enteredPassword === correctPassword) {
        window.location.href = 'main-app.html'; // Redirect to main app
    } else {
        alert('Password errata!');
    }
});
