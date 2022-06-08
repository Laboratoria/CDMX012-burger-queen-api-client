import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import AsideProducts from "./asideProducts";
import {  getProducts } from "../../lib/RequestHandler";


export default function ProductsStock() {

  const [products, setProducts] = useState([]);

  const getData = async () => {
    const dataOfProducts = await getProducts();//ARRAY OF PRODUCTS IN API
    setProducts(dataOfProducts);
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
          () => ({
            size: "small",
            tooltip: "Product edit",
            icon: "edit",
            onClick: (event, rowData) => {
              console.log(rowData);
            },
          }),
          () => ({
            size: "small",
            tooltip: "Product delete",
            icon: "delete",
            onClick: (event, rowData) => {
              console.log(rowData);
            },
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
      <AsideProducts />
    </section>
  );
}
