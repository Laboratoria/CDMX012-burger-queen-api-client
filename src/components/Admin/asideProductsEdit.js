import { Drawer, Box } from "@mui/material";
import React from "react";
import { TextField, Button } from "@material-ui/core";
import DateTime from "../Waiters/DateTime";
import { addProduct } from "../../lib/RequestHandler";
import { getAuth } from "../../lib/firebase-config";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function AsideProductsEdit(props) {
  const {
    stock, //arreglo de los productos iniciales de la API
    updateStock, //cambio del estado de los productos de la API
    openDrawer, //abrir modales
    closeDrawer, //cambio de estado de modales
    productStock, //objeto de nuevos productos
    updateProductStock, //productos nuevos
  } = props;

  const auth = getAuth();
  const userData = auth.currentUser;
  const arrayData = productStock; //catching the new object with data for API
  // console.log(arrayData);

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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "#004668",
      },
    },
  });

  return (
    <aside className="aside">
      <div>
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={() => closeDrawer(false)}
        >
          <Box
            p={5}
            width="400px"
            role="presentation"
            textAlign="center"
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
            marginTop={"0"}
            sx={{
              width: 400,
              height: 1000,
            }}
          >
            <header className="headerEdit">
              {/* <img
              className="icons"
              alt="clockIcon"
              src={require("../../assets/Clock.png")}
            /> */}
              <h1>Edit Product</h1>
              <DateTime />
              <p>Admin: {userData.displayName}</p>
              <hr id="pAdmin" />
            </header>
            {/* <section className="form-container"> */}
            <div className="formAside2">
              <TextField
                label="Name Product"
                name="name"
                id="input-nameP"
                className="editInputs"
                onChange={inputsInfo}
                value={arrayData && arrayData.name}
              />
              <TextField
                label="Price Product"
                name="price"
                onChange={inputsInfo}
                value={arrayData && arrayData.price}
                id="input-price"
              />
              <TextField
                label="Image Product"
                name="image"
                id="input-image"
                onChange={inputsInfo}
                value={arrayData && arrayData.image}
              />
              <TextField
                label="Type Product"
                name="type"
                id="input-typeP"
                onChange={inputsInfo}
                value={arrayData && arrayData.type}
              />
              <TextField
                label="Date Entry"
                name="dateEntry"
                id="input-date"
                onChange={inputsInfo}
                value={arrayData && arrayData.dateEntry}
              />

              <ThemeProvider theme={theme}>
                <button
                  // id="buttonEdit"
                  className="btonTotal"
                  // className="buttonAddP"
                  // variant="contained"
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={() => editProducts()}
                >
                  Edit
                </button>
              </ThemeProvider>
            </div>
            {/* </section> */}
          </Box>
        </Drawer>
      </div>
    </aside>
  );
}
