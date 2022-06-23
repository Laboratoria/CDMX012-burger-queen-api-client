import React from "react";
import DateTime from "../Waiters/DateTime";
import { IconButton, Drawer, Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { getAuth } from "@firebase/auth";
import OrdersTaken from "./OrdersTaken";

const AsideOrders = (props) => {
  const { isDrawerOpenOrder, setIsDrawerOpenOrder, showData, selectedOrder } =
    props;
  const auth = getAuth();
  const userData = auth.currentUser;
  const nameEmployee = userData.displayName;
  console.log(showData);
  console.log(selectedOrder);

  return (
    <aside className="aside">
      {/* <IconButton
        onClick={() => setIsDrawerOpenOrder(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <section className="countAndCart">
          <AddCircleOutlineIcon id="addProduct" sx={{ fontSize: 50 }} />
        </section>
      </IconButton> */}
      <Drawer
        anchor="right"
        open={isDrawerOpenOrder}
        onClose={() => setIsDrawerOpenOrder(false)}
      >
        <Box
          p={2}
          width="400px"
          role="presentation"
          textAlign="center"
          sx={{
            width: 400,
            height: 1000,
          }}
        >
          <header>
            <img
              className="icons"
              alt="clockIcon"
              src={require("../../assets/Clock.png")}
            />
            <DateTime />
            <p>Chef: {nameEmployee}</p>
            <hr />
          </header>
          <section className="allOrders">
            <p>client: {selectedOrder.client}</p>
            {showData &&
              selectedOrder.map((order) => {
                return (
                  <OrdersTaken key={order.productId} name={order.name} />
                );
              })}
          </section>
        </Box>
      </Drawer>
    </aside>
  );
};

export default AsideOrders;
