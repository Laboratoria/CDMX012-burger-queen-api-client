import { Drawer, Box, IconButton, TextField, Button } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { postStock } from "../../lib/RequestHandler";
import DateTime from "../Waiters/DateTime";
import { getAuth } from "../../lib/firebase-config";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../css/admin.css";

export default function AsideProducts({
  stock,
  updateStock,
  openDrawer,
  closeDrawer,
  productStock,
  updateProductStock,
}) {
  const auth = getAuth();
  const userData = auth.currentUser;
  const arrayData = productStock; //catching the new object with data for API

  const inputsInfo = (e) => {
    const { name, value } = e.target;
    updateProductStock((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(productStock);
  };

  const handlePost = async (e) => {
    e.preventDefault();

    await postStock(arrayData)
      .then((response) => {
        updateStock(stock.concat(response.data));
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
      <IconButton
        onClick={() => closeDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <section className="addingProduct">
          <AddCircleOutlineIcon fontSize="large" />
        </section>
      </IconButton>
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
            <header>
              <h1>Add new Product</h1>
              <DateTime />{" "}
              {/* <img
              className="icons"
              alt="clockIcon"
              src={require("../../assets/Clock.png")}
            /> */}
              <p>Admin: {userData.displayName}</p>
              <hr id="pAdmin" />
            </header>
            {/* <section className="form-container-aside"> */}
            <form className="formAside" onSubmit={handlePost}>
              <TextField
                type="text"
                id="input-nameP"
                label="Name Product:"
                sx={{
                  width: 300,
                  height: 56,
                  marginTop: 20,
                }}
                // className="inputProducts"
                // placeholder="Name of the Product:"
                name="name"
                //   value={name}
                autoComplete="off"
                onChange={inputsInfo}
              />

              <TextField
                type="number"
                id="input-price"
                label="Price Product:"
                sx={{
                  width: 300,
                  height: 56,
                }}
                name="price"
                autoComplete="off"
                onChange={inputsInfo}
              />

              <TextField
                type="text"
                id="input-image"
                sx={{
                  width: 300,
                  height: 56,
                }}
                // className="inputProducts"
                label="Image Produuct:"
                name="image"
                //   value={name}
                onChange={inputsInfo}
              />

              <label className="labels">Type Product:</label>
              <select
                id="typeMenu"
                // className="inputProducts"
                placeholder="Price of the Product:"
                name="type"
                //   value={name}
                autoComplete="off"
                onChange={inputsInfo}
              >
                <option value="cena">Dinner</option>
                <option value="desayuno">Breakfast</option>
              </select>

              <label className="labels">Date entry:</label>

              <input
                id="inputDate"
                type="date"
                name="dateEntry"
                value="2022-06-03"
                min="2022-01-01"
                max="2030-12-31"
                onChange={inputsInfo}
              ></input>

              {/* <ThemeProvider theme={theme}> */}
              <button
                id="buttonAddP"
                type="submit"
                className="btonTotal"
                // variant="contained"
                startIcon={<AddCircleOutlineIcon />}
              >
                Add Product
              </button>
              {/* </ThemeProvider> */}
            </form>
            {/* </section> */}
          </Box>
        </Drawer>
      </div>
    </aside>
  );
}
