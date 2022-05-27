export default function CardsMenu(props){
const {id, imgProducts, name, price, order, updateOrder}=props
const add=(event)=>{
    console.log(order)
    updateOrder({id: id})
  }
return (
    <section className="boxCards">
        <img 
        className="conteiner-img"
        src={imgProducts}
        alt= "imgFood"/>

        <p className= "name">{name}
        </p>
        <p className="price">${price}
        </p>
        <button className= "addproduct" onClick={add}>Add</button>
    </section>
)
}