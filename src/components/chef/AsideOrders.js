import React from "react";
import DateTime from "../Waiters/DateTime";
import { Drawer, Box } from "@mui/material";
import { getAuth } from "@firebase/auth";
import OrdersTaken from "./OrdersTaken";

const AsideOrders = (props) => {
  const {
    isDrawerOpenOrder,
    setIsDrawerOpenOrder,
    showData,
    selectedOrder,
    orders,
    nameClient,
    saveOrderDone,doneOrder
  } = props;
  const auth = getAuth();
  const userData = auth.currentUser;
  const nameEmployee = userData.displayName;
 
  return (
    <aside className="aside">
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
            <p>Client: {nameClient}</p>
            <br></br>
            {showData &&
              selectedOrder.map((order) => {
                return (
                  <OrdersTaken
                    key={order.productId}
                    name={order.name}
                    qty={order.qty}
                  />
                );
              })}
            <br></br>
          </section>
          {/* {!doneOrder&&  */}
          <button className="btonTotal" onClick={saveOrderDone}> Order Done
          </button>
          {/* } */}
           {/* {doneOrder&& <h2>Order Done</h2>} */}
        </Box>
      </Drawer>
    </aside>
  );
};

export default AsideOrders;
