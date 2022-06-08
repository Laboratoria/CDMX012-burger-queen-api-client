import { tooltipClasses } from "@mui/material";

export function DateOrder(props) {
    const {order, updateComanda } = props
const edit = ()=>{
    
}
    return (
<section>  
<img 
        className="conteiner-img"
        src={require("../../assets/chef.png")}
        alt= "imgFood"/>
 <p>Client:{order.client}</p>   
 <p>id:{order.id}</p>  
 <button className= "addproduct" onClick={edit}>see order</button> 

{/* <p> Order:{order} </p>
<p>Quantity:{qty}</p> */}
</section>
    );
}