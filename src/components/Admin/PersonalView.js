import React from "react";
import Header from "../Header";
import AsideRegister from "./AsideRegister";

// import Products from "./Products";
// import ProductsTable from "./ProductsTable";
import ProductsStock from "./ProductsStock";

const Personal = () => {
  return (
    <div>
      <Header />
      <h1>Vista de Administrador</h1>
      <ProductsStock />
      <AsideRegister/>
    </div>

  );
};

export default Personal;
