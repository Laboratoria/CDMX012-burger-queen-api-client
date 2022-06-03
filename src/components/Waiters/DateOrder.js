
export function DateOrder(props) {
    const {qty,client,name,img } = props

    return (
<section>  
<img 
        className="conteiner-img"
        src={img}
        alt= "imgFood"/>
 <p>Client:{client}</p>      
<p> Order:{name} </p>
<p>Quantity:{qty}</p>
</section>
    );
}