export default function CardsMenu(props){
const {imgProducts, name, price}=props

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
        <button className= "addproduct" onClick={console.log("holiii lucy")}>ADD</button>
    </section>
)
}