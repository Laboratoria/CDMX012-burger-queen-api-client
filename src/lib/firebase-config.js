import React from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,

} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore"
export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,updateProfile
} from "@firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore()

export let saveData = async (rol, name, turn) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const uid = user.uid;
    const displayName = name;
    const email = user.email;

    return  await addDoc(collection(db, "profile"), {
      uid,
      displayName,
      email,
      rol,
      turn
    });
  }
};


// export const signUpWithEmail = (e, setErrorEmail, setErrorPassword, email, password) => {
//   e.preventDefault();
//   setErrorEmail("");
//   setErrorPassword("");
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log(user);
//     })
//     .catch((error) => {
//       console.log(error.message);
//       //const errorMessage = error.message;
//       if (error.code === "auth/invalid-email") {
//         console.log(error.code);
//         setErrorEmail("Invalid email");
//       } else if (error.code === "auth/email-already-in-use") {
//         console.log(error.code);
//         setErrorEmail("Email already in use");
//       } else if (error.code === "auth/wrong-password") {
//         console.log(error.code);
//         setErrorPassword("Invalid password");
//       } else if (error.code === "auth/weak-password") {
//         console.log(error.code);
//         setErrorPassword(" Password should be at least 6 characters ");
//       }
//     });
// };

export const logOut = async () => {
  const auth = getAuth();
  await signOut(auth);
};
