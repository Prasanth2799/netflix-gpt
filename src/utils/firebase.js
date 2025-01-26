// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVM4mxN1f_yadu58yPz-reGmJnUP-cav8",
  authDomain: "netflix-gpt-c0365.firebaseapp.com",
  projectId: "netflix-gpt-c0365",
  storageBucket: "netflix-gpt-c0365.firebasestorage.app",
  messagingSenderId: "290483333427",
  appId: "1:290483333427:web:2aa287f9d725eabb4d3646",
  measurementId: "G-37HFBTRFY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()