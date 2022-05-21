import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Orders.css'
import cart from '../../assets/Shopping Cart.png';
import { Menu } from "../../components/Menus";

export const Orders = () => {

    const productsOrder = [];

    const navigate = useNavigate();

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/products')
            .then((response) => {
                return response.json()
            })
            .then((products) => {
                setProducts(products)
            })
    }, [])

    const [menu, setMenu] = useState('breakfast');

    /*     const initialValues = '';

    const [values, setValues] = useState(initialValues); */
    const [table, setTable] = useState('');


/*     const handleVerify = () => {
        setValues(table);
    } */

    const handleChangeTable = (e) => {
        setTable(e.target.value)
    }

/*     useEffect(() => {
        console.log(values)
    }, [values.table, values.products]) */

    const order = {products: productsOrder, client: table};

    const breakfastMenu = () => {
        return (
            <Menu products={products} btn={'dinnerBtn'} productsOrder={productsOrder} type={'breakfast'} name={'breakfastMenu'}>
            </Menu>
        );
    }

    const dinnerMenu = () => {
        return (
            <Menu products={products} btn={'breakfastBtn'} productsOrder={productsOrder} type={'dinner'} name={'dinnerMenu'}>
            </Menu>
        );
    }

    return (
        <>
            <Header />
            <h1>Orders</h1>

            <div className="table-input">
                <label htmlFor="table-num" className="table-label">Table: </label> 
                <input type="number" id="tableNum" name="table-num" min="1" max="30" onChange={handleChangeTable}></input>
            </div>

            <div className="menuButtons">
                <button className='breakfastBtn' onClick={() => setMenu('breakfast')}>Breakfast</button>
                <button className='dinnerBtn' onClick={() => setMenu('dinner')}>Dinner</button>
            </div>
            {menu === 'breakfast' ? breakfastMenu() : dinnerMenu()}
            
            <button className="verify-order-btn" onClick={() => {
                navigate('/verify-order', { state: { order: order } })
            }}>
                <img src={cart} alt="shopping cart icon" className="cart-icon"></img>
                Verify the order
            </button>

            <Footer />
        </>
    );
}