export default function Order(props) {
    const { name, price,qty } = props

    return (
        <section className="boxOrders">
 <img
              className="icons"
              alt="editIcon"
              src={require("../../assets/edit.png")}/>
            <p className="order">{name}
            </p>
            <p className="order">{qty}
            </p>
            <p className="order">${price}
            </p>
            <img
              className="icon"
              alt="deleteIcon"
              src={require("../../assets/delete.png")}
            />
        </section>
    )
}

