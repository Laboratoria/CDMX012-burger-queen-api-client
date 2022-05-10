import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { auth } from './firebaseConfig';

export const createAccWithEmail = (email, password) => 
{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

export const logOut = () => 
{
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
}