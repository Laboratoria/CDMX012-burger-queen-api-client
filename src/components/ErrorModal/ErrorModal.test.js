import { render, screen, fireEvent } from "@testing-library/react";
import { ErrorModal } from './ErrorModal';

describe('Error modal renders correctly', () => {
    document.body.innerHTML = `<div id='portal'></div>`;
    const open = true;
    const close = jest.fn();

    it('renders correctly', () => {
        render(<ErrorModal
            open={open}
            onClose={close}

        ></ErrorModal>)
    });

    it('does not render with the state is false', () => {
        const isOpen = false;

        render(<ErrorModal
            open={isOpen}
            onClose={close}
        ></ErrorModal>)
        const userEmail = screen.queryByText('Please verify your order :)');
        expect(userEmail).not.toBeInTheDocument();
    });

    it('calls the close function on click', () => {

        const isOpen = false;
        render(<ErrorModal
            open={isOpen}
            onClose={close}
        ></ErrorModal>)

        const closeBtn = screen.getByText('X');
        fireEvent.click(closeBtn);
        expect(close).toHaveBeenCalled();
    });
})
