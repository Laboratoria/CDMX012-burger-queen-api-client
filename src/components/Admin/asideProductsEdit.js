import { Drawer, Box } from "@mui/material";
import React from "react";
import { TextField, Button } from "@material-ui/core";
import DateTime from "../Waiters/DateTime";
import { addProduct } from "../../lib/RequestHandler";

export default function AsideProductsEdit(props) {
  const {
    stock, //arreglo de los productos iniciales de la API
    updateStock, //cambio del estado de los productos de la API
    openDrawer, //abrir modales
    closeDrawer, //cambio de estado de modales
    productStock, //objeto de nuevos productos
    updateProductStock, //productos nuevos
  } = props;

  const arrayData = productStock; //catching the new object with data for API
  console.log(arrayData);

  const inputsInfo = (e) => {
    const { name, value } = e.target;
    updateProductStock((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editProducts = async () => {
    await addProduct(arrayData)
      .then((res) => {
        const newDataProduct = stock;
        newDataProduct.map((product) => {
          if (product.id === arrayData.id) {
            product.name = arrayData.name;
            product.price = arrayData.price;
            product.image = arrayData.image;
            product.type = arrayData.type;
            product.dateEntry = arrayData.dateEntry;
          }
        });
        updateStock(newDataProduct);
        closeDrawer(!openDrawer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <aside className="aside">
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => closeDrawer(false)}
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
            <DateTime />
            <p>Rol y nombre</p>
            <hr />
          </header>
          <section className="form-container">
            <div className="box">
              <TextField
                label="Name Product"
                name="name"
                onChange={inputsInfo}
                value={arrayData && arrayData.name}
              />
              <TextField
                label="Price Product"
                name="price"
                onChange={inputsInfo}
                value={arrayData && arrayData.price}
              />
              <TextField
                label="Image Product"
                name="image"
                onChange={inputsInfo}
                value={arrayData && arrayData.image}
              />
              <TextField
                label="Type Product"
                name="type"
                onChange={inputsInfo}
                value={arrayData && arrayData.type}
              />
              <TextField
                label="Date Entry"
                name="dateEntry"
                onChange={inputsInfo}
                value={arrayData && arrayData.dateEntry}
              />

              <Button onClick={() => editProducts()}>Edit</Button>
            </div>
          </section>
        </Box>
      </Drawer>
    </aside>
  );
}
