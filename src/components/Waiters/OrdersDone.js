import React, { useEffect, useState } from "react";
import { getOrdersDone } from "../../lib/RequestHandler";
import CardsOrdersDone from "./CardsOrdersDone";

const OrdersDone = () => {
  const [ordersDone, setOrdersDone] = useState([]);
  const [showData, setShowData] = useState(false);
  console.log(ordersDone);

  const getData = async () => {
    const dataOfProducts = await getOrdersDone();
    setOrdersDone(dataOfProducts);
  };
  console.log(ordersDone);
  useEffect(() => {
    getData();
    setShowData(true);
  }, []);

  return (
    <section className="orders-container">
      {showData &&
        ordersDone.map((order) => {
          return <CardsOrdersDone key={order.id} 
          name={order.client}
          orderId={order.orderId}/>;
        })}
    </section>
  );
};

export default OrdersDone;
