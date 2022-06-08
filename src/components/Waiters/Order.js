import React from "react";

export default function Order(props) {
    const { name, price,qty } = props

    return (
        <section className="boxOrders">
 <img
              className="icons"
              alt="editIcon"
              src={require("../../assets/edit.png")}/>
            <p className="nameOrder">{name}
            </p>
            <p className="qtyOrder">{qty}
            </p>
            <p className="priceOrder">${price}
            </p>
            <img
              className="icons"
              alt="deleteIcon"
              src={require("../../assets/delete.png")}
            />
        </section>
    )
}

