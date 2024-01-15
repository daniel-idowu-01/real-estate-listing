// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "renhomes.firebaseapp.com",
  projectId: "renhomes",
  storageBucket: "renhomes.appspot.com",
  messagingSenderId: "174144380323",
  appId: "1:174144380323:web:0e02b1d720a9d47bc68e16"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);