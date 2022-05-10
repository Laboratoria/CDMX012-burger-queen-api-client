export const Orders = ({logOut}) => 
{
    return (
        <>
            <h1>Orders</h1>
            <button onClick={()=>{logOut()}}>Salir</button>
        </>
    );
}