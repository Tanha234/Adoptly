// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ✅ Add this

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkRNf52CBMeKS6Nz0NmyXyrYJUTGLw4rQ",
  authDomain: "adoptly-33c63.firebaseapp.com",
  projectId: "adoptly-33c63",
  storageBucket: "adoptly-33c63.firebasestorage.app",
  messagingSenderId: "1065724146766",
  appId: "1:1065724146766:web:66596ca1369fb993fcff1f",
  measurementId: "G-3V8V1N6K0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // ✅ No error now
export const googleProvider = new GoogleAuthProvider(); // ✅ No error now
