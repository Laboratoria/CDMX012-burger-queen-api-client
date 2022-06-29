import React from "react";
import DateTime from "../Waiters/DateTime";
import { Drawer, Box } from "@mui/material";
import { getAuth } from "@firebase/auth";
import OrderSendDone from "./OrderSendDone";

const AsideOrdersDone = (props) => {
  const { isDrawerOpenOrder, setIsDrawerOpenOrder, showData,ordersDone, products, nameClient } =
    props;
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
           
            <h1 className="order-deliver blink">This order is ready for delivery to the client</h1>
            <br></br>
            <p><strong>Client:</strong> {nameClient} </p>
            <hr />
            {showData &&
             products.map((order) => {
                return (
                  <OrderSendDone
                  key={order.productId}
                  name={order.name}
                  qty={order.qty}/>
                );
              })}
            <br></br>
            
          </section>
        </Box>
      </Drawer>
    </aside>
  );
};

export default AsideOrdersDone;
