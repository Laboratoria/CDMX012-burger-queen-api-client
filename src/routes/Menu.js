import { useNavigate } from "react-router-dom";
import { getMenu } from "./RequestHandler";
import { useEffect, useState } from "react";

export default function Menu() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const returnLogin = () => {
    navigate("/");
   
  };
  const initState = async() => {
  const listProducts = await  getMenu();
 setProducts(listProducts);
  }
  useEffect(() => {
    initState();
  }, [])
  return (
    <section>
      <h1>Pagina en Proceso</h1>
      <button onClick={returnLogin}>Sign Out </button>
    </section>
  );
}
