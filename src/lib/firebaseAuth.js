import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig';
<<<<<<< HEAD
//import { LoginError } from "../utils/errorMessage";

=======
>>>>>>> 53e66d319401650d6e8903efca8e88fea6be84ca

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

<<<<<<< HEAD
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
=======
export const signInWithEmail = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
>>>>>>> 53e66d319401650d6e8903efca8e88fea6be84ca
}

export const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
}