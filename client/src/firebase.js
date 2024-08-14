// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-18c67.firebaseapp.com",
  projectId: "mern-estate-18c67",
  storageBucket: "mern-estate-18c67.appspot.com",
  messagingSenderId: "926813200397",
  appId: "1:926813200397:web:a25c967d901a9d24403544"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);