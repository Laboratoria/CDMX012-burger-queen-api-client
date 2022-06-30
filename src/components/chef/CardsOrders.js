import React, { useEffect, useRef } from "react";

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
    setOrderEditById,
  } = props;

  const sectionRef = useRef();
  let currentById = sectionRef.current;
  const seeOrder = () => {
    setOrderEditById(currentById);
    setSelectedOrder(orders);
    setIsDrawerOpenOrder(true);
    setNameClient(client);
    setOrderId(orderId);
    
  };

  const seeElement = () => {
    setOrderEditById(currentById);
    setSelectedOrder(orders);
    setIsDrawerOpenOrder(false);
    setNameClient(client);
    setOrderId(orderId);
    
  };

  useEffect(()=>{
  seeElement()
  },[])
  return (
    <section className="boxCardsOrders" ref={sectionRef} id={orderId}>
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
