import { ProductBox } from "../components/ProductBox/ProductBox"
import data from '../db.json';
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Orders = () => 
{
    const breakfastMenu = data.products.filter(product => {return product.menu === 'breakfast'});
    // eslint-disable-next-line
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