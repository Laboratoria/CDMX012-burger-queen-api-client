import React, { useState } from "react";
import Header from "../Header";
import Employees from "./Employees";
import ProductsStock from "./ProductsStock";

const Personal = () => {
  const [changeView, setChangeView] = useState(true);

  const getEmployee = () => {
    setChangeView(false);
  };
  const getProduct = () => {
    setChangeView(true);
  };

  return (
    <main className="menu-container">
      <Header
        updateComandaOrders={getProduct}
        updateComandaOrders2={getEmployee}
      />
      <h1>Vista de Administrador</h1>

      {changeView && <Employees />}

      {!changeView && <ProductsStock />}
    </main>
  );
};

export default Personal;
