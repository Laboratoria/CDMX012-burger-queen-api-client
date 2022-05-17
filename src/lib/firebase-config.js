import { initializeApp} from "firebase/app"
import {getAuth,} from "firebase/auth"
export {signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged } from "@firebase/auth"




export const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId:process.env.REACT_APP_PROJECTID, 
  storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_MESAGINGSENDERID, 
  appId: process.env.REACT_APP_APPID,
  measurementId:  process.env.REACT_APP_MESAUREMENTID, 
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  
   
   
   
    //  createUserWithEmailAndPassword(auth)
    //  .then((userCredential) => {
    //    // Signed in
    //    const user = userCredential.user;
    //    // ...
    //  })
    //  .catch((error) => {
    //    const errorCode = error.code;
    //    const errorMessage = error.message;
    //    // ..
    //  });
   