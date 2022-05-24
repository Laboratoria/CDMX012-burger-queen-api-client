import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
        screen.getByRole('button', { type: 'submit' });
        screen.getAllByText('Sign In');
    });

    it('Calls the sign in function when submitted', () => {
        render(<LogIn signInWithEmail={signInMock}></LogIn>);
        signInMock.mockResolvedValue('response');
        const button = screen.getByRole('button', { type: 'submit' });
        fireEvent.click(button);

        expect(signInMock).toHaveBeenCalled();
    });

    it('Returns error message when submitted', async () => {
        render(<LogIn signInWithEmail={signInMock} />);

        const error = {
            code: 'auth/user-not-found',
        }
        signInMock.mockRejectedValue(error);

        const button = screen.getByRole('button', { type: 'submit' });
        fireEvent.click(button);

        await waitFor(() => {
            screen.getByText('This account does not exist, contact your manager for further information.');
        });
    });

    it('Renders inputs and changes their values', () => {
        render(<LogIn signInWithEmail={signInMock}></LogIn>);
        const emailInput = screen.getByPlaceholderText('myemail@gmail.com');
        //const passInput = screen.getByPlaceholderText('mypassword123');

        fireEvent.change(emailInput, {target: {value: 'perla@testing.com'}});
        expect(emailInput.value).toBe('perla@testing.com');
    });

})
