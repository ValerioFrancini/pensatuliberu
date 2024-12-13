import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Configurazione Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDv0J1YBf54mLZW_Q9kVwBMRRzBLPqjesI",
    authDomain: "pensatuliberu.firebaseapp.com",
    projectId: "pensatuliberu",
    storageBucket: "pensatuliberu.firebasestorage.app",
    messagingSenderId: "400150403662",
    appId: "1:400150403662:web:2ee3e68af31daa120a811f",
    measurementId: "G-VPQWGBTJBG"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Gestione Sign Up
const signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    const errorContainer = document.getElementById("signUpError");

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        errorContainer.textContent = "Account creato con successo!";
    } catch (error) {
        errorContainer.textContent = error.message;
    }
});

// Gestione Sign In
const signInForm = document.getElementById("signInForm");
signInForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;
    const errorContainer = document.getElementById("signInError");

    try {
        await signInWithEmailAndPassword(auth, email, password);
        errorContainer.textContent = "Accesso effettuato con successo!";
    } catch (error) {
        errorContainer.textContent = error.message;
    }
});

// Stato utente
onAuthStateChanged(auth, (user) => {
    const welcomeMessage = document.getElementById("welcome");
    if (user) {
        welcomeMessa
