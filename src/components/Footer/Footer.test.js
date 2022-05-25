import { render, screen } from "@testing-library/react";
import { Footer } from './footer';


describe('Footer renders correctly', () => {
    it('Renders footer', () => {
        render(<Footer />)
        screen.getByRole("contentinfo", { class: "footer" })
    })
    it('Has a paragraph element with description', () => {
        render(<Footer />)
        screen.getByText("Copyright © 2022 Burger Queen. All rights reserved.")
    })
})