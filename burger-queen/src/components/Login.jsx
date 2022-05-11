import { Navigate, useNavigate } from 'react-router-dom';
import LogoImage from '../img/Logo_Image.gif';
// import BurgerImage from '../img/Burger_Image.svg';
import emailIcon from '../img/emailIcon.svg';
import passwordIcon from '../img/passwordIcon.svg';


export default  function LoginPage () {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/menu')
    }


    return(
        <div className="container-login">
            <form className="register-container" >
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
                    />
                </div>
                <p className="option-password">
                    <input className="input-checkbox" type="checkbox" id="rememberMe" name="rememberMe" value="Remember me" />
                    <label className="label-checkbox" htmlFor="rememberMe">Remember me</label>
                    <a className="link-ref" href="#/">Forgot Password?</a>
                </p>
                <button type="button" className="btn-form"> Login</button>
                <div className="link-login">
                    <p className="paragraph"> Dont have an account?</p>
                    <a className="link-ref" href="/signup">Sign up</a>
                </div>
            </form>

        </div>
    )
}