

export function DateOrder(props) {
    const {order, updateComanda,setIsDrawerOpenOrder,setSelectedOrder,deleteOrder, setTotal} = props
    // const [isDrawerOpenOrder, setIsDrawerOpenOrder]= props
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
    return (
<section>  
<img 
        className="conteiner-img"
        src={require("../../assets/chef.png")}
        alt= "imgFood" />
 <p>Client:{order.client}</p>   
 <p>id:{order.id}</p>  
 <button className= "addproduct" onClick={seeOrder}>see order</button> 
 <button className= "deletorder" onClick={clickDeleteOrder}>Delete Order</button> 


{/* <p> Order:{order} </p>
<p>Quantity:{qty}</p> */}
</section>
    );
}