import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function DateOrder(props) {
  const {
    order,
    setIsDrawerOpenOrder,
    setSelectedOrder,
    deleteOrder,
    setTotal,
    setContador,
  } = props;
  const MySwal = withReactContent(Swal);
  const seeOrder = () => {
    setIsDrawerOpenOrder(true);
    setSelectedOrder(order);
    console.log(order);

    let suma = 0;
    for (let i = 0; i < order.products.length; i++) {
      let product = order.products[i];
      suma += product.price * product.qty;
    }
    setTotal(suma);

    setContador(0);
  };
  const clickDeleteOrder = () => {
    deleteOrder(order.id);
  };

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
        alt="imgFood"
      />
      <p className="name">Client:{order.client}</p>
      <p className="price">id:{order.id}</p>
      <div className="buttonsContainer">
        <button className="buttonOrder" onClick={seeOrder}>
          Watch
        </button>
        <button className="buttonOrder" onClick={confirmDelete}>
          Delete
        </button>
      </div>

      {/* <p> Order:{order} </p>
<p>Quantity:{qty}</p> */}
    </section>
  );
}
