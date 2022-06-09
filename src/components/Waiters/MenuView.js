// import { useNavigate } from "react-router-dom";

import { getMenu,getOrder } from "../../lib/RequestHandler";
import React,{ useEffect, useState } from "react";

import CardsMenu from "./CardsMenu";
import "../../css/Menu.css";
import Header from "../Header";
import AsideMenu from "./asideMenu";
import { DateOrder } from "./DateOrder";
import AsideOrders from "./AsideOrders";
export default function Menu() {
  const [products, setProducts] = useState({});
  const [typeMenu, setTypeMenu] = useState("");
  const [orderMenu, setOrder] = useState({});
  const [changeView, setChangeView] = useState(true);
  const [comandasOrders, setComandasOrders] = useState([]);
  const [isDrawerOpenOrder, setIsDrawerOpenOrder] = useState(false);
  const[selectedOder, setSelectedOrder] = useState({});

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
    setChangeView(true);
  }
  const dinner = () => {
    setTypeMenu("cena")
    setChangeView(true);
  }
  const ordersComanda = async()=>{
    const arrayOrders= await getOrder();
    console.log(arrayOrders)
    setChangeView(false);
    setComandasOrders(arrayOrders)
      // setOrder(arrayOrders);
   
  }

  return (
    <main className="menu-container">
      <Header
       updateComandaOrders={ordersComanda}
       
       />
      <section>
        <section className="search">
          <img
            className="Search"
            alt="searchIcon"
            src={require("../../assets/Search.png")}
          />
          <input type="text" placeholder="Search..." />
        </section>

  <div className="btnsAndMenu-container">
    <section className="btnsOfMenu">
      <button className="breakAndDinner" onClick={breakfast} >Breakfast</button>
      <button className="breakAndDinner" onClick={dinner}> Dinner</button>
    </section>
    <section className="cards-container">
      
     { 
     changeView &&
     products[typeMenu] &&
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
        })
      }
     { 
     !changeView &&
        comandasOrders.map((order) => {
          return (
            <DateOrder
              key={order.id}
              order={order}
              // order={order.products}
              updateComanda={setComandasOrders}
              setIsDrawerOpenOrder= {setIsDrawerOpenOrder}
              setSelectedOrder = {setSelectedOrder}
       ></DateOrder>
        );
      })
      }
    </section>
    <AsideMenu
    order={orderMenu} 
    updateOrder={setOrder}
    />
    <AsideOrders
    isDrawerOpenOrder= {isDrawerOpenOrder}
    setIsDrawerOpenOrder= {setIsDrawerOpenOrder}
    selectedOder={selectedOder}
    />
  </div>
    </section >
  </main >
  );
}
        
        
    