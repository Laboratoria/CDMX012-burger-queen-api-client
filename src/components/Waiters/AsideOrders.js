import { Drawer, Box } from "@mui/material";
import React from "react";
import Order from "./Order";
import DateTime from "./DateTime";
import { getAuth } from "@firebase/auth";

export default function AsideOrders(props) {
  const { isDrawerOpenOrder, setIsDrawerOpenOrder, selectedOder, total } =
    props;

  const auth = getAuth();
  const userData = auth.currentUser;

  const nameEmployee = userData.displayName;

  return (
    <aside className="aside">

      {/* <section className="countAndCart">
        <button onClick={setIsDrawerOpenOrder}
          id="shopping" sx={{ fontSize: 50 }} />
      </section> */}

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
            <p>Waitress: {nameEmployee}</p>
            <hr />
          </header>
          <section>
            <p>Client:{selectedOder.client} </p>
          </section>
          <section className="allOrders">
            {selectedOder.products &&
              selectedOder.products.map((product) => {
                return (
                  <Order
                    key={product.productId}
                    client={selectedOder.client}
                    name={product.name}
                    price={product.price}
                    qty={product.qty}
                    watchBtm={false}
                  ></Order>
                );
              })}
            <p>Total:$...{total}</p>
          </section>

          {/* <Typography variant="h6" component="div">
                Side Panel
              </Typography> */}
        </Box>
      </Drawer>
    </aside>
  );
}
