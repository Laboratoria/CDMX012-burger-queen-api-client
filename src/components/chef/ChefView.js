import React, { useEffect, useState} from "react";
import Header from "../Header";
import { getOrderKitchen } from "../../lib/RequestHandler";
import CardsOrders from "./CardsOrders";
import "../../css/chef.css";
import AsideOrders from "../chef/AsideOrders";
import { addOrderDone } from "../../lib/RequestHandler";

const ChefView = () => {
  const [orders, setOrders] = useState([]);
  const [showData, setShowData] = useState(false);
  const [isDrawerOpenOrder, setIsDrawerOpenOrder] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [nameClient, setNameClient] = useState({});
  const [orderId, setOrderId] = useState({});
  const [orderEditById, setOrderEditById] = useState();
  const [sectionElement, setSectionElement] = useState();


  const getData = async () => {
    const dataOfProducts = await getOrderKitchen(); //ARRAY OF PRODUCTS IN API
    setOrders(dataOfProducts);
  };

  let saveOrderDone = () => {
    addOrderDone(nameClient, orderId, selectedOrder);
    setIsDrawerOpenOrder(false);
    hiddenBoxCard();
  };

  const hiddenBoxCard = () => {
   let hidden= orderEditById
      return  hidden.style.display="none"
     };


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
                setOrderEditById={setOrderEditById}
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
