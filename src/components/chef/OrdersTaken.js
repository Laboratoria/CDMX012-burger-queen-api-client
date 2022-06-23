import React from "react";

const OrdersTaken = (props) => {
  const { name } = props;
  console.log(name);
  return (
    <>
      <p className="order" id="p1">
        {name}
      </p>
      <hr></hr>
    </>
  );
};

export default OrdersTaken;
