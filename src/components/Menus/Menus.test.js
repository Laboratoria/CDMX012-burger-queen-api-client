import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Menu} from './Menus';
import {products, orderProducts} from './MenusTests';

describe('Menu component', () => {
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
    it('button "+" increments product quantity', async () => {
        render(<Menu products={products}
        btn={'dinnerBtn'}
        type={'breakfast'}
        name={'breakfastMenu'}
        orderProducts={orderProducts}></Menu>)
        const button = screen.getByText('+');
        const zero = screen.getByText('0');
        await userEvent.click(button);
        const quantity = screen.getByText('1')
        expect(zero).toBe(quantity);
    })
    it('button "-" does not subtract when quantity is zero', async () => {
        render(<Menu products={products}
        btn={'dinnerBtn'}
        type={'breakfast'}
        name={'breakfastMenu'}
        orderProducts={orderProducts}></Menu>)
        const button = screen.getByText('-');
        await userEvent.click(button);
        expect(screen.getByText('0')).toBeInTheDocument();
    })
    it('button "-" subtracts quantity', async () => {
        render(<Menu products={products}
        btn={'dinnerBtn'}
        type={'breakfast'}
        name={'breakfastMenu'}
        orderProducts={orderProducts}></Menu>)
        const buttonPlus = screen.getByText('+');
        const buttonMinus = screen.getByText('-');
        await userEvent.click(buttonPlus);
        await userEvent.click(buttonMinus);
        expect(screen.getByText('0')).toBeInTheDocument();
    })
})