import { ProductBox } from "../../components/ProductBox/ProductBox";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useState, useEffect } from "react";
import cart from '../../assets/Shopping Cart.png';
import './Orders.css'
import { useNavigate } from "react-router-dom";

export const Orders = () => {
    const navigate = useNavigate();

    /* const dinnerMenu = data.products.filter(product => {return product.menu === 'dinner'}); */

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/products')
            .then((response) => {
                return response.json()
            })
            .then((products) => {
                setProducts(products)
            })
    }, [])

    const [menu, setMenu] = useState('breakfast');

    const breakfastMenu = () => {
        const breakfast = products.filter(product => { return product.menu === 'breakfast' });
        return (
            <>{breakfast.map(products => <ProductBox product={products.name} key={products._id}></ProductBox>)}</>

        );
    }

    /* const dinnerMenu = products.filter(product => { return product.menu === 'dinner' }); */

    return (
        <>
            <Header />
            <h1>Orders</h1>
            <label htmlFor="table-num" id="table-label">Table: </label> 
            <input type="number" id="tableNum" name="table-num" min="1" max="30"></input>
            <button onClick={() => setMenu('breakfast')}>Breakfast</button>
            <button onClick={() => setMenu('dinner')}>Dinner</button>
            {menu === 'breakfast' ? breakfastMenu() : null}
            {/* {breakfastMenu.map(products => <ProductBox product={products.name} key={products._id}></ProductBox>)} */}
            <button className="verify-order-btn" onClick={() => navigate('/verify-order')}>
                <img src={cart} alt="shopping cart icon" className="cart-icon"></img>
                Verify the order
            </button>
            <Footer />
        </>
    );
}