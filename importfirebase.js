// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  // ... your Firebase config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize auth only once, get it from app

// Sign-up function
const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("User signed up:", user);
      // Update UI or redirect
      displayMessage("Sign up successful!", "success"); // Show success message
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-up error:", errorCode, errorMessage);
      // Display specific error messages based on error code
      if (errorCode === 'auth/weak-password') {
        displayMessage("Password should be at least 6 characters", "error");
      } else {
        displayMessage(errorMessage, "error");
      }
    });
};

// Sign-in function
const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed in:", user);
        // Update UI or redirect
        displayMessage("Sign in successful!", "success"); // Show success message
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign-in error:", errorCode, errorMessage);
        // Display specific error messages based on error code
        if (errorCode === 'auth/wrong-password') {
          displayMessage("Incorrect password", "error");
        } else if (errorCode === 'auth/user-not-found') {
          displayMessage("User not found", "error");
        } else {
          displayMessage(errorMessage, "error");
        }
      });
  };

// Sign-out function
const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
        // Update UI to reflect user is logged out
        displayMessage("Sign out successful!", "success"); // Show success message
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
        displayMessage("Sign out failed!", "error"); // Show error message
      });
};

// Authentication state observer
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("User is signed in:", uid);
      // Update UI to show user is logged in
      document.getElementById('welcome').textContent = `Welcome, ${user.email}!`;
      document.getElementById('signUpForm').style.display = 'none';
      document.getElementById('signInForm').style.display = 'none';
    } else {
      // User is signed out
      console.log("User is signed out");
      // Update UI to reflect user is logged out
      document.getElementById('welcome').textContent = '';
      document.getElementById('signUpForm').style.display = 'block';
      document.getElementById('signInForm').style.display = 'block';
    }
});

// Helper function to display messages
const displayMessage = (message, type) => {
  const messageContainer = document.getElementById('messageContainer');
  messageContainer.textContent = message;
  messageContainer.className = type; // Add a CSS class for styling based on message type
  setTimeout(() => {
    messageContainer.textContent = '';
  }, 3000); // Clear the message after 3 seconds
};

// Add event listeners to the forms
document.getElementById('signUpForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;
  signUp(email, password);
});

document.getElementById('signInForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;
  signIn(email, password);
});