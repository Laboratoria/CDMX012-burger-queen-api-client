// import { useNavigate } from "react-router-dom";
import { getMenu } from "../lib/RequestHandler";
import { useEffect, useState } from "react";
import CardsMenu from "./CardsMenu";
import "../css/Menu.css";
import Header from "./Header";
import AsideMenu from "./asideMenu";

export default function Menu() {
  const [products, setProducts] = useState({});
  const [typeMenu, setTypeMenu] = useState("");
  const [orderMenu, setOrder] = useState({});


  useEffect(() => {

    typesProducts()
  }, [])
  const typesProducts = async () => {
    const products = await getMenu();
    let productsByTypes = {}
    for (let i = 0; i < products.length; i++) {

      let type = products[i].type;

      if (!Object.prototype.hasOwnProperty.call(productsByTypes, type)) {
        productsByTypes[type] = []
      }
      productsByTypes[type].push(products[i]);


    }
    console.log(productsByTypes)
    setProducts(productsByTypes)
  }
  const breakfast = () => {
    setTypeMenu("desayuno")
  }
  const dinner = () => {
    setTypeMenu("cena")
  }


  return (
    <main className="menu-container">
      <Header />
      <section>
        <section className="search">
          <img
            className="Search"
            alt="searchIcon"
            src={require("../assets/Search.png")}
          />
          <input type="text" placeholder="Search..." />
        </section>

  <div className="btnsAndMenu-container">
    <section className="btnsOfMenu">
      <button className="breakAndDinner" onClick={breakfast} >Breakfast</button>
      <button className="breakAndDinner" onClick={dinner}> Dinner</button>
    </section>
    <section className="cards-container">
      {products[typeMenu] &&
        products[typeMenu].map((product) => {
          return (
            <CardsMenu
              key={product.id}
              imgProducts={product.image}
              name={product.name}
              price={product.price}
              order={orderMenu}
              id={product.id}
              updateOrder={setOrder}
            ></CardsMenu>
          );
        })}
    </section>
    <AsideMenu />
  </div>
    </section >
  </main >
  );
}
        
        
    