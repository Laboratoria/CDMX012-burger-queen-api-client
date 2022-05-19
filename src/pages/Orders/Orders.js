import { ProductBox } from "../../components/ProductBox/ProductBox"
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useState, useEffect } from "react";
import './Orders.css'
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
        return (
            <>
                <style>{`
                    .dinnerBtn {
                        background-color: white;
                        color: #B5A8A8;
                    }
                `}</style>
                {breakfast.map(products => <ProductBox product={products.name} key={products._id}></ProductBox>)}
            </>
        );
    }

    const dinnerMenu = () => {
        const dinner = products.filter(product => { return product._id === 1 });
        return (
            <>
                <style>{`
                    .breakfastBtn {
                        background-color: white;
                        color: #B5A8A8;
                    }
                `}</style>
                {dinner.map(products => <ProductBox product={products.name} key={products._id}></ProductBox>)}
            </>

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