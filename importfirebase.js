// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv0J1YBf54mLZW_Q9kVwBMRRzBLPqjesI",
  authDomain: "pensatuliberu.firebaseapp.com",
  projectId: "pensatuliberu",
  storageBucket: "pensatuliberu.firebasestorage.app",
  messagingSenderId: "400150403662",
  appId: "1:400150403662:web:2ee3e68af31daa120a811f",
  measurementId: "G-VPQWGBTJBG"
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
      displayMessage(errorMessage, "error"); // Show error message
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
        displayMessage(errorMessage, "error"); // Show error message
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
    } else {
      // User is signed out
      console.log("User is signed out");
      // Update UI to reflect user is logged out
    }
});

// Helper function to display messages
const displayMessage = (message, type) => {
  // Implement your logic to display messages on the UI here.
  // Consider using an element with an ID to display the message dynamically.
  // Example using an element with ID 'messageContainer':
  const messageContainer = document.getElementById('messageContainer'); // Make sure this ID exists in your HTML
  if (messageContainer) {
    messageContainer.textContent = message;
    messageContainer.className = type; // Add a CSS class for styling based on message type
  }
};
