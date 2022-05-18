import { useNavigate, Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword, onAuthStateChanged} from "../lib/firebase-config";
import { useEffect, useState } from "react";



export default function Login() {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const LoginWithEmail = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
            navigate('/menu')
            })
            .catch((error) => {
                setError(false)
                const errorMessage = error.message;
                // ..
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, handleUserStateChanged);
    }, []);
    
    function handleUserStateChanged(user) {
        if (user) {
            // console.log(user.displayName);
        } else {
            // console.log("no hay nadie autenticado");
        }
    }
    return (
        <section className="container">
                <label id="logIn">  Log in </label>
                <input
                    type="email"
                    className="inputEmail"
                    placeholder="Email:"
                    autoComplete="off" onChange={e => setEmail(e.target.value)}

                />
                <input
                    type="password"
                    className="inputPassword"
                    placeholder="Password:"
                    autoComplete="off" onChange={e => setPassword(e.target.value)}

                />
                <button className="buttonLogin" onClick={LoginWithEmail} >Login</button>
                {error && <span>Error email or password</span>}
                <p
                    className="divSignUp">You don’t have an account?</p>
                <p><Link to={"/signUp"}
                    className="pSignUp">
                    Sign up </Link></p>

            </section>
  );
}
            
