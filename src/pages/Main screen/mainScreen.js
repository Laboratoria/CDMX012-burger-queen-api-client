import { Header } from '../../components/Header/header'
import { Footer } from '../../components/Footer/footer'
import { useNavigate } from "react-router-dom";
import './mainScreen.css'
import plus from '../../assets/plus.png'
import waiter from '../../assets/waiter.png'

export const Mainscreen = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <button className="btn-order" id="newOrder" onClick={() => navigate('/orders')}>
                New order
                <img src={plus} alt="img-plus" id="imgPlus" />
            </button>
            <button className="btn-order" id="activeOrders" onClick={() => navigate('/activeorders')}
            >
                Active orders
                <img src={waiter} alt="img-waiter" id="imgWaiter" />
            </button>
            <Footer />
        </>
    );
}