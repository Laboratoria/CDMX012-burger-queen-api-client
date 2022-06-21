import React from "react";

const CardsOrders = (props) => {
  const { name } = props;
  return (
    <section className="boxCards">
      <img
        className="conteiner-img"
        src={require("../../assets/chef.png")}
        alt="imgFood"
      />
      <p>{name}</p>
      <button>See Order</button>
    </section>
  );
};

export default CardsOrders;
