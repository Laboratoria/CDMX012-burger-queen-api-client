import { render, screen } from "@testing-library/react";
import { LoginError } from './errorMessage';

describe('Error message component', () => {
    it('Renders an error message for an non-existant account', () => {
        render(<LoginError errorMsg={'auth/user-not-found'}></LoginError>);
        //screen.debug();
        screen.getByText('This account does not exist.');
    });

    it('Renders an error message for an invalid email', () => {
        render(<LoginError errorMsg={'auth/invalid-email'}></LoginError>);
        screen.getByText('Invalid e-mail address, please try another one.');
    });

    it('Renders an error message for a wrong password input', () => {
        render(<LoginError errorMsg={'auth/wrong-password'}></LoginError>);
        screen.getByText('Invalid e-mail or password.');
    });

    it('Renders a general error message', () => {
        render(<LoginError errorMsg={'auth/internal-error'}></LoginError>);
        screen.getByText('An error has occurred, please try again.');
    });
})