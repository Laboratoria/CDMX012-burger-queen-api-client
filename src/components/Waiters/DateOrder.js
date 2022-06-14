import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"; 
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';

export function DateOrder(props) {
    const {order, updateComanda,setIsDrawerOpenOrder,setSelectedOrder,deleteOrder, setTotal,btonWatch} = props
    const MySwal = withReactContent(Swal); 
const seeOrder = ()=>{
   setIsDrawerOpenOrder(true)
   setSelectedOrder(order)
   console.log(order)
   btonWatch(false)
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
<section className="boxCards">  
<img 
        className="conteiner-img"
        src={require("../../assets/chef.png")}
        alt= "imgFood" />
 <p className="name">Client:{order.client}</p>   
 <p className="price">id:{order.id}</p>  
 <div className="buttonsContainer">

 <button className= "buttonOrder" onClick={seeOrder}>Watch</button> 
 <button className= "buttonOrder" onClick={confirmDelete}>Delete</button> 
  </div>



{/* <p> Order:{order} </p>
<p>Quantity:{qty}</p> */}
</section>
    );
}