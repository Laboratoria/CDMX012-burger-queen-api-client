import "../css/Menu.css";
import { useNavigate } from "react-router-dom";
import { logOut } from "../lib/firebase-config";
import { DateOrder } from "./Waiters/DateOrder";
export default function Header() {
  const navigate = useNavigate();
  const returnLogin = () => {
    logOut();
    navigate("/");
    
  };
  return (
    <header className="header-container">
      <img
        className="logo"
        alt="logoBQ"
        src={require("../assets/burger4.png")}
      />
      <p className="menu">MENU</p>
      <button id="btnMenu">Menu</button>
      <button id="btnOrder" onClick={DateOrder}>Order</button>
      <button className="btnOut" onClick={returnLogin} />
    </header>
  );
}
