import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { TableBox } from '../components/TableBox/tableBox'

export const ActiveOrders = () => {
    return (
        <>
            <Header />
            <h1>Active orders</h1>
            <TableBox />
            <Footer />
        </>
    );
}

