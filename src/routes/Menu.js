import { useNavigate } from "react-router-dom";
import { getMenu } from "./RequestHandler";
import { useEffect, useState } from "react";
import CardsMenu from "./CardsMenu";

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
    
  }, [])

  return (
    <section>
      <h1>Pagina en Proceso</h1>
      <section>
        {
          products && products.map(product => {
            return (
              <CardsMenu key={product.id} imgProducts={product.image} name={product.name} price={product.price}></CardsMenu>

            )
          })
        }
      </section>
      <button onClick={returnLogin}>Sign Out </button>
    </section>
  );
}
