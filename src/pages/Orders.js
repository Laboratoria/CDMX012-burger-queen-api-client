import { ProductBox } from "../components/ProductBox/ProductBox"
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useState, useEffect } from "react";
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

    const breakfastMenu = () => {
        const menu = products.filter(product => { return product.menu === 'breakfast' });
        console.log(menu);
        return (
            <>{menu.map(products => <ProductBox product={products.name} key={products._id}></ProductBox>)}</>
        );
    }

    const dinnerMenu = products.filter(product => { return product.menu === 'dinner' });

    return (
        <>
            <Header />
            <h1>Orders</h1>
            <button onClick={breakfastMenu}>Breakfast</button>
            <button>Dinner</button>
            {/* {breakfastMenu.map(products => <ProductBox product={products.name} key={products._id}></ProductBox>)} */}
            <Footer />
        </>
    );
}