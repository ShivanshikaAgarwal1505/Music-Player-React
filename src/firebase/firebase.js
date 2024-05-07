// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArpatUNmp8gY9cw2O7ro5xNj5_qCG28Vs",
  authDomain: "chat-a3b00.firebaseapp.com",
  projectId: "chat-a3b00",
  storageBucket: "chat-a3b00.appspot.com",
  messagingSenderId: "519052306297",
  appId: "1:519052306297:web:b87951e7b9a25571eff1a8",
  measurementId: "G-BC0PZE720J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);