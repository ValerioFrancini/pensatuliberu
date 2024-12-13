
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const auth = getAuth(app);
