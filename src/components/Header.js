import "../css/Menu.css";
import { useNavigate } from "react-router-dom";
import { logOut } from "../lib/firebase-config";
<<<<<<< HEAD
import React from 'react';
=======
import React from "react";

>>>>>>> 6ae6fefd02b8773f6b83b70b1de82258d19729fa


export default function Header(props) {
  const navigate = useNavigate();
  const {updateComandaOrders} =props
  

  
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
      <button id="btnOrder" onClick={updateComandaOrders}>Order</button>
      <button className="btnOut" onClick={returnLogin} />
    </header>
  );
}
