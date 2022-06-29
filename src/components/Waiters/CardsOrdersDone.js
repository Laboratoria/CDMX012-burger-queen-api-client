import React, { useEffect } from "react";

const CardsOrdersDone = (props) => {
  const { name, orderId, setIsDrawerOpenOrder, ordersDone, setProducts,client, setNameClient} =
    props;

  const seeOrder = () => {
    setIsDrawerOpenOrder(true);
    setProducts(ordersDone);
    setNameClient(client)
  };

  return (
    <section className="boxCardsOrders">
      <img
        className="conteiner-img"
        src={require("../../assets/chef.png")}
        alt="imgFood"
      />
      <img
        className="clock-img"
        src={require("../../assets/campana.png")}
        alt="imgFood"
      />
      <p>Client: {name}</p>
      <p>Order: {orderId}</p>
      <button onClick={seeOrder}>See Order</button>
    </section>
  );
};

export default CardsOrdersDone;
