import React, { useState } from "react";
import Header from "../Header";
import Search from "../Search";
import Menu from "./Menu";
import ordersComanda from "./Menu";
import { getOrder } from "../../lib/RequestHandler";
import OrdersDone from "./OrdersDone";
const MenuView = () => {
  const [changeButtonsView, setChangeButtonView] = useState(false);
  const [changeView, setChangeView] = useState(true);
  const [comandasOrders, setComandasOrders] = useState([]);
  const [isDrawerOpenOrder, setIsDrawerOpenOrder] = useState(false);
  

  const ordersComanda = async () => {
    const arrayOrders = await getOrder();
    setChangeView(false);
    setChangeButtonView(false)
    setComandasOrders(arrayOrders);
    // setOrder(arrayOrders);
  };

  let clickButtonHeader = () => {
    setChangeButtonView(true);
  };

  return (
    <main className="menu-container">
      <Header
        updateComandaOrders={ordersComanda}
        updateComandaOrders2={clickButtonHeader}
      />
     
      {!changeButtonsView && (
        <Menu
          changeView={changeView}
          setChangeView={setChangeView}
          comandasOrders={comandasOrders}
          setComandasOrders={setComandasOrders}
          isDrawerOpenOrder={isDrawerOpenOrder}
          setIsDrawerOpenOrder={setIsDrawerOpenOrder}
        />
      )}
      {changeButtonsView && <OrdersDone
      isDrawerOpenOrder={isDrawerOpenOrder}
      setIsDrawerOpenOrder={setIsDrawerOpenOrder} />}
    </main>
  );
};

export default MenuView;
