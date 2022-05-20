import { ProductBox } from "../../components/ProductBox/ProductBox"
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useState, useEffect } from "react";
import './Orders.css'
import beverageIcon from '../../assets/beverage.png'
import mealIcon from '../../assets/meal.png'
export const Orders = () => {

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
                    {beverages.map(products => <ProductBox product={products.name} key={products._id}></ProductBox>)}
                </div>
                <div className='meal'>
                    <img src={mealIcon} alt="meal icon" className="mealIcon"></img>
                    {meal.map(products => <ProductBox product={products.name} key={products._id}></ProductBox>)}
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
                    {beverages.map(products => <ProductBox product={products.name} key={products._id}></ProductBox>)}
                </div>
                <div className='meal'>
                    <img src={mealIcon} alt="meal icon" className="mealIcon"></img>
                    {meal.map(products => <ProductBox product={products.name} key={products._id}></ProductBox>)}
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <h1>Orders</h1>
            <div className="menuButtons">
              <button className='breakfastBtn' onClick={() => setMenu('breakfast')}>Breakfast</button>
              <button className='dinnerBtn' onClick={() => setMenu('dinner')}>Dinner</button>
            </div>
            {menu === 'breakfast' ? breakfastMenu() : dinnerMenu()}
            <Footer />
        </>
    );
}