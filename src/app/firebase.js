// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4j90eSB3Rm7WA1-jNcLvZNQz_lZ2fxHE",
  authDomain: "fir-app-tuto-8b66a.firebaseapp.com",
  projectId: "fir-app-tuto-8b66a",
  storageBucket: "fir-app-tuto-8b66a.appspot.com",
  messagingSenderId: "888204704038",
  appId: "1:888204704038:web:a16ddd732b94325df929e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);