 import axios from "axios";


 export const urlBurguerApi = "http://localhost:5000"

 export const getMenu = async() =>{
   const res = await axios.get( urlBurguerApi+"/products")
  //  console.log(res);
   return res.data;
 }

 

 export const addOrder= async(order,client)=>  {
 console.log(order)
 console.log(client)
 const arrayProducts=order.products.map(function(product){
  return {id:product.id, qty:product.qty}
})
     const testOrder = { userId:"user", client:client, products:arrayProducts}
 
  console.log(testOrder)
     const res = await axios.post(urlBurguerApi+"/orders", testOrder);
 
    
    return res.data 
 }
 
 
