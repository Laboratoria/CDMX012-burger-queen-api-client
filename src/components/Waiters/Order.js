import { React, useState } from "react";

export default function Order(props) {
  const { name, price, qty, id, order, updateOrder, watchBtm } = props;
  const [stateQuantity, setStateQuantity] = useState(qty);

  const addProduct = (event) => {
    if (!order.hasOwnProperty("products")) {
      console.log("esta orden no tiene nada");
      updateOrder({
        products: [{ id: id, qty: 1, name: name }],
      });
    } else {
      let encontreProducto = false;
      for (let i = 0; i < order.products.length; i++) {
        if (order.products[i].id === id) {
          order.products[i].qty += 1;
          encontreProducto = true;
          setStateQuantity(order.products[i].qty);
        }
      }
      if (encontreProducto === false) {
        order.products.push({ id: id, qty: 1, name: name, price: price });
      }
    }

    updateOrder(order);
  };
  const subtractProducts = (event) => {
    console.log(id);
    for (let i = 0; i < order.products.length; i++) {
      if (order.products[i].id === id) {
        order.products[i].qty -= 1;
        setStateQuantity(order.products[i].qty);
        if (order.products[i].qty === 0) {
          order.products.splice(i, 1);
        }
        break;
      }
    }

    updateOrder(order);
  };
  return (
    <section className="boxOrders">
      <p className="order" id="p1">
        {name}
      </p>
      {watchBtm && (
        <button className="btnOrder" onClick={subtractProducts}>
          -
        </button>
      )}

      <p className="order" id="p2">
        cant. {stateQuantity}
      </p>
      {watchBtm && (
        <button className="btnOrder" onClick={addProduct}>
          +
        </button>
      )}
      <p className="order" id="p3">
        ${price}
      </p>
    </section>
  );
}
