import { useNavigate } from 'react-router-dom';
import LogoImage from '../../img/Logo_Image.gif';
import emailIcon from '../../img/emailIcon.svg';
import passwordIcon from '../../img/passwordIcon.svg';
import { useState } from 'react';
import { useAuth } from '../../context/AutProvider';

export default function LoginPage() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState();

    const { login } = useAuth();

    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password);
            let currentmail = user.email;
            if(currentmail.includes('wait')){
                navigate('/Waiter');
            }else if (currentmail.includes('admin')){
                navigate('/Admin');
            }else if(currentmail.includes('cook')){
                navigate('/Kitchen');
            }else if(currentmail[0] !== "w" || "a" || "c"){
		        setError("Error Occured, Please contact system administrator")
	        }
        } catch (error) {
            if (error.code === 'auth/invalid-email') {
                console.log(error.code);
                setError('Invalid email');
            } else if (error.code === 'auth/wrong-password') {
                console.log(error.code);
                setError('Invalid password');
            } else if (error.code === 'auth/internal-error') {
                console.log(error.code);
                setError('Enter a password');
            } else if (error.code === 'auth/user-not-found') {
                console.log(error.code);
                setError('User not found');
            }
        }
    };

    return (
        <div className="container-login">
            <form className="register-container" onSubmit={handleSubmit} >
                <img className='logo-icon' src={LogoImage} alt='logo-icon' />
                <h1 className='title-h1'> Welcome!</h1>
                <h3 className='title-h3'>Login to your account</h3>
                <div className="box-form">
                    <img className="icon" src={emailIcon} alt="email-icon" />
                    <input
                        className="input-form"
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        onChange={handleChange}
                    />
                </div>
                <div className="box-form">
                    <img className="icon" src={passwordIcon} alt="password-icon" />
                    <input
                        className="input-form"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password..."
                        onChange={handleChange}
                    />
                </div>
                <button type="button" className="btn-form" onClick={handleSubmit}> Login</button>
                <div className='title-h1'>{error && <p>{error}</p>}</div>
            </form>

        </div>
    )
}