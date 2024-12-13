document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.getElementById('password-form');

    passwordForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const enteredPassword = document.getElementById('password').value;
        const correctPassword = 'odiogliindifferenti';

        if (enteredPassword === correctPassword) {
            // Display success message (optional)
            // ... (you can add your success message logic here) ...

            // Redirect to main app after a short delay (optional)
            setTimeout(() => {
                window.location.href = 'main-app.html';
            }, 2000); // 2 seconds delay 
        } else {
            // Display error message
            alert('Indifferente!'); // Or you can use a more visually appealing error message
        }
    });
});
