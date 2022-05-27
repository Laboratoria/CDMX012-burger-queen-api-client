import { render, screen } from '@testing-library/react';
import {Menu} from './Menus';

describe('Menu component', () => {
    const products = [
        {
          "_id": "3",
          "name": "Natural juice",
          "price": 7,
          "image": "",
          "type": "beverage",
          "dateEntry": "16/05/22",
          "menu": "breakfast"
        }
    ]
    
    const orderProducts = [
        {
            product: "Natural juice",
            price: 7
        }
    ]

    it('renders beverage icon', () => {
        render(<Menu products={products}
        btn={'dinnerBtn'}
        type={'breakfast'}
        name={'breakfastMenu'}
        orderProducts={orderProducts}></Menu>)
        const beverage = screen.getByAltText('beverage icon');
        expect(beverage).toBeInTheDocument();
    })
    it('renders meal icon', () => {
        render(<Menu products={products}
        btn={'dinnerBtn'}
        type={'breakfast'}
        name={'breakfastMenu'}
        orderProducts={orderProducts}></Menu>)
        const meal = screen.getByAltText('meal icon');
        expect(meal).toBeInTheDocument();
    })
    it('renders prop product', () => {
        render(<Menu products={products}
        btn={'dinnerBtn'}
        type={'breakfast'}
        name={'breakfastMenu'}
        orderProducts={orderProducts}></Menu>)
        const juice = screen.getByText('Natural juice');
        expect(juice).toBeInTheDocument();
    })
})