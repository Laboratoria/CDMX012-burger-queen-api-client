import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import AsideProducts from "./asideProducts";
import AsideProductsEdit from "./asideProductsEdit";
import { getProducts, deleteStock } from "../../lib/RequestHandler";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function ProductsStock() {
  const [products, setProducts] = useState([]); //datos obtenidos del get API
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); //cerrar y abrir drawer MUI para registrar
  const [drawerEdit, setDrawerEdit] = useState(false); //drawer de editado

  const [newProduct, setNewProduct] = useState({
    //estado para nuevos productos
    // id: "",
    name: "",
    price: Number,
    image: "",
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

  // const openCloseDrawerDelete = () => {
  //   setDrawerDelete(!drawerDelete);
  // };

  const pickProduct = (newProduct) => {
    setNewProduct(newProduct);
    openCloseDrawerEdit();
  };

  const deleteProduct = async (id) => {
    await deleteStock(id)
      .then((response) => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const deleteProducts =(id)=>{
  //   deleteStock(id)
  //   setProducts(products.filter((product) => product.id !== id));

  // }

  const confirmDelete = (rowProduct) => {
    console.log(rowProduct);
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#004668",
      cancelButtonColor: "#5B2448",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(rowProduct.id);
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
      title: "#",
      cellStyle: {
        backgroundColor: "#C6D2D9",
        color: "#5B2448",
        border: "solid 1px #004668",
      },
      headerStyle: {
        fontSize: "larger",
        fontWeight: "bold",
        textAlign: "center",
      },
    },
    {
      field: "name",
      title: "Product",
      cellStyle: {
        backgroundColor: "#C6D2D9",
        color: "#5B2448",
        border: "solid 1px #004668",
      },
      headerStyle: {
        fontSize: "larger",
        fontWeight: "bold",
        textAlign: "center",
      },
    },
    {
      field: "price",
      title: "Price",
      cellStyle: {
        backgroundColor: "#C6D2D9",
        color: "#5B2448",
        border: "solid 1px #004668",
      },
      headerStyle: {
        fontSize: "larger",
        fontWeight: "bold",
        textAlign: "center",
      },
    },
  ];

  return (
    <section className="table-container">
      <AsideProducts
        stock={products}
        updateStock={setProducts}
        openDrawer={isDrawerOpen}
        closeDrawer={setIsDrawerOpen}
        productStock={newProduct}
        updateProductStock={setNewProduct}
      />
      <MaterialTable
        style={{
          backgroundColor: "#C6D2D9",
          color: "#5B2448",
          // fontSize: "larger",
          // fontWeight: "bold",
        }}
        title={"Stock of products"}
        columns={columns}
        data={products}
        actions={[
          () => ({
            size: "small",
            tooltip: "Product edit",
            icon: "edit",
            iconProps: {
              cellStyle: {
                backgroundColor: "#C6D2D9",
                color: "#5B2448",
              },
            },
            onClick: (event, rowData) => pickProduct(rowData),
          }),
          () => ({
            size: "small",
            tooltip: "Product delete",
            icon: "delete",
            onClick: (event, rowData) => confirmDelete(rowData),
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
          actionsCellStyle: {
            backgroundColor: "#C6D2D9",
            color: "#5B2448",
            border: "solid 1px #004668",
          },
          headerStyle: {
            backgroundColor: "#C6D2D9",
            color: "#5B2448",
            border: "solid 1px #004668",
            fontSize: "large",
            fontWeight: "bold",
          },
        }}
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
