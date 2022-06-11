// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABFGQCnjCOrl8lLHRdkvmMp9Q-KI0Y9xo",
  authDomain: "burgerqueen-a42b3.firebaseapp.com",
  databaseURL: "https://burgerqueen-a42b3-default-rtdb.firebaseio.com",
  projectId: "burgerqueen-a42b3",
  storageBucket: "burgerqueen-a42b3.appspot.com",
  messagingSenderId: "371885641090",
  appId: "1:371885641090:web:cb8641d2cc462c53ae139b",
  measurementId: "G-EHVYYEWK7Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);