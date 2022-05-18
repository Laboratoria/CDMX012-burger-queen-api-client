import React, { useState } from 'react';
import './ProductBox.css';

export const ProductBox = ({product}) => {
    const [quantity, setQuantity] = useState(0);
    return (
        <div className='productContainer'>
            <div>
                <p className='product'>{product}</p>
            </div>
            <div className='quantityContainer'>
                <button className='setQuantity' onClick={() => 
                    quantity === 0 ? quantity === 0 : setQuantity(quantity - 1)
                }>-</button>
                <div className='quantity'>
                    <p>{quantity}</p>
                </div>
                <button className='setQuantity' onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
        </div>
    );
}