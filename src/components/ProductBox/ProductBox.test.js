import { ProductBox } from "./ProductBox";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ProductBox component', () => {
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
    
    it('button "+" increments product quantity', async () => {
        render(<ProductBox products={products}
        product={'Natural juice'}
        key={'3'}
        orderProducts={orderProducts}></ProductBox>)
        const button = screen.getByText('+');
        const zero = screen.getByText('0');
        await userEvent.click(button);
        const quantity = screen.getByText('1')
        expect(zero).toBe(quantity);
    })
    it('button "-" does not subtract when quantity is zero', async () => {
        render(<ProductBox products={products}
        product={'Natural juice'}
        key={'3'}
        orderProducts={orderProducts}></ProductBox>)
        const button = screen.getByText('-');
        await userEvent.click(button);
        expect(screen.getByText('0')).toBeInTheDocument();
    })
    it('button "-" subtracts quantity', async () => {
        render(<ProductBox products={products}
        product={'Natural juice'}
        key={'3'}
        orderProducts={orderProducts}></ProductBox>)
        const buttonPlus = screen.getByText('+');
        const buttonMinus = screen.getByText('-');
        await userEvent.click(buttonPlus);
        await userEvent.click(buttonMinus);
        expect(screen.getByText('0')).toBeInTheDocument();
    })
})