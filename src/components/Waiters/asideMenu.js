import { Drawer, Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Order from "./Order";
import { addOrder } from "../../lib/RequestHandler";
import DateTime from "./DateTime";
import { getAuth} from "@firebase/auth";

export default function AsideMenu(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { order, updateOrder,total,setTotal,contador } = props
  const [name, setName] = useState("");  
  

  const ClientName = (event) => {
    setName(event.target.value);
  };
  const Total = () => {
    let suma = 0;
    for (let i = 0; i < order.products.length; i++) {
      let product = order.products[i];
      suma += product.price * product.qty;
    }


    setTotal(suma)
    addOrder(order,name)
    updateOrder({})
    setName("")
  
    
  
}
  const auth = getAuth();
  const userData = auth.currentUser;
const nameEmployee=userData.displayName;

return (

    <aside className="aside">
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <section className="countAndCart">
          <p>{contador}</p>
          <ShoppingCartIcon id="shopping" sx={{ fontSize: 50 }} />
        </section>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
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
             <DateTime/>
            

          
            <p>Waitress: { nameEmployee}</p>
            <hr />
          </header>
          <section>
            <p></p>
            <input
              type="orderName"
              className="inputOrder"
              placeholder="Client name:"
              value={name}
              autoComplete="off"
              onChange={ClientName}
            />
          </section>
          <section className="allOrders">
            {order.products &&
              order.products.map((product) => {
                return (
                  <Order
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    qty={product.qty}
                    order={order}
                    updateOrder={updateOrder}
                    id={product.id}
                    watchBtm={true}
                    total={Total}
                  ></Order>
                );
              })}
            <p>Total:$...{total}</p>
          </section>
          <button className="btonTotal" onClick={Total}>Process Order</button>
          {/* <Typography variant="h6" component="div">
            Side Panel
          </Typography> */}
        </Box>
      </Drawer>
    </aside>
  );
}