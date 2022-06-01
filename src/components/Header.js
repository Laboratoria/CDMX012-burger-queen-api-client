import "../css/Menu.css";

import { logOut } from "../lib/firebase-config";

export default function Header() {

  const returnLogin = () => {
    logOut();
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
      <button id="btnOrder">Order</button>
      <button className="btnOut" onClick={returnLogin} />
    </header>
  );
}
