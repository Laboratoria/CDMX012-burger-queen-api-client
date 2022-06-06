import React from "react";
import Header from "../Header";
import AsideRegister from "./AsideRegister";
import Products from "./Products";

const Personal = () => {
  return (
    <section className="Personal container">
     
      <Header />
     <AsideRegister/>
      <h1>Vista de Administrador</h1>
      {/* <Products/> */}
    </section>
  );
};

export default Personal;
