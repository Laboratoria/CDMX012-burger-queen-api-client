/* eslint-disable react/jsx-no-comment-textnodes */
import "../css/Menu.css";

export default function AsideMenu() {
  return (
    <aside className="aside-container">
     <header>
         <img
            className="icons"
            alt="clockIcon"
            src={require("../assets/Clock.png")}
            />
         <p>Fecha del dia</p>
         <p>Hora</p>
         <p>Rol y nombre</p>
     </header>
     <section>
         <p>Order:</p>
         <p>Client name:</p>
     </section>
     <main className="allOrders">
         <p>Total:$...</p>
         <img
            className="icons"
            alt="editIcon"
            src={require("../assets/edit.png")}
            />
        <img
            className="icons"
            alt="deleteIcon"
            src={require("../assets/delete.png")}
            />
     </main>
     <button>Process Order</button>
    </aside>
  );
}
