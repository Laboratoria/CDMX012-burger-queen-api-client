import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Orders = () => {
    return (
        <>
            <Header />
            <button className="btn"><i class="fa fa-home"></i>New order</button>
            <button className="btn"><i class="fa fa-home"></i>Active orders</button>
            <Footer />
        </>
    );
}
