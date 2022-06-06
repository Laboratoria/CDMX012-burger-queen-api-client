 import axios from "axios";


 export const urlBurguerApi = "http://localhost:5000"

 export const getMenu = async() =>{
   const res = await axios.get( urlBurguerApi+"/products")
  //  console.log(res);
   return res.data;
 }

 

 export const addOrder= async(order,client,id)=>  {
 console.log(order)
 console.log(client)
 
     const testOrder = { userId:"user", client:"", products:[{qty:1, id:id}]};
  
     const res = await axios.post(urlBurguerApi+"/orders", testOrder);
 
    
    return res.data 
 }
 
 
