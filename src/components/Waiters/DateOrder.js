

export function DateOrder(props) {
    const {order, updateComanda,setIsDrawerOpenOrder,setSelectedOrder } = props
    // const [isDrawerOpenOrder, setIsDrawerOpenOrder]= props
const edit = ()=>{
   setIsDrawerOpenOrder(true)
   setSelectedOrder(order)
   console.log(order)
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