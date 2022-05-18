import { createUserWithEmailAndPassword, auth } from "../lib/firebase-config";
import { useNavigate } from "react-router";
import { useState, Fragment } from "react";
import "../components/Login.css";
import logo from "../assets/burger4.png";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [user, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUpWithEmail = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/menu");
      })
      .catch((error) => {
        setError(false);
        const errorMessage = error.message;
        // ..
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

        <input
          type="password"
          className="input"
          placeholder="Password:"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="buttonLogin" onClick={signUpWithEmail}>
          Continue
        </button>
      </form>
    </Fragment>
  );
};

export default SignUp;
