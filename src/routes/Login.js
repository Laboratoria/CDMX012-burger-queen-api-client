import { useNavigate, Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword, onAuthStateChanged } from "../lib/firebase-config";
import { Fragment, useEffect, useState } from "react";



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
        // <section className="box">
        //         <label id="logIn">  Log in </label>
        //         <input
        //             type="email"
        //             className="inputEmail"
        //             placeholder="Email:"
        //             autoComplete="off" onChange={e => setEmail(e.target.value)}

        //         />
        //         <input
        //             type="password"
        //             className="inputPassword"
        //             placeholder="Password:"
        //             autoComplete="off" onChange={e => setPassword(e.target.value)}

        //         />
        //         <button className="buttonLogin" onClick={LoginWithEmail} >Login</button>
        //         {error && <span>Error email or password</span>}


        // </section>
        <Fragment>
            <form className="box">
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. alex@example.com"
                            autoComplete="off" onChange={e => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="****"
                            autoComplete="off" onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>

                <button className="button is-primary" onClick={LoginWithEmail} >Login</button>
            </form>
            <p
                className="divSignUp">You don’t have an account?</p>
            <p><Link to={"/signUp"}
                className="pSignUp">
                Sign up </Link></p>
        </Fragment>
    );
}

