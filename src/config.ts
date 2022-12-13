// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD86EOtv07dpYIhKehqc6Y5zyC1TCPlOFM",
  authDomain: "baffle-games-1216e.firebaseapp.com",
  projectId: "baffle-games-1216e",
  storageBucket: "baffle-games-1216e.appspot.com",
  messagingSenderId: "4263139851",
  appId: "1:4263139851:web:bcbfc24cf7d7bc991c050e",
  measurementId: "G-V4NYPSS0K1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);