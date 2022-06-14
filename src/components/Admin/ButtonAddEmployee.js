import React from "react";
import { IconButton } from "@mui/material";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

const ButtonAddEmployee = (drawerHandler) => {
  return (
    <>
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
      </>
  );
};

export default ButtonAddEmployee;
