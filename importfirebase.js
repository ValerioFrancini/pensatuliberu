import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}