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
      <Search />
      {!changeButtonsView && (
        <Menu
          changeView={changeView}
          setChangeView={setChangeView}
          comandasOrders={comandasOrders}
          setComandasOrders={setComandasOrders}
        />
      )}
      {changeButtonsView && <OrdersDone />}
    </main>
  );
};

export default MenuView;
