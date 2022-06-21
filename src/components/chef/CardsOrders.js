import React from "react";

const CardsOrders = (props) => {
  const { name } = props;
  return (
    <section className="boxCardsOrders">
      <img
        className="conteiner-img"
        src={require("../../assets/chef.png")}
        alt="imgFood"
      />
       <img
        className="clock-img"
        src={require("../../assets/clock-blue.png")}
        alt="imgFood"
      />
      <p>Client: {name}</p>
      <button>See Order</button>
    </section>
  );
};

export default CardsOrders;
