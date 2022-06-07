import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { urlBurguerApi } from "../../lib/RequestHandler";

export default function ProductsTable(){
 const [products, setProducts] = useState([]);

  const getData = async() => {
    await axios.get(urlBurguerApi+"/Products").then((response) => {
      const data = response.data;
      setProducts(data);
    });
  };
 
  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: "id",
      label: "Product",
    },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "price",
      label: "Price",
    },
  ];

  return (<MUIDataTable title={"Stock of products"} data={products} columns={columns} />);
};
