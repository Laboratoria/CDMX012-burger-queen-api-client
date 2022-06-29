import React, { useEffect, useState } from "react";
import Header from "../Header";
import { getOrderKitchen } from "../../lib/RequestHandler";
import Search from "../Search";
import CardsOrders from "./CardsOrders";
import "../../css/chef.css";
import AsideOrders from "../chef/AsideOrders";
import { addOrderDone, editOrderKitchen } from "../../lib/RequestHandler";

const ChefView = () => {
  const [orders, setOrders] = useState([]);
  const [showData, setShowData] = useState(false);
  const [isDrawerOpenOrder, setIsDrawerOpenOrder] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [nameClient, setNameClient] = useState({});
  const [orderId, setOrderId] = useState({});
  const [orderEditById, setOrderEditById] = useState();

  const getData = async () => {
    const dataOfProducts = await getOrderKitchen(); //ARRAY OF PRODUCTS IN API
    setOrders(dataOfProducts);
  };

  let saveOrderDone = () => {
    addOrderDone(nameClient, orderId, selectedOrder);
    setIsDrawerOpenOrder(false);
  };

  const editData = async (orderId) => {
      let editData = await editOrderKitchen(orderId);
        setOrderEditById(editData);

   if (orderEditById.id ===orderId){
  return "ho"}else{
  return "nollll"}

  };
  
  // editData(orderId)
  useEffect(() => {
    getData();
    setShowData(true);
  }, []);

  return (
    <main className="menu-container">
      <Header />
      
      <div className="orders-container">
        {showData &&
          orders.map((order) => {
            return (
              <CardsOrders
                name={order.client}
                key={order.id}
                setIsDrawerOpenOrder={setIsDrawerOpenOrder}
                orders={order.products}
                client={order.client}
                orderId={order.id}
                dataOrder={order}
                setSelectedOrder={setSelectedOrder}
                setNameClient={setNameClient}
                setOrderId={setOrderId}
              />
            );
          })}
        {isDrawerOpenOrder && (
          <AsideOrders
            isDrawerOpenOrder={isDrawerOpenOrder}
            setIsDrawerOpenOrder={setIsDrawerOpenOrder}
            showData={showData}
            selectedOrder={selectedOrder}
            orders={orders}
            nameClient={nameClient}
            orderId={orderId}
            saveOrderDone={saveOrderDone}
          />
        )}
      </div>
    </main>
  );
};

export default ChefView;
