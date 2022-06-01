import { Link } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../lib/firebase-config";
import { Fragment, useEffect, useState } from "react";
import "../css/Login.css";
// import logo from "../assets/burger4.png";

export default function Login() {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const LoginWithEmail = (e) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPassword("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
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
    <section className="login-container">
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
        <section className="title-error-sec">
          {errorEmail && <p className="title-error blink">{errorEmail}</p>}
        </section>
        <input
          type="password"
          className="input"
          placeholder="Password:"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        <section className="title-error-sec">
          {errorPassword && (
            <p className="title-error blink">{errorPassword}</p>
          )}
        </section>

        <button className="buttonLogin" onClick={LoginWithEmail}>
          Login
        </button>
      </form>
    </section>
  );
}
