import { Drawer, Box, IconButton } from "@mui/material";
import {useState} from "react";
import Order from "./Order";
import { addOrder } from "../../lib/RequestHandler";
import { DateOrder } from "./DateOrder";

export default function AsideOrders(props) {
    
    const { isDrawerOpenOrder, setIsDrawerOpenOrder,selectedOder } = props
    const [name, setName] = useState("");
    return (

        <aside className="aside">
            <section className="countAndCart">
          <button onClick = {setIsDrawerOpenOrder} 
           id="shopping" sx={{ fontSize: 50 }} />
        </section>
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
                backgroundColor: "primary.dark",
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
                <p>Fecha del dia</p>
                <p>Hora</p>
                <p>Waitress y nombre</p>
                <hr />
              </header>
              <section>
                <p>Client: </p>
                
              </section>
              <section className="allOrders">
                {selectedOder.products &&
                  selectedOder.products.map((product) => {
                    return (
                      <Order
                        key={product.productId}
                        name={product.name}
                        price={product.price}
                        qty={product.qty}
                      ></Order>
                    );
                  })}
                {/* <p>Total:$...{total}</p> */}
              </section>
             
              {/* <Typography variant="h6" component="div">
                Side Panel
              </Typography> */}
            </Box>
          </Drawer>
        </aside>
      );
    }
    