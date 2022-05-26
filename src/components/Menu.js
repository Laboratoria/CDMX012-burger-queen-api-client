// import { useNavigate } from "react-router-dom";
import { getMenu } from "../lib/RequestHandler";
import { useEffect, useState } from "react";
import CardsMenu from "./CardsMenu";
import "../css/Menu.css";
import Header from "./Header";
import AsideMenu from "./AsideMenu";

export default function Menu() {
  const [products, setProducts] = useState([]);

  const initState = async () => {
    const listProducts = await getMenu();

    setProducts(listProducts);
  };
  useEffect(() => {
    initState();
  }, []);

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
        <section>
          <button>Breakfast</button>
          <button>Dinner</button>
        </section>
        {products &&
          products.map((product) => {
            return (
              <CardsMenu
                key={product.id}
                imgProducts={product.image}
                name={product.name}
                price={product.price}
              ></CardsMenu>
            );
          })}
        <AsideMenu />
      </section>
    </main>
  );
}
