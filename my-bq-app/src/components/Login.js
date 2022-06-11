import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext.js";
import { useNavigate } from "react-router-dom"; 
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

export default function Login () {

    const [user, setUser] = useState({
        email:'',
        password:'',
    })

    const {logIn, register} = useAuth();

    const navigate = useNavigate();  

    const [error, setError] = useState();

    const handleChange = ({target: {name, value}}) => 
        setUser({...user, [name]: value})

        {/* to submit the login form with error messages*/}
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('');
        try {
           await logIn(user.email, user.password);
            navigate("/");
        }
        catch (error) {
            console.log(error.code);
            if (error.code === 'auth/user-not-found') {
                setError("Error: User not found.")
            }
            else if (error.code === 'auth/invalid-email') {
                setError("Error: Invalid email.")
            }
            else if (error.code === 'auth/wrong-password') {
                setError("Error: Wrong password.")
            }
        }
    }

    {/* to access to sign up page */}
    const handleSignUp = async () => {
        await register();
        navigate('/');
     }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type='email' name="email" id="email" placeholder="hello@example.com" 
                onChange={handleChange}
                />

                <label htmlFor="password">Password</label>
                <input type='password' name="password" id="password" placeholder="******" 
                 onChange={handleChange}
                />
                {error && <p>{error}</p>}

                <Button  variant="contained" onClick={handleSubmit} >Login</Button>
            </form> 
            <section htmlFor="sign Up">or Sign Up
                <button onClick={handleSignUp}>here</button>
            </section>  
        </div>
    )
}
