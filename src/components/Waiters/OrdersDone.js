import React, { useEffect, useState } from "react";
import { getOrdersDone } from "../../lib/RequestHandler";
import AsideOrdersDone from "./AsideOrdersDone";
import CardsOrdersDone from "./CardsOrdersDone";

const OrdersDone = (props) => {
  const { isDrawerOpenOrder, setIsDrawerOpenOrder } = props;
  const [ordersDone, setOrdersDone] = useState([]);
  const [showData, setShowData] = useState(false);
  const [products,setProducts]=useState({})
  const [nameClient, setNameClient]=useState({})


  const getData = async () => {
    const dataOfProducts = await getOrdersDone();
    setOrdersDone(dataOfProducts);
  };

  useEffect(() => {
    getData();
    setShowData(true);
  }, []);

  return (
    <section className="orders-container">
      {showData &&
        ordersDone.map((order) => {
          return (
            <CardsOrdersDone
              key={order.id}
              name={order.client}
              orderId={order.orderId}
              setIsDrawerOpenOrder={setIsDrawerOpenOrder}
              ordersDone={order.products}
              setProducts={setProducts}
              client={order.client}
              setNameClient={setNameClient}
            />
          );
        })}
      {isDrawerOpenOrder && (
        <AsideOrdersDone
        isDrawerOpenOrder={isDrawerOpenOrder}
        setIsDrawerOpenOrder={setIsDrawerOpenOrder}
        showData={showData}
        ordersDone={ordersDone}
        products={products}
        nameClient={nameClient}
     />
      )}
    </section>
  );
};

export default OrdersDone;
