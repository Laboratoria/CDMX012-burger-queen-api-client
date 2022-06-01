 import axios from "axios";


 export const urlBurguerApi = "http://localhost:5000"

 export const getMenu = async() =>{
   const res = await axios.get( urlBurguerApi+"/products")
  //  console.log(res);
   return res.data;
 }

 

//  export const addOrder= async()=>  {
 
//      const order = {[
//        products:
//        name:"", price:0, id:0 };
 
//      const res = await axios.post(urlBurguerApi+"/orders");
 
     
//      console.log(res.data);
//  }
 
