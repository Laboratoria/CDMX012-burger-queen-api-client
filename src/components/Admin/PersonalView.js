import React, { useState } from "react";
import Header from "../Header";
import Employees from "./Employees";
import ProductsStock from "./ProductsStock";

const Personal = () => {
  const [changeViewEmployees, setChangeViewEmployees] = useState(true);
  const [changeViewProducts, setChangeViewProducts] = useState(false);

  const getEmployee = () => {
    setChangeViewEmployees(false);
    setChangeViewProducts(true)
  };
  const getTable = () => {
    setChangeViewEmployees(false);
    setChangeViewProducts(true)
  };
  return (
    <div>
      <Header updateComandaOrders ={ getTable} updateComandaOrders2={getEmployee}/>
      <h1>Vista de Administrador</h1>


      {changeViewEmployees && (<Employees />)}

      {changeViewProducts&&(<ProductsStock/>)}

    </div>
  );
};

export default Personal;
