import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import AsideProducts from "./asideProducts";
import AsideProductsEdit from "./asideProductsEdit";
import { getProducts } from "../../lib/RequestHandler";

export default function ProductsStock() {
  const [products, setProducts] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerEdit, setDrawerEdit] = useState(false);
  const [drawerDelete, setDrawerDelete] = useState(false);
  const [newProduct, setNewProduct] = useState({
    // id: "",
    name: "",
    price: Number,
    image: URL,
    type: "",
    dateEntry: Date,
  });

  const getData = async () => {
    const dataOfProducts = await getProducts(); //ARRAY OF PRODUCTS IN API
    setProducts(dataOfProducts);
  };

  const openCloseDrawerEdit = () => {
    setDrawerEdit(!drawerEdit);
  };

  const openCloseDrawerDelete = () => {
    setDrawerDelete(!drawerDelete);
  };

  const pickProduct = (newProduct, selection) => {
    setNewProduct(newProduct);
    selection === "Edit" ? openCloseDrawerEdit() : openCloseDrawerDelete();
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
            onClick: (event, rowData) => pickProduct(rowData, "Edit"),
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
      <AsideProducts
        stock={products}
        updateStock={setProducts}
        openDrawer={isDrawerOpen}
        closeDrawer={setIsDrawerOpen}
        productStock={newProduct}
        updateProductStock={setNewProduct}
      />
      <AsideProductsEdit
        stock={products}
        updateStock={setProducts}
        openDrawer={drawerEdit}
        closeDrawer={setDrawerEdit}
        productStock={newProduct}
        updateProductStock={setNewProduct}
      />
    </section>
  );
}
