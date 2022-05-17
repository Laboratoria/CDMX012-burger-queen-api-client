import { ProductBox } from "./ProductBox/ProductBox";

export const Orders = ({logOut}) => 
{
    return (
        <>
            <h1>Orders</h1>
            <ProductBox product={'Un producto'}></ProductBox>
            <button onClick={()=>{logOut()}}>Salir</button>
        </>
    );
}