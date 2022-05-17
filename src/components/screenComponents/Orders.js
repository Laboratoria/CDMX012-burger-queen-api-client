import { Header } from "../staticComponents/header";

export const Orders = ({logOut}) => 
{
    return (
        <>
            <Header/>
            <h1>Orders</h1>
            <button onClick={()=>{logOut()}}>Salir</button>
        </>
    );
}