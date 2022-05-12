import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig';
//import { LoginError } from "../utils/errorMessage";


export const createAccWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        console.log(error)
    });
}

export const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => { 
        return error.code
        // LoginError({error})
    });
}

export const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
}