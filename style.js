// Gets references to the password input and access button elements
const passwordInput = document.getElementById('password');
const accessButton = document.getElementById('access-button');
const container = document.querySelector('.container'); // Get the container element

// Adds an event listener to the access button
// When the button is clicked, it checks the entered password
// If the password is correct, it displays a success message for 2 seconds
// and then redirects to the main app page
// If the password is incorrect, it displays an error message
accessButton.addEventListener('click', () => {
    const enteredPassword = passwordInput.value;
    const correctPassword = 'odiogliindifferenti'; 

    if (enteredPassword === correctPassword) {
        // Create and display the success message element
        const successMessage = document.createElement('p');
        successMessage.textContent = 'E pure le guardie!';
        successMessage.style.color = 'green'; // Optional styling
        container.appendChild(successMessage);

        // Redirect to main app after 2 seconds
        setTimeout(() => {
            window.location.href = 'main-app.html'; 
        }, 2000); 
    } else {
        // Create and display the error message element
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Indifferente!';
        errorMessage.style.color = 'red'; // Optional styling
        container.appendChild(errorMessage);
    }
});
