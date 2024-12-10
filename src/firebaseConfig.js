import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTqlTCA_UFZnPrqCc-mS5q9pJA7EwapLw",
  authDomain: "swiggy101-634f7.firebaseapp.com",
  projectId: "swiggy101-634f7",
  storageBucket: "swiggy101-634f7.firebasestorage.app",
  messagingSenderId: "620495255406",
  appId: "1:620495255406:web:834d0ec87a88690e1bf37f",
  measurementId: "G-SEJB33S7KZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
