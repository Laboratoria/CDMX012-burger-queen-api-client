// /* eslint-disable react/jsx-no-comment-textnodes */
// import "../css/Menu.css";

// export default function AsideMenu() {
//   return (
//     <aside className="aside-container">
//      <header>
//          <img
//             className="icons"
//             alt="clockIcon"
//             src={require("../assets/Clock.png")}
//             />
//          <p>Fecha del dia</p>
//          <p>Hora</p>
//          <p>Rol y nombre</p>
//      </header>
//      <section>
//          <p>Order:</p>
//          <p>Client name:</p>
//      </section>
//      <main className="allOrders">
//          <p>Total:$...</p>
//          <img
//             className="icons"
//             alt="editIcon"
//             src={require("../assets/edit.png")}
//             />
//         <img
//             className="icons"
//             alt="deleteIcon"
//             src={require("../assets/delete.png")}
//             />
//      </main>
//      <button>Process Order</button>
//     </aside>
//   );
// }
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function AsideMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          <p>32</p>
          <ShoppingCartIcon id="shopping" sx={{ fontSize: 50 }} />
        </section>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="400px" role="presentation" textAlign="center" sx={{
        backgroundColor: 'primary.dark', width: 400, height: 1000
      }}>
          <header>
            <img
              className="icons"
              alt="clockIcon"
              src={require("../assets/Clock.png")}
            />
            <p>Fecha del dia</p>
            <p>Hora</p>
            <p>Rol y nombre</p>
            <hr/>
          </header>
          <section>
         <p>Order:</p>
         <p>Client name:</p>
     </section>
     <section className="allOrders">
          <p>Total:$...</p>
          <img
            className="icons"
            alt="editIcon"
            src={require("../assets/edit.png")}
            />
        <img
            className="icons"
            alt="deleteIcon"
            src={require("../assets/delete.png")}
            />
     </section>
     <button>Process Order</button>
          {/* <Typography variant="h6" component="div">
            Side Panel
          </Typography> */}
        </Box>
      </Drawer>
    </aside>
  );
}
