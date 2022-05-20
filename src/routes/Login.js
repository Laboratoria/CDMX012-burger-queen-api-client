import { useNavigate, Link } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../lib/firebase-config";
import { Fragment, useEffect, useState } from "react";
import "../components/Login.css";
// import logo from "../assets/burger4.png";

export default function Login() {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginWithEmail = (e) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPassword("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/menu");
      })
      .catch((error) => {
        // const errorMessage = error.message;
        console.log(error.message);
        if (error.code === "auth/invalid-email") {
          console.log(error.code);
          setErrorEmail("Invalid email");
        } else if (error.code === "auth/wrong-password") {
          console.log(error.code);
          setErrorPassword("Invalid password");
        } else if (error.code === "auth/internal-error") {
          console.log(error.code);
          setErrorPassword("Enter a password");
        } else if (error.code === "auth/user-not-found") {
          console.log(error.code);
          setErrorEmail("User not found");
        }
      });
  };

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
    <Fragment>
      <img
        className="logoBurger"
        src={require("../assets/burger4.png")}
        alt="logoBurger"
      />
      <form className="box">
        <label id="login"> Log in </label>
        <input
          type="email"
          className="input"
          placeholder="Email:"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
        <section className="title-error">
          {errorEmail && <p>{errorEmail}</p>}
        </section>
        <input
          type="password"
          className="input"
          placeholder="Password:"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        <section className="title-error">
          {errorPassword && <p>{errorPassword}</p>}
        </section>

        <button className="buttonLogin" onClick={LoginWithEmail}>
          Login
        </button>

        <p className="SignUp">You don’t have an account?</p>
        <p className="SignUp">
          <Link to={"/signUp"}>Register </Link>
        </p>
        {/* </Fragment> */}
      </form>
    </Fragment>
    // <Fragment>
    //   <img className="logoBurger" src={logo} alt="logoBurger" />
    //   <form className="box">
    //       <label className="login">Login</label>
    //     <div className="field">
    //       <label className="label">Email</label>
    //       <div className="control">
    //         <input
    //           className="input"
    //           type="email"
    //           placeholder="e.g. alex@example.com"
    //           autoComplete="off"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //     </div>

    //     <div className="field">
    //       <label className="label">Password</label>
    //       <div className="control">
    //         <input
    //           className="input"
    //           type="password"
    //           placeholder="****"
    //           autoComplete="off"
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //     </div>

    //     <button className="button is-primary" onClick={LoginWithEmail}>
    //       Login
    //     </button>
    //   </form>
    //   <p className="divSignUp">You don’t have an account?</p>
    //   <p>
    //     <Link to={"/signUp"} className="pSignUp">
    //       Sign up{" "}
    //     </Link>
    //   </p>
    // </Fragment>
  );
}
