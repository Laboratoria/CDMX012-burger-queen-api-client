import * as React from 'react';
import { createContext, useContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config.js';

export const authContext = createContext();

{/*uso de hook para poder llamar los valores sin usar context y createContext desde este mismo hook*/}
export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export default function AuthProvider ({children}) {

    const [user, setUser] = useState(null);

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logOut = () => signOut(auth);

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
    }, [])
    
    return (
        <authContext.Provider value={{signUp, logIn, user, logOut}}>
            {children}
        </authContext.Provider>
    )
}




