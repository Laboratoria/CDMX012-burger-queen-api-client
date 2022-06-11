import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom"; 
import Button from '@mui/material/Button';

export default function Register () {

    const [user, setUser] = useState({
        email:'',
        password:'',
    })

    const {signUp} = useAuth();

    const navigate = useNavigate();  

    const [error, setError] = useState();

    const handleChange = ({target: {name, value}}) => 
        setUser({...user, [name]: value})

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('');
        try {
           await signUp(user.email, user.password);
            navigate("/");
        }
        catch (error) {
            console.log(error.code);
            if (error.code === 'auth/internal-error') {
                setError("Error: Invalid email and/or password.")
            }
            else if (error.code === 'auth/weak-password') {
                setError("Error: Invalid password. At least type down 6 characters")
            }
            else if (error.code === 'auth/missing-email') {
                setError("Error: Missing email")
            }
            else if (error.code === 'auth/email-already-in-use') {
                setError("Error: Email already in use")
            }
        }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type='email' name="email" id="email" placeholder="hello@example.com" 
                onChange={handleChange}
                />

                <label htmlFor="password">Password</label>
                <input type='password' name="password" id="password" placeholder="******" 
                 onChange={handleChange}
                />

                <button>Register</button>
            </form> 
        </div>
    )
}