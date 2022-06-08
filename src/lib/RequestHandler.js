import axios from "axios";
import React from "react";

export const urlBurguerApi = "http://localhost:5000";

export const getMenu = async () => {
  const res = await axios.get(urlBurguerApi + "/Stock");
  //  console.log(res);

 

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
 
 

