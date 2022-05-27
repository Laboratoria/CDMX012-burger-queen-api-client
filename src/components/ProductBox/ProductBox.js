import React, { useState } from 'react';
import './ProductBox.css';

export const ProductBox = (props) => {
    const [quantity, setQuantity] = useState(0);

/*     switch(props.orderProducts.hasOwnProperty('products')){
        default:
            for(let i = 0; i < props.orderProducts.products.length; i++){
                if(props.product === props.orderProducts.products[i].product && props.orderProducts.products[i].hasOwnProperty('qty')){
                    setQuantity(props.orderProducts.products[i].qty);
                }
            }
        break;

        case false:
            for(let i = 0; i < props.orderProducts.length; i++){
                if(props.product === props.orderProducts[i].product && quantity !== props.orderProducts[i].qty){
                    props.orderProducts[i].qty = quantity;
                }
            }
        break;
    } */

    console.log('PRODUCTBOX', props.orderProducts);

    const changeProductQuantity = (newQuantity) => {
        for(let i = 0; i < props.orderProducts.length; i++){
            if(props.product === props.orderProducts[i].product && newQuantity !== props.orderProducts[i].qty){
                props.orderProducts[i].qty = newQuantity;
            }
        }
    }

    const increment = () => {
        const newQuantity = quantity + 1;
        console.log(newQuantity);
        setQuantity(newQuantity);
        changeProductQuantity(newQuantity);
    }

    const decrement = () => {
        const newQuantity = quantity === 0 ? 0 : quantity - 1;
        setQuantity(newQuantity);
        changeProductQuantity(newQuantity);
    }

/*     for(let i = 0; i < props.array.length; i++){
        if(props.product === props.array[i].product && props.array[i].hasOwnProperty('qty')){
            setQuantity(props.array[i].qty);
        } else if(props.product === props.array[i].product && quantity !== props.array[i].qty){
            props.array[i].qty = quantity;
        } 
    } */

    return (
        <div className='productContainer'>
            <p className='product'>{props.product}</p>
            <div className='quantityContainer'>
                <button className='setQuantity' onClick={() => decrement()}>-</button>
                <div className='quantity'>
                    <p>{quantity}</p>
                </div>
                <button className='setQuantity' onClick={() => increment()}>+</button>
            </div>
        </div >
    );
}