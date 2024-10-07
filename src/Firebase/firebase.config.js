// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgES_rIsDXNGfLO0701BH8M_Wv8mM3pcg",
  authDomain: "cars-doctor-a9e7a.firebaseapp.com",
  projectId: "cars-doctor-a9e7a",
  storageBucket: "cars-doctor-a9e7a.appspot.com",
  messagingSenderId: "183341340269",
  appId: "1:183341340269:web:a59fc82cd0e57285111164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;