import React, { useState } from "react";
import Header from "../Header";
import Employees from "./Employees";
import ProductsStock from "./ProductsStock";

const Personal = () => {
  const [changeView, setChangeView] = useState(true);

  const getEmployee = () => {

    setChangeViewEmployees(false);
    setChangeViewProducts(true);
  };
  const getTable = () => {
    setChangeViewEmployees(false);
    setChangeViewProducts(true);
  };
  return (
    <div>
      <Header
        updateComandaOrders={getTable}

        updateComandaOrders2={getEmployee}
      />
      <h1>Vista de Administrador</h1>


      {changeView && <Employees />}

      {!changeView && <ProductsStock />}
    </main>
  );
};

export default Personal;
