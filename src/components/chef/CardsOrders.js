import React from "react";
import AsideOrders from "../Waiters/AsideOrders";

const CardsOrders = (props) => {
  const { name, setIsDrawerOpenOrder, doneOrder } = props;

  
  return (
    <section className="boxCardsOrders">
      <img
        className="conteiner-img"
        src={require("../../assets/chef.png")}
        alt="imgFood"
      />
      {!doneOrder && (
        <img
          className="clock-img"
          src={require("../../assets/clock-blue.png")}
          alt="imgFood"
        />
      )}
      {doneOrder && (
        <img
          className="clock-img"
          src={require("../../assets/campana.png")}
          alt="imgFood"
        />
      )}
      <p>Client: {name}</p>
      <button
        onClick={() => {
          setIsDrawerOpenOrder(true);
        }}
      >
        See Order
      </button>
    </section>
  );
};

export default CardsOrders;
