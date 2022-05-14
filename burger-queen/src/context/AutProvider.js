import { createContext, useContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

const authContext = createContext();

export const useAuth =() => {
    const context = useContext(authContext);
    if(!context)
        throw new Error('There is not authProvider');
        return context;
};

export function AuthProvider({children}){

    const [user, setUser] = useState(null);

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout = () =>{
        signOut(auth)
    }
    useEffect(()=>{
        const unSuscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return()=> unSuscribe();
    },[]);

    return (
        <authContext.Provider value={{
            login,
            user,
            logout,
        }} >
            {children}
            </authContext.Provider>
    );

}