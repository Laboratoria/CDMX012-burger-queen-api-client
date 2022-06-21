import { Drawer, Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";
import { postStock, urlBurguerApi } from "../../lib/RequestHandler";
import DateTime from "../Waiters/DateTime";

export default function AsideProducts({
  stock,
  updateStock,
  openDrawer,
  closeDrawer,
  productStock,
  updateProductStock,
}) {
  // const {
  //   stock,
  //   updateStock,
  //   openDrawer,
  //   closeDrawer,
  //   productStock,
  //   updateProductStock,
  // } = props;

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
  const handleImageSelect = (event) => {
    arrayData.image(event.target.files[0]);
  };

  return (
    <aside className="aside">
      <IconButton
        onClick={() => closeDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <section className="countAndCart">
          <AddCircleOutlineIcon id="addProduct" sx={{ fontSize: 50 }} />
        </section>
      </IconButton>
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
            <form className="box" onSubmit={handlePost}>
              <label>Name Product:</label>
              <input
                type="text"
                className="inputProducts"
                placeholder="Name of the Product:"
                name="name"
                //   value={name}
                autoComplete="off"
                onChange={inputsInfo}
              />
              <label>Price Product:</label>
              <input
                type="number"
                className="inputProducts"
                placeholder="Price of the Product:"
                name="price"
                //   value={name}
                autoComplete="off"
                onChange={inputsInfo}
              />
              <label>Image Product: </label>
              <input
                type="text"
                className="inputProducts"
                placeholder="Image of the Product:"
                name="image"
                //   value={name}
                onChange={inputsInfo}
              />

              <label>Type Product:</label>
              <select
                id="typeMenu"
                className="inputProducts"
                placeholder="Price of the Product:"
                name="type"
                //   value={name}
                autoComplete="off"
                onChange={inputsInfo}
              >
                <option value="cena">Dinner</option>
                <option value="desayuno">Breakfast</option>
              </select>
              <label>Date entry:</label>

              <input
                type="date"
                name="dateEntry"
                value="2022-06-03"
                min="2022-01-01"
                max="2030-12-31"
                onChange={inputsInfo}
              ></input>

              <input type="submit" value="Add Product" />
            </form>
          </section>
        </Box>
      </Drawer>
    </aside>
  );
}
