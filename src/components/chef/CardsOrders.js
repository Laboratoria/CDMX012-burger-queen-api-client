import React, { useEffect } from "react";

const CardsOrders = (props) => {
  const {
    name,
    setIsDrawerOpenOrder,
    orders,
    setSelectedOrder,
    setNameClient,
    client,
    setOrderId,
    orderId,
  } = props;

  const seeOrder = () => {
    setSelectedOrder(orders);
    setIsDrawerOpenOrder(true);
    setNameClient(client);
    setOrderId(orderId);
    
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
        src={require("../../assets/clock-blue.png")}
        alt="imgFood"
      />

      <p>Client: {name}</p>
      <p>Order: {orderId}</p>
      <button onClick={seeOrder}>See Order</button>
    </section>
  );
};

export default CardsOrders;
