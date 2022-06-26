import React, { useEffect, useState } from "react";
import Header from "../Header";
import { getOrderKitchen } from "../../lib/RequestHandler";
import Search from "../Search";
import CardsOrders from "./CardsOrders";
import "../../css/chef.css";
import AsideOrders from "../chef/AsideOrders";
import { addOrderDone } from "../../lib/RequestHandler";

const ChefView = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [showData, setShowData] = useState(false);
  const [isDrawerOpenOrder, setIsDrawerOpenOrder] = useState(false);
  const [doneOrder, setDoneOrder] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [nameClient, setNameClient] = useState({});
  const [orderId, setOrderId] = useState({});
  console.log(orders);
  console.log(selectedOrder);

  const getData = async () => {
    const dataOfProducts = await getOrderKitchen(); //ARRAY OF PRODUCTS IN API
    setOrders(dataOfProducts);
  };

  console.log(nameClient, orderId, selectedOrder);

  let saveOrderDone = () => {
    addOrderDone(nameClient, orderId, selectedOrder);
    setDoneOrder(true);

    console.log(" nofunciona");
  };

  useEffect(() => {
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
