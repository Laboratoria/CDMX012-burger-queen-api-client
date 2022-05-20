import { ProductBox } from "../../components/ProductBox/ProductBox";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Orders.css'
import cart from '../../assets/Shopping Cart.png';
import beverageIcon from '../../assets/beverage.png'
import mealIcon from '../../assets/meal.png'

export const Orders = () => {

    const productsOrder = [];

    const navigate = useNavigate();

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
        const beverages = breakfast.filter(product => { return product.type === 'beverage' });
        const meal = breakfast.filter(product => { return product.type === 'meal' });

        return (
            <div className="breakfastMenu">
                <style>{`
                    .dinnerBtn {
                        background-color: white;
                        color: #B5A8A8;
                    }
                `}</style>
                <div className='beverages'>
                    <img src={beverageIcon} alt="beverage icon" className="beverageIcon"></img>
                    <div className='beveragesProducts'>
                        {beverages.map(products => <ProductBox product={products.name} array={productsOrder} key={products._id}></ProductBox>)}
                    </div>
                </div>
                <div className='meal'>
                    <img src={mealIcon} alt="meal icon" className="mealIcon"></img>
                    <div className='mealProducts'>
                        {meal.map((products) => <ProductBox product={products.name} array={productsOrder} key={products._id}></ProductBox>)}
                    </div>
                </div>
            </div>
        );
    }

    const dinnerMenu = () => {
        const dinner = products.filter(product => { return product.menu === 'dinner' });
        const beverages = dinner.filter(product => { return product.type === 'beverage' });
        const meal = dinner.filter(product => { return product.type === 'burger' || product.type === 'side dish'});
        
        return (
            <div className="dinnerMenu">
                <style>{`
                    .breakfastBtn {
                        background-color: white;
                        color: #B5A8A8;
                    }
                `}</style>
                <div className='beverages'>
                    <img src={beverageIcon} alt="beverage icon" className="beverageIcon"></img>
                    <div className='beveragesProducts'>
                        {beverages.map(products => <ProductBox product={products.name} array={productsOrder} key={products._id}></ProductBox>)}
                    </div>
                </div>
                <div className='meal'>
                    <img src={mealIcon} alt="meal icon" className="mealIcon"></img>
                    <div className='mealProducts'>
                        {meal.map(products => <ProductBox product={products.name} array={productsOrder} key={products._id}></ProductBox>)}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <h1>Orders</h1>
            
            <div className="table-input">
                <label htmlFor="table-num" className="table-label">Table: </label> 
                <input type="number" id="tableNum" name="table-num" min="1" max="30"></input>
            </div>

            <div className="menuButtons">
              <button className='breakfastBtn' onClick={() => setMenu('breakfast')}>Breakfast</button>
              <button className='dinnerBtn' onClick={() => setMenu('dinner')}>Dinner</button>
            </div>
            {menu === 'breakfast' ? breakfastMenu() : dinnerMenu()}
            
            <button className="verify-order-btn" onClick={() => navigate('/verify-order', { state: { order: productsOrder } })}>
                <img src={cart} alt="shopping cart icon" className="cart-icon"></img>
                Verify the order
            </button>

            <Footer />
        </>
    );
}