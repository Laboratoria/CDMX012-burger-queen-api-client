import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext.js";


export default function Home () {

    const navigate = useNavigate();


    const handleLogOut = async () => {
       await logOut()
       navigate('/login');
    }

    const {user, logOut} = useAuth();
    console.log(user);
    
    if (user === null) {
        return "Loading"
    }
      else {
        return (
            <div>
               <h1>Welcome {user.email}</h1>

               <button onClick={handleLogOut}>
                   Log Out
                </button>
            </div>
        )
      }    
}
