import React from "react";

const OrdersTaken = (props) => {
  const { name, qty } = props;
  console.log(name);
  return (
    <>
      <p className="order" id="p1">
        {name}
      </p>
      <p>{qty}</p>
      <p>Price: $</p>
      <hr/>
    </>
  );
};

export default OrdersTaken;
