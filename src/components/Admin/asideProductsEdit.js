import { Drawer, Box } from "@mui/material";
import React from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { urlBurguerApi } from "../../lib/RequestHandler";

export default function AsideProductsEdit(props) {
  const {
    stock,
    updateStock,
    openDrawer,
    closeDrawer,
    productStock,
    updateProductStock,
  } = props;
  const arrayData = productStock; //catching the new object with data for API
  // console.log(arrayData);
  const inputsInfo = (e) => {
    const { name, value } = e.target;
    updateProductStock((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const openCloseDrawerEdit = () => {
  //   closeDrawer(!openDrawer);
  // };

  const editProducts = async () => {
    await axios.put(urlBurguerApi + "/" + productStock.id, productStock);
    console
      .log(productStock.id)
      .then((response) => {
        const newDataProduct = stock;
        newDataProduct.map((product) => {
          if (product.id === productStock.id) {
            product.name = productStock.name;
            product.price = productStock.price;
            product.image = productStock.image;
            product.type = productStock.type;
            product.dateEntry = productStock.dateEntry;
          }
          return console.log(newDataProduct);
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
            <p>Fecha del dia</p>
            <p>Hora</p>
            <p>Rol y nombre</p>
            <hr />
          </header>
          <section className="form-container">
            <div className="box">
              <TextField
                label="Name Product"
                name="name"
                onChange={inputsInfo}
                value={productStock && productStock.name}
              />
              <TextField
                label="Price Product"
                name="price"
                onChange={inputsInfo}
                value={productStock && productStock.price}
              />
              <TextField
                label="Image Product"
                name="image"
                onChange={inputsInfo}
                value={productStock && productStock.image}
              />
              <TextField
                label="Type Product"
                name="type"
                onChange={inputsInfo}
                value={productStock && productStock.type}
              />
              <TextField
                label="Date Entry"
                name="dateEntry"
                onChange={inputsInfo}
                value={productStock && productStock.dateEntry}
              />

              <Button onClick={() => editProducts()}>Edit</Button>
            </div>
          </section>
        </Box>
      </Drawer>
    </aside>
  );
}
