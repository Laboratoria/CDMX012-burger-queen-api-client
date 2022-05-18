import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";
import data from '../../db.json';
import './VerifyOrder.css'

export const VerifyOrder = (/* {order} */) => {
    const navigate = useNavigate();

    const order = data.orders[0];

    return (
        <div className="verify-order-container">
            <Header/>

            <button className="go-back" onClick={() => navigate('/')}>←</button>

            <p className="table">Table: <span className="table-num">{order.client}</span></p>

            <h1 className="complete-order-title">Complete order</h1>

            <section className="order-summary">
                <div className="summary-grid">
                    {order.products.map((product, index) => {
                        return <div key={index}>
                            <p className="qty"> ( {product.qty} ) </p>
                            <p className="prod-name"> {product.product} {/*PRECIO*/}</p>
                            </div>
                    })}
                    <p className="order-total">Total: $10{/*SUMA TOTAL*/}</p>

                    <button className="send-kitchen">Send to the kitchen</button>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
