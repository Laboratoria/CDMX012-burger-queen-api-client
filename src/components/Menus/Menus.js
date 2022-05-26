import beverageIcon from '../../assets/beverage.png'
import mealIcon from '../../assets/meal.png'
import { ProductBox } from "../ProductBox/ProductBox";

export const Menu = (props) => {

    const type = props.products.filter(product => { return product.menu === props.type });
    const beverages = type.filter(product => { return product.type === 'beverage' });
    const meal = type.filter(product => { return product.type === 'meal' || product.type === 'side dish' || product.type === 'burger' });

    return (
        <section className= {props.name}>
            <style>{`
                .${props.btn} {
                    background-color: white;
                    color: #B5A8A8;
                }
            `}</style>
            <div className='beverages'>
                <img src={beverageIcon} alt="beverage icon" className="beverageIcon"></img>
                <div className='beveragesProducts'>
                    {beverages.map(products => <ProductBox product={products.name} orderProducts={props.orderProducts} key={products._id}></ProductBox>)}
                </div>
            </div>
            <div className='meal'>
                <img src={mealIcon} alt="meal icon" className="mealIcon"></img>
                <div className='mealProducts'>
                    {meal.map((products) => <ProductBox product={products.name} orderProducts={props.orderProducts} key={products._id}></ProductBox>)}
                </div>
            </div>
        </section>
    );
}