import React from "react";
import { useNavigate } from "react-router-dom";
import './LogIn.css';
import logo from '../../assets/burger queen logo fondo blanco.png';
import leftBurger from '../../assets/side-burger-left.png';
import rightBurger from '../../assets/side-burger-right.png';
import { Footer } from '../staticComponents/footer';
import { LoginError } from "../../utils/errorMessage";


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
        <div className="form-container">
            <img src={rightBurger} alt="right side burger" className="right-burger burger"></img>
            <form onSubmit={handleSubmit} className='acc-form'>
                <img src={logo} alt="burger queen logo" className="bq-logo"></img>
                <h1>Welcome back!</h1>
                <label htmlFor='email' id="emailLabel">E-mail</label><br></br>
                <input 
                    type='text' 
                    id='email' 
                    name='email' 
                    placeholder='myemail@gmail.com' 
                    value={values.email}
                    onChange={handleChange}>
                </input><br></br>
                    
                <label htmlFor='password' id="passLabel">Password</label><br></br>
                <input 
                    type='password' 
                    id='password' 
                    name='password' 
                    placeholder='mypassword123'
                    value={values.password}
                    onChange={handleChange}>
                </input><br></br>

                <span className="forgot-pass">Forgot your password?</span><br></br>
                <LoginError signInWithEmail={signInWithEmail}/>
                <button type='submit'>Sign In</button>
            </form>
            <img src={leftBurger} alt="left side burger" className="left-burger burger"></img>
            <Footer/>

        </div>
    );
}