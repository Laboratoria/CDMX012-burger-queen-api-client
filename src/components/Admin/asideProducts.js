import { Drawer, Box, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";
import { getProducts, urlBurguerApi } from "../../lib/RequestHandler";

// import { handleAddProduct } from "../../lib/RequestHandler";

export default function AsideProducts() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    // id: "",
    name: "",
    price: Number,
    image: URL,
    type: "",
    dateEntry: Date,
  });
  const [products, setProducts] = useState([]);
  const arrayData = newProduct; //catching the new object with data for API
  console.log(arrayData);

  const inputsInfo = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePost = async () => {
    await axios
      .post(urlBurguerApi + "/Stock", arrayData)
      .then((response) => {
        setProducts(products.concat(response.data));
        console.log(setProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

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
          <AddCircleOutlineIcon id="addProduct" sx={{ fontSize: 50 }} />
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
            <form className="box">
              {/* <label>Id Product:</label>
              <input
                type="text"
                className="inputProducts"
                placeholder="id of the Product:"
                name="id"
                //   value={name}
                autoComplete="off"
                onChange={inputsInfo}
              /> */}
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
              <label>
                Image Product:
                <input
                  type="file"
                  className="inputProducts"
                  placeholder="Price of the Product:"
                  //   value={name}
                  autoComplete="off"
                  //   onChange={ClientName}
                />
                <input type="submit" value="Send image"></input>
              </label>
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

              <button onClick={() => handlePost()}>Add product</button>
            </form>
          </section>
        </Box>
      </Drawer>
    </aside>
  );
}
