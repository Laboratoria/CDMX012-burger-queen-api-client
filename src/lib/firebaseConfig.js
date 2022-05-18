// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD56c-LzX-RS3SSjI2TQ0lSxE0xUxtRyWg",
  authDomain: "burger-queen-3693d.firebaseapp.com",
  projectId: "burger-queen-3693d",
  storageBucket: "burger-queen-3693d.appspot.com",
  messagingSenderId: "92182657388",
  appId: "1:92182657388:web:b685d2c74e9cb93fcd5b49"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
