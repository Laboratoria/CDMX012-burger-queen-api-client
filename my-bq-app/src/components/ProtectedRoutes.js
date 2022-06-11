import React from "react";
import { useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Routes, Route } from "react-router-dom";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export const ProtectedRoutes = () => {

    const [role, setRole] = useState();

    const user = currentUser(); 

    const getUser = () => {
        const docuRef = doc(firestore, `Profile/${uid}`);
        const docuSnap = getDoc(docuRef);
        return docuSnap; 
    }

    getUser().then((result) => {
        if (result.exists()) {
            setRole(result.data().roles)
        }
    }).catch((error) => {
        console.log(error)
    })

    if(role === "waiter") {
        return (
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
            </Routes>
        )
    }

    if (role === 'admin') {
        return (
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
            </Routes>
        )
    }
    
    if (role === 'kitchen') {
        return (
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
            </Routes>
        )
    }
}