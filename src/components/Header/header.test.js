import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './header';

describe('Header component', () => {
    it('renders the header', () => {
        render(<Header></Header>)
        const header = screen.getByRole('banner');
        expect(header).toBeInTheDocument();
    });
    it('renders the logo', () => {
        render(<Header></Header>);
        const logo = screen.getByAltText("burger queen logo");
        expect(logo).toBeInTheDocument();
    })
    it('renders the notification bell', () => {
        render(<Header></Header>);
        const bell = screen.getByAltText("notification icon");
        expect(bell).toBeInTheDocument();
    })
    it('renders the profile icon', () => {
        render(<Header></Header>);
        const profile = screen.getByAltText("profile icon");
        expect(profile).toBeInTheDocument();
    })
})