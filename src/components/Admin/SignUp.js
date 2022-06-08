import { createUserWithEmailAndPassword, auth } from "../../lib/firebase-config";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import "../css/Login.css";

import logo from "../assets/burger4.png";
import Header from "../Header";
import "../css/SignUp.css";

const SignUp = () => {
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [user, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUpWithEmail = (e) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPassword("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/menu");
      })
      .catch((error) => {
        console.log(error.message);
        //const errorMessage = error.message;
        if (error.code === "auth/invalid-email") {
          console.log(error.code);
          setErrorEmail("Invalid email");
        } else if (error.code === "auth/email-already-in-use") {
          console.log(error.code);
          setErrorEmail("Email already in use");
        } else if (error.code === "auth/wrong-password") {
          console.log(error.code);
          setErrorPassword("Invalid password");
        } else if (error.code === "auth/weak-password") {
          console.log(error.code);
          setErrorPassword(" Password should be at least 6 characters ");
        }
      });
  };
  
  return (
    <section className="login-container">
      <Header />
      <img className="logoBurger" src={logo} alt="logoBurger" />

      <section className="form-container">
        <form className="box">
          <label id="login"> Register </label>
          <input
            type="text"
            className="input"
            placeholder="User:"
            autoComplete="off"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            className="input"
            placeholder="Position:"
            autoComplete="off"
            onChange={(e) => setPosition(e.target.value)}
          />
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
            {errorPassword && <p className="title-error blink">{errorPassword}</p>}
          </section>

          <button className="buttonLogin" onClick={signUpWithEmail}>
            Continue
          </button>
        </form>
      </section>
    </section>
  );
};

export default SignUp;
