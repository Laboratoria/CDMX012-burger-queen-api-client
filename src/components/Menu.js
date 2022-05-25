import { useNavigate } from "react-router-dom";
import { getMenu } from "../lib/RequestHandler";
import { useEffect, useState } from "react";
import '../css/Menu.css'
import MobileHeader from "./MobileHeader";

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
    <section className="menu-container">
      <MobileHeader/>
      <button onClick={returnLogin}>Sign Out </button>
    </section>
  );
}
