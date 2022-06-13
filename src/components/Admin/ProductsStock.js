import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import AsideProducts from "./asideProducts";
import AsideProductsEdit from "./asideProductsEdit";
import { getProducts } from "../../lib/RequestHandler";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteStock } from "../../lib/RequestHandler";

export default function ProductsStock() {
  const [products, setProducts] = useState([]); //datos obtenidos del get API
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); //cerrar y abrir drawer MUI para registrar
  const [drawerEdit, setDrawerEdit] = useState(false); //drawer de editado
  const [drawerDelete, setDrawerDelete] = useState(false); //modal de delete
  const [newProduct, setNewProduct] = useState({
    //estado para nuevos productos
    // id: "",
    name: "",
    price: Number,
    image: URL,
    type: "",
    dateEntry: Date,
  });

  const MySwal = withReactContent(Swal);

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

  const deleteProduct = async () => {
    await deleteStock(newProduct)
      .then((response) => {
        setProducts(products.filter((product) => product.id !== newProduct.id));
        openCloseDrawerDelete();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const confirmDelete = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFB000",
      cancelButtonColor: "#DE1344",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct();
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
      }
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
            onClick: () => confirmDelete(),
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
