import { createUserWithEmailAndPassword, auth } from "../lib/firebase-config";
import { useNavigate } from "react-router";
import { useState, Fragment } from "react";
import "../components/Login.css";
import logo from "../assets/burger4.png";

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
        } else if (error.code === "auth/internal-error") {
          console.log(error.code);
          setErrorPassword("Enter a password");
        } else if (error.code === "auth/weak-password") {
          console.log(error.code);
          setErrorPassword(" Password should be at least 6 characters ");
        }
      });
  };
  return (
    <Fragment>
      <img className="logoBurger" src={logo} alt="logoBurger" />
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

        <button className="buttonLogin" onClick={signUpWithEmail}>
          Continue
        </button>
      </form>
    </Fragment>
  );
};

export default SignUp;
