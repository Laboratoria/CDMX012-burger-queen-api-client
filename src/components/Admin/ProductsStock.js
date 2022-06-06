import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import AsideProducts from "./asideProducts";

export default function ProductsStock() {
  const [products, setProducts] = useState([]);

  const urlBurguerApi = "http://localhost:5000/Stock";

  const getData = async () => {
    await axios.get(urlBurguerApi).then((response) => {
      // const data = response.data;
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      field: "id", //datos api
      title: "#", //title table
    },
    {
      field: "name",
      title: "Product",
    },
    {
      field: "price",
      title: "Price",
    },
  ];

  return (
    <section>
      <MaterialTable
        title={"Stock of products"}
        columns={columns}
        data={products}
        actions={[
          {
            icon: "edit",
            tooltip: "Product edit",
          },
          {
            icon: "delete",
            tooltip: "Product delete",
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
      <AsideProducts />
    </section>
  );
}
