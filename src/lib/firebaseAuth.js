import {
    createUserWithEmailAndPassword,
    getAuth,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from './firebaseConfig';

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

export const signInWithEmail = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
}

export const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

export const currentUser = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        return user;
    }
}
