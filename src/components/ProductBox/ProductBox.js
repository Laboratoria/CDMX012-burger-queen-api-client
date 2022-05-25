import React, { useState } from 'react';
import './ProductBox.css';

export const ProductBox = (props) => {
    const [quantity, setQuantity] = useState(0);

    /* CUANDO SE REGRESA, PROPS.ARRAY.PRODUCTS SI EXISTE, PERO CUANDO SE CREA LA PRIMERA VEZ, NO.
    ESA PODRIA SER LA CONDICIONAL.
    
    switch(props.array.products.length < 12){
        default:
            for(let i = 0; i < props.array.length; i++){
                if(props.product === props.array[i].product && props.array[i].hasOwnProperty('qty')){
                    setQuantity(props.array[i].qty);
                }
            }
        break;

        case false:
            for(let i = 0; i < props.array.length; i++){
                if(props.product === props.array[i].product && quantity !== props.array[i].qty){
                    props.array[i].qty = quantity;
                }
            }
        break;
    } */

    console.log('PRODUCTBOX', props.orderProducts);

    for (let i = 0; i < props.orderProducts.length; i++) {
        if (props.product === props.orderProducts[i].product && quantity !== props.orderProducts[i].qty) {
            props.orderProducts[i].qty = quantity;
        }
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
            <div>
                <p className='product'>{props.product}</p>
            </div>
            <div className='quantityContainer'>
                <button className='setQuantity' onClick={() =>
                    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1)
                }>-</button>
                <div className='quantity'>
                    <p>{quantity}</p>
                </div>
                <button className='setQuantity' onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
        </div >
    );
}