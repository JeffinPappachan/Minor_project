// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaAZ6KZ0DPDlJ2kNBS3ip8e63ZmKF2ye4",
  authDomain: "miniproject-fed06.firebaseapp.com",
  projectId: "miniproject-fed06",
  storageBucket: "miniproject-fed06.appspot.com",
  messagingSenderId: "593780216612",
  appId: "1:593780216612:web:b2e6fe1ba0a72d3aa6d9b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
