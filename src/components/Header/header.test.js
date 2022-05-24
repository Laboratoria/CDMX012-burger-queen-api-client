import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Header component', () => {
    it('renders the content', () => {
        render(<Header></Header>)
    });
    it('sets isOpen to true when clicked on profile icon', () => {
        render(<Header></Header>)
        const profileIcon = screen.getByAltText('profile icon');
/*         screen.debug(); */
    })
})