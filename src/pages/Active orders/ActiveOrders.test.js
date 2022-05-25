import { render, screen } from "@testing-library/react";
import { ActiveOrders } from './ActiveOrders';

describe('Active orders screen', () => {
    it('Renders the whole component', () => {
        render(<ActiveOrders />);
    });
    it('Renders header component', () => {
        render(<ActiveOrders />);
        screen.getByRole("banner", { class: "header" })
    });
    it('Renders title', () => {
        render(<ActiveOrders />);
        screen.getByText("Active orders")
    });
    it('Renders footer', () => {
        render(<ActiveOrders />);
        screen.getByText("Copyright © 2022 Burger Queen. All rights reserved.")
    });
    it('Does not render tables', () => {
        render(<ActiveOrders />);
        const btnTable = screen.queryByText("Table: ")
        expect(btnTable).not.toBeInTheDocument()
    });
})
