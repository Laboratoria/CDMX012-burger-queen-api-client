import { render, screen } from '@testing-library/react';
import { TableBox } from './tableBox';

describe('renders the table box correctly', () => {
    it('renders a table box with a Ready status', ()=>{
        const orderData = {
            "id": 1,
            "userId": "XdsSmqTD5ag8i3Fqw36MidgVwXG3",
            "table": "5",
            "status": "ready",
        }

        render(<TableBox tableObject={orderData} ></TableBox>);
        screen.getAllByText('Table: 5');
    });

    it('renders a table box with a Sent status', ()=>{
        const orderData = {
            "id": 2,
            "userId": "XdsSmqTD5ag8i3Fqw36MidgVwXG3",
            "table": "10",
            "status": "sent",
        }

        render(<TableBox tableObject={orderData} ></TableBox>);
        screen.getAllByText('Table: 10');
    });
});
