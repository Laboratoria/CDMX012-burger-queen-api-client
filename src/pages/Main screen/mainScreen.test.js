import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Mainscreen } from "./mainScreen";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate, 
 }));

describe('MainScreen component renders', () => {
    it('Renders the buttons for the new order and the active orders', () => {
        render(
        <BrowserRouter>
            <Mainscreen></Mainscreen>
        </BrowserRouter>
        );

        screen.getByRole('button', {name: 'New order img-plus'}); //new order button
        screen.getByRole('button', {name: 'Active orders img-waiter'}); //active orders button
        screen.getByRole('banner'); //header
        screen.getByRole('contentinfo'); //footer
    });

    it('navigates to the orders page on click to the new order button', () => {
        render(
        <BrowserRouter>
            <Mainscreen></Mainscreen>
        </BrowserRouter>
        );

        const newOrder = screen.getByRole('button', {name: 'New order img-plus'}); //new order button
        fireEvent.click(newOrder);
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });

    it('navigates to the page of active orders on click to the active orders button', () => {
        render(
        <BrowserRouter>
            <Mainscreen></Mainscreen>
        </BrowserRouter>
        );

        const activeOrders = screen.getByRole('button', {name: 'Active orders img-waiter'}); //active orders button
        fireEvent.click(activeOrders);
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });
});
