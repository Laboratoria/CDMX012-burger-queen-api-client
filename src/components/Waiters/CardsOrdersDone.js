import React from 'react'

const CardsOrdersDone = (props)=> {
  const {name, orderId}=props
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
      <button >See Order</button>
    </section>
  )
}


export default CardsOrdersDone