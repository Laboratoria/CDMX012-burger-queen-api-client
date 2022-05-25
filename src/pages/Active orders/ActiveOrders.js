import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { TableBox } from "../../components/TableBox/tableBox"
import { useState, useEffect } from "react";
import './activeOrders.css'
import { currentUser } from "../../lib/firebaseAuth";


export const ActiveOrders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/orders')
            .then((response) => {
                return response.json()
            })
            .then((orders) => {
                setOrders(orders)
            })
    }, [])

    const getTableNumber = () => {
        const userId = currentUser().uid
        const tables = orders.filter(order => { return order.userId === userId });
        return (
            <>{tables.map(tables => <TableBox tableObject={tables} key={tables._id}></TableBox>)}</>
        );
    }

    return (
        <>
            <Header />
            <h1>Active orders</h1>
            {orders.length !== 0 ? getTableNumber() : null}
            <Footer />
        </>
    )
}