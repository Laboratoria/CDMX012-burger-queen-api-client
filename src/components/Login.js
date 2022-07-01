import { useNavigate, Link } from "react-router-dom";
import {
  auth,
  onAuthStateChanged,
  LoginWithEmail,
} from "../lib/firebase-config";
import React, { useEffect, useState } from "react";
import "../css/Login.css";

export default function Login() {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const login = (e) => {
    e.preventDefault();
    LoginWithEmail(setErrorEmail, setErrorPassword, email, password);
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

        <button className="buttonLogin" onClick={login}>
          Login
        </button>
      </form>
    </section>
  );
}
