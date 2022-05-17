import { Header } from "../staticComponents/header";
import { Footer } from "../staticComponents/footer";

export const Orders = ({logOut}) => 
{
    return (
        <>
            <Header/>
            <h1>Orders</h1>
            <button onClick={()=>{logOut()}}>Salir</button>
            <Footer/>
        </>
    );
}