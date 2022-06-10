import React, { useState } from "react";
import Header from "../Header";
import AsideRegister from "./AsideRegister";
import ContentTableEmployess from "./ContentTableEmployess";
import TableEmployess from "./TableEmployess";
import { IconButton } from "@mui/material";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

// import Products from "./Products";
// import ProductsTable from "./ProductsTable";
//import ProductsStock from "./ProductsStock";

const Personal = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const drawerHandler = () => {
    setIsModalShown(!isModalShown);
  };

  return (
    <div>
      <Header />
      <h1>Vista de Administrador</h1>
      <IconButton
        onClick={drawerHandler}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <section>
          <PersonAddAltRoundedIcon id="shopping" sx={{ fontSize: 50 }} />
        </section>
      </IconButton>
      {/* <ProductsStock /> */}

      {isModalShown && (
        <AsideRegister open={isModalShown} closeHandler={drawerHandler} />
      )}
      <ContentTableEmployess />
    </div>
  );
};

export default Personal;
