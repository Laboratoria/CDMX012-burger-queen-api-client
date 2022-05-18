import { ProductBox } from "./ProductBox/ProductBox"
import data from '../../db.json';
import { Header } from "../staticComponents/header";
import { Footer } from "../staticComponents/footer";

export const Orders = () => 
{
    const breakfastMenu = data.products.filter(product => {return product.menu === 'breakfast'});
    const dinnerMenu = data.products.filter(product => {return product.menu === 'dinner'});

    return (
        <>
            <Header/>
            <h1>Orders</h1>
            {breakfastMenu.map(product => <ProductBox product={product.name}></ProductBox>)}
            <Footer/>
        </>
    );
}