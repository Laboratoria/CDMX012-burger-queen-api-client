import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Orders.css'
import cart from '../../assets/Shopping Cart.png';
import { Menu } from "../../components/Menus";
import { ErrorModal } from "../../components/ErrorModal/ErrorModal";

export const Orders = () => {

    let productsOrder = [];

    const location = useLocation();
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

    const [table, setTable] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleChangeTable = (e) => {
        setTable(e.target.value)
    }

    let order = { products: productsOrder, client: table };

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

    if(location.state !== null){
        const received = location.state.order;
        console.log(received)
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
                const reversedOrd = [...order.products].reverse();
                //console.log(reversedOrd);

                const filtered = reversedOrd.filter((value, index, self) => {
                    return self.findIndex(p => p.product === value.product) === index;
                });

                let productToVerifyOrder = filtered.filter(product => product.qty > 0)
                if (productToVerifyOrder.length > 0) {
                    navigate('/verify-order', {
                        state: {
                            order: {
                                products: productToVerifyOrder,
                                client: order.client
                            }
                        }
                    })
                } else {
                    // alert('here we will use a modal for error')
                    setIsOpen(true);
                }
            }}>
                <img src={cart} alt="shopping cart icon" className="cart-icon"></img>
                Verify the order
            </button>
            <ErrorModal open={isOpen} onClose={() => setIsOpen(false)} />
            <Footer />
        </>
    );
}