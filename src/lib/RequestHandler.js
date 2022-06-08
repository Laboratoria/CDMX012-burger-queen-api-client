<<<<<<< HEAD
 import axios from "axios";
 import React from 'react';
=======
import axios from "axios";

export const urlBurguerApi = "http://localhost:5000";
>>>>>>> 6ae6fefd02b8773f6b83b70b1de82258d19729fa

export const getMenu = async () => {
  const res = await axios.get(urlBurguerApi + "/products");
   return res.data;
}
export const getProducts = async () => {
  const res = await axios.get(urlBurguerApi + "/Stock");
   return res.data;
}
  export const addOrder= async(order,client)=>  {
 console.log(order)
 console.log(client)
 const arrayProducts=order.products.map(function(product){
  return {productId:product.id, qty:product.qty,name:product.name, img:product.image}
})
     const testOrder = { userId:"user", client:client, products:arrayProducts}
 
  console.log(testOrder)
     const res = await axios.post(urlBurguerApi+"/orders", testOrder);
 
    
    return res.data 
 }
 export const getOrder= async() =>{
  const res = await axios.get( urlBurguerApi+"/orders")
  console.log(res);
  return res.data;
}
 
 