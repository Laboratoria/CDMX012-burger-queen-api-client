import React, { useState } from "react";
import AsideRegister from "./AsideRegister";
import ContentTableEmployess from "./ContentTableEmployess";
import { IconButton } from "@mui/material";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
const Employees = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const drawerHandler = () => {
    setIsModalShown(!isModalShown);
  };

  return (
    <div>
      <section className="content-button-register">
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
      )}</section>
      <ContentTableEmployess />
    </div>
  );
};

export default Employees;
