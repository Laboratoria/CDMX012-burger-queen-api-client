import React, { useEffect, useState } from "react";
import Header from "../Header";
import { getOrderKitchen } from "../../lib/RequestHandler";

const ChefView = () => {
  const [orders, setOrders] = useState([]);

  const getData = async () => {
    const dataOfProducts = await getOrderKitchen(); //ARRAY OF PRODUCTS IN API
    setOrders(dataOfProducts);
  };
  console.log(orders);

  useEffect(()=>{
    getData()
  },[])
 
  return (
    <>
      <Header />
      <section>
        <section className="search">
          <img
            className="Search"
            alt="searchIcon"
            src={require("../../assets/Search.png")}
          />
          <input type="text" placeholder="Search..." />
        </section>
      </section>
      <h1>Vista de chef</h1>
      {/* <button onClick={getData}>data</button> */}
      {orders.map((order)=>{
      <section>{order.client}</section>     
      })}
    </>
  );
};

export default ChefView;
