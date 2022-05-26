import { useNavigate } from "react-router-dom";
import { getMenu } from "../lib/RequestHandler";
import { Fragment, useEffect, useState } from "react";
import CardsMenu from "./CardsMenu";
import '../css/Menu.css'
import MobileHeader from "./MobileHeader";


export default function Menu() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const returnLogin = () => {
    navigate("/");

  };
  const initState = async () => {
    const listProducts = await getMenu();
    setProducts(listProducts);

  }
  useEffect(() => {
    initState();
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
  }

  
  return (

    <section className="menu-container">
      <MobileHeader />

      <section>
        <h1>Pagina en Proceso</h1>

        {
          products && products.map(product => {
            return (
              <CardsMenu key={product.id} imgProducts={product.image} name={product.name} price={product.price}></CardsMenu>

            )
          })
        }

        <button onClick={returnLogin}>Sign Out </button>
      </section>
    </section>

  );
}
