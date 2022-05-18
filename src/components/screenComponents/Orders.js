import { ProductBox } from "./ProductBox/ProductBox"
import data from '../../db.json';

export const Orders = ({logOut}) => 
{
    const breakfastMenu = data.products.filter(product => {return product.menu === 'breakfast'});
    const dinnerMenu = data.products.filter(product => {return product.menu === 'dinner'});

    return (
        <>
            <h1>Orders</h1>
            {breakfastMenu.map(product => <ProductBox product={product.name}></ProductBox>)}
            <button onClick={()=>{logOut()}}>Salir</button>
        </>
    );
}