import beverageIcon from '../assets/beverage.png'
import mealIcon from '../assets/meal.png'
import { ProductBox } from "../components/ProductBox/ProductBox";

export const Menu = (props) => {
    const breakfast = props.products.filter(product => { return product.menu === props.type });
    const beverages = breakfast.filter(product => { return product.type === 'beverage' });
    const meal = breakfast.filter(product => { return product.type === 'meal' || product.type === 'side dish' || product.type === 'burger' });

    return (
        <div className= {props.name}>
            <style>{`
                .${props.btn} {
                    background-color: white;
                    color: #B5A8A8;
                }
            `}</style>
            <div className='beverages'>
                <img src={beverageIcon} alt="beverage icon" className="beverageIcon"></img>
                <div className='beveragesProducts'>
                    {beverages.map(products => <ProductBox product={products.name} array={props.productsOrder} price={products.price} key={products._id}></ProductBox>)}
                </div>
            </div>
            <div className='meal'>
                <img src={mealIcon} alt="meal icon" className="mealIcon"></img>
                <div className='mealProducts'>
                    {meal.map((products) => <ProductBox product={products.name} array={props.productsOrder} price={products.price} key={products._id}></ProductBox>)}
                </div>
            </div>
        </div>
    );
}