import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useNavigate, useLocation } from "react-router-dom";
import './VerifyOrder.css'
import arrow from '../../assets/flecha-izquierda.png'

export const VerifyOrder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.order)
/*     const order = {
        "_id": "1",
        "userId": "mesero1",
        "client": "5",
        "products": [
            {
                "qty": "2",
                "product": "American Coffee"
            },
            {
                "qty": "1",
                "product": "Ham and cheese sandwich"
            }
        ],
        "status": "",
        "dateEntry": "",
        "dateProcessed": ""
    }; */

    return (
        <div className="verify-order-container">
            <Header />

            <button className="go-back" onClick={() => navigate('/orders')}>
                <img src={arrow} alt="go back arrow" className="arrow"></img>
            </button>

            {/* <p className="table">Table: <span className="table-num">{order.client}</span></p> */}

            <h1 className="complete-order-title">Complete order</h1>

            <section className="order-summary">
                
                <p className="order-total"><span className="total">Total:</span> $10{/*SUMA TOTAL*/}</p>
                <button className="send-kitchen">Send to the kitchen</button>
            </section>

            <Footer />
        </div>
    )
}
