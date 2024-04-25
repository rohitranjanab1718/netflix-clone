// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkzzO-Rl6FvwHH9biKZ8ULYmT8gU7RUr0",
  authDomain: "netflix-gpt-69622.firebaseapp.com",
  projectId: "netflix-gpt-69622",
  storageBucket: "netflix-gpt-69622.appspot.com",
  messagingSenderId: "800536776083",
  appId: "1:800536776083:web:4dfd4ba2f34dfc613eec66",
  measurementId: "G-0J271X99WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();