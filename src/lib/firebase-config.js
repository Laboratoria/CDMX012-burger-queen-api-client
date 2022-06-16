import React from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  query,
  orderBy,
  limit,
  updateDoc,
  doc,
  getDoc,deleteDoc
} from "firebase/firestore";
export { onAuthStateChanged, getAuth } from "@firebase/auth";

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
export const db = getFirestore();

export const LoginWithEmail = (
  setErrorEmail,
  setErrorPassword,
  email,
  password
) => {
  setErrorEmail("");
  setErrorPassword("");
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // navigate("/menu");
    })
    .catch((error) => {
      // const errorMessage = error.message;
      console.log(error.message);
      if (error.code === "auth/invalid-email") {
        console.log(error.code);
        setErrorEmail("Invalid email");
      } else if (error.code === "auth/wrong-password") {
        console.log(error.code);
        setErrorPassword("Invalid password");
      } else if (error.code === "auth/internal-error") {
        console.log(error.code);
        setErrorPassword("Enter a password");
      } else if (error.code === "auth/user-not-found") {
        console.log(error.code);
        setErrorEmail("User not found");
      }
    });
};

export const signUpWithEmail = (
  email,
  password,
  user,
  turn,
  position,
  setErrorEmail,
  setErrorPassword,
  drawerHandler
) => {
  setErrorEmail("");
  setErrorPassword("");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      drawerHandler();
      updateProfile(auth.currentUser, {
        email: email,
        password: password,
        photoURL: "https://random.imagecdn.app/300/300",
        displayName: user,
      });
      saveData(position, user, turn);
     
      drawerHandler();
    })
    .catch((error) => {
      //const errorMessage = error.message;
      if (error.code === "auth/invalid-email") {
        setErrorEmail("Invalid email");
      } else if (error.code === "auth/email-already-in-use") {
        setErrorEmail("Email already in use");
      } else if (error.code === "auth/wrong-password") {
        setErrorPassword("Invalid password");
      } else if (error.code === "auth/weak-password") {
        setErrorPassword(" Password should be at least 6 characters ");
      }
    });
};


let saveData = async (rol, name, turn) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const uid = user.uid;
    const displayName = name;
    const email = user.email;
    const date = new Date();

    return await addDoc(collection(db, "profile"), {
      uid,
      displayName,
      email,
      rol,
      turn,
      date,
    });
  }
};

export const getData = (setEmployee) => {
  const employees = collection(db, "profile");
  const q = query(employees, orderBy("date", "desc"), limit(20));
  onSnapshot(q, (snapshot) => {
    const employeeArray = [];
    snapshot.forEach((doc) => {
      employeeArray.push({ ...doc.data(), id: doc.id });
    });
    setEmployee(employeeArray);
  });
};


export const editUser= async(id, name, rol, turn, drawerHandler)=> {
  const dataRef = doc(db, "profile", id);
  const data = { displayName: name, rol: rol, turn: turn };
  
  await updateDoc(dataRef, data);
  drawerHandler();
  console.log("funciona");
}

export const deleteUsers = (id) => {

    deleteDoc(doc(db, "profile", id));
};

// let deleteUserEmail=()=>{
//   const auth = getAuth();
//   const user = auth.currentUser;
  
//   deleteUser(user).then(() => {
//  console .log("mensaje eliminado")
//   }).catch((error) => {
//     // An error ocurred
//     console .log("mensaje no eliminado")
//   });
//   }

export const logOut = async () => {
  const auth = getAuth();
  await signOut(auth);
};
