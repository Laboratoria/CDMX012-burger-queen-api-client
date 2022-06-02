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
     const testOrder = { userId:"user", client:"alejandro", products:[{qty:1, productId:"papas"}]};
 
     const res = await axios.post(urlBurguerApi+"/orders", testOrder);
 
    
    return res.data 
 }
 
 
