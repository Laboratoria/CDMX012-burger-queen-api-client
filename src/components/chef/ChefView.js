import React, { useEffect, useState } from "react";
import Header from "../Header";
import { getOrderKitchen } from "../../lib/RequestHandler";
import Search from "../Search";
import CardsOrders from "./CardsOrders";
import "../../css/chef.css";
import AsideOrders from "../chef/AsideOrders";

const ChefView = () => {
  const [orders, setOrders] = useState([]);
  const [showData, setShowData] = useState(false);
  const [isDrawerOpenOrder, setIsDrawerOpenOrder] = useState(false);
  const [doneOrder, setDoneOrder] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  const getData = async () => {
    const dataOfProducts = await getOrderKitchen(); //ARRAY OF PRODUCTS IN API
    setOrders(dataOfProducts);
  };

  useEffect(() => {
    console.log("loading data");
    getData();
    setShowData(true);
  }, []);

  return (
    <main className="menu-container">
      <Header />
      <Search />

      <div className="orders-container">
        {showData &&
          orders.map((order) => {
            return (
              <CardsOrders
                name={order.client}
                key={order.id}
                setIsDrawerOpenOrder={setIsDrawerOpenOrder}
                doneOrder={doneOrder}
                orders={order.products}
                setSelectedOrder={setSelectedOrder}
              />
            );
          })}
        {isDrawerOpenOrder && (
          <AsideOrders
            isDrawerOpenOrder={isDrawerOpenOrder}
            setIsDrawerOpenOrder={setIsDrawerOpenOrder}
            showData={showData}
            selectedOrder={selectedOrder}
          />
        )}
      </div>
    </main>
  );
};

export default ChefView;
