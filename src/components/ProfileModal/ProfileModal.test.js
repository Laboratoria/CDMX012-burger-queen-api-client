import { render, screen, fireEvent } from '@testing-library/react';
import ProfileModal from './ProfileModal';

describe('renders the profile modal', () => {
    document.body.innerHTML = `<div id='portal'></div>`;
    const isOpen = true;
    const close = jest.fn();
    const user = {
        email : 'perla_gda@hotmail.com'
    };
    const logOut = jest.fn();

    it('renders correctly', ()=>{
        render(<ProfileModal 
            open={isOpen} 
            onClose={close} 
            user={user} 
            logOut={logOut}  
            ></ProfileModal>)
        
        screen.getByText('perla_gda@hotmail.com');
    }); 

    it('does not render with the state is false', ()=>{
        const isOpen = false;

        render(<ProfileModal 
            open={isOpen} 
            onClose={close} 
            user={user} 
            logOut={logOut}  
            ></ProfileModal>)
        
        const userEmail = screen.queryByText('perla_gda@hotmail.com');
        expect(userEmail).not.toBeInTheDocument();
    }); 

    it('calls the close function on click', ()=>{
        render(<ProfileModal 
            open={isOpen} 
            onClose={close} 
            user={user} 
            logOut={logOut}  
            ></ProfileModal>)
        
        const closeBtn = screen.getByText('X');
        fireEvent.click(closeBtn);
        expect(close).toHaveBeenCalled();
    }); 

    it('calls the logout function on click', ()=>{
        render(<ProfileModal 
            open={isOpen} 
            onClose={close} 
            user={user} 
            logOut={logOut}  
            ></ProfileModal>)
        
        const logoutBtn = screen.getByRole('button', { name: 'Log out logout-icon' });
        fireEvent.click(logoutBtn);
        expect(logOut).toHaveBeenCalled();
    }); 

});
