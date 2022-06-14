
import { tooltipClasses } from "@mui/material";
import React from "react";


import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"; 

export function DateOrder(props) {
    const {order, updateComanda,setIsDrawerOpenOrder,setSelectedOrder,deleteOrder, setTotal} = props
    const MySwal = withReactContent(Swal); 
const seeOrder = ()=>{
   setIsDrawerOpenOrder(true)
   setSelectedOrder(order)
   console.log(order)
}
const clickDeleteOrder = ()=>{
deleteOrder(order.id)
}
const dateTotal = () => {
    let suma = 0;
    for (let i = 0; i < order.products.length; i++) {
      let product = order.products[i];
      suma += product.price * product.qty;
    }
    setTotal(suma)
  }
  const confirmDelete = (id) => {
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
        clickDeleteOrder();
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
    return (
<section>  
<img 
        className="conteiner-img"
        src={require("../../assets/chef.png")}
        alt= "imgFood" />
 <p>Client:{order.client}</p>   
 <p>id:{order.id}</p>  
 <button className= "addproduct" onClick={seeOrder}>see order</button> 
 <button className= "deletorder" onClick={confirmDelete}>Delete Order</button> 



      {/* <p> Order:{order} </p>
<p>Quantity:{qty}</p> */}
    </section>
  );
}
