 import axios from "axios";


 const urlBurguerApi = "http://localhost:4000"

 export const getMenu = async() =>{
   const res = await axios.get( urlBurguerApi+"/products")
   console.log(res);
   return res.data;
 }

