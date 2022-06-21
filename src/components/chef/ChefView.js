import React, { useEffect, useState } from "react";
import Header from "../Header";
import { getOrderKitchen } from "../../lib/RequestHandler";
import Search from "../Search";
import CardsOrders from "./CardsOrders";
import "../../css/chef.css";

const ChefView = () => {
  const [orders, setOrders] = useState([]);
  const [showData, setShowData] = useState(false);

  const getData = async () => {
    const dataOfProducts = await getOrderKitchen(); //ARRAY OF PRODUCTS IN API
    setOrders(dataOfProducts);
  };
  console.log(orders);

  useEffect(() => {
    getData();
    setShowData(true);
  }, []);

  return (
    <>
      <Header />
      <Search />
      <h1>Vista de chef</h1>
      <div className="orders-container">
        {showData &&
          orders.map((order) => {
            console.log(order.client);
            return <CardsOrders name={order.client} key={order.id} />;
          })}
      </div>
      {/* <button onClick={getData}>data</button> */}
    </>
  );
};

export default ChefView;
