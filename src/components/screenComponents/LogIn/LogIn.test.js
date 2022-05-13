import { fireEvent, render, screen } from "@testing-library/react";
import { LogIn } from './LogIn';

const signInMock = jest.fn();

describe('LogIn component renders correctly', () => {
    it('Renders inputs', () => {
        render(<LogIn signInWithEmail={signInMock}></LogIn>);
        const emailInput = screen.getByPlaceholderText('myemail@gmail.com');
        const passInput = screen.getByPlaceholderText('mypassword123');

        expect(emailInput).toBeInTheDocument();
        expect(passInput).toBeInTheDocument();
    });

    it('Renders button', () => {
        render(<LogIn signInWithEmail={signInMock}></LogIn>);
        screen.getByRole('button', {type: 'submit'});
        screen.getAllByText('Sign In');
    });

    it('Calls the sign in function when submitted', () => {
        render(<LogIn signInWithEmail={signInMock}></LogIn>);
        const button = screen.getByRole('button', {type: 'submit'});
        fireEvent.click(button);

        expect(signInMock).toHaveBeenCalled();
    });
})

