import React, { useState } from 'react';
import './ProductBox.css';

export const ProductBox = (props) => {
    const [quantity, setQuantity] = useState(0);

    for(let i = 0; i < props.array.length; i++){
        if(props.product === props.array[i].product && quantity !== props.array[i].qty){
            props.array[i].qty = quantity;
        }
    }

/*     for(let i = 0; i < props.array.length; i++){
        if(props.product === props.array[i].product && props.array[i].hasOwnProperty('qty')){
            setQuantity(props.array[i].qty);
        } else if(props.product === props.array[i].product && quantity !== props.array[i].qty){
            props.array[i].qty = quantity;
        } 
    } */

    console.log('PRODUCTBOX', props.array);

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