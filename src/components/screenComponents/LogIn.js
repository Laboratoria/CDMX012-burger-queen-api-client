import React from "react";
import { useNavigate } from "react-router-dom";

export const LogIn = ({signInWithEmail}) => {
    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        email: '',
        password: ''
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        signInWithEmail(values.email, values.password);
        navigate("/");
    }

    const handleChange = (evt) => {
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
            ...values,
            [name]: value,
        };

        setValues(newValues);
    }

    return (
        <>
            <h1>Welcome back!</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>E-mail</label>
                <input 
                    type='text' 
                    id='email' 
                    name='email' 
                    placeholder='myemail@gmail.com' 
                    value={values.email}
                    onChange={handleChange}>
                </input>
                    
                <label htmlFor='password'>Password</label>
                <input 
                    type='text' 
                    id='password' 
                    name='password' 
                    placeholder='mypassword123'
                    value={values.password}
                    onChange={handleChange}>
                </input>

                <p>Forgot your password?</p>

                <button type='submit'>Sign in</button>

            </form>

            <footer>
                <p>Copyright © 2022 . Burger Queen. All rights reserved.</p>
            </footer>
        </>
    );
}