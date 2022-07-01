import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login/Login';
import {BrowserRouter} from 'react-router-dom'

const MockLoginComponent = () =>{
    return(
        <BrowserRouter>
        <Login />
        </BrowserRouter>
    )
}

const mockedSets = jest.fn()

describe('Login functionality', () =>{

    describe('Functionality of the form elements', () =>{
        it('should render Email input element', async () => {
            render(<MockLoginComponent emailAndPass={[]} sets={mockedSets} />);
            const inputValue = screen.getByPlaceholderText(/Email:/i);
            expect(inputValue).toBeInTheDocument();
          });

          it('should be able to type in Email input', async () => {
            render(<MockLoginComponent emailAndPass={[]} sets={mockedSets} />);
            const inputValue = screen.getByPlaceholderText(/Email:/i);
            fireEvent.change(inputValue,{target: {value: 'sonia@gmail.com'}})
            expect(inputValue.value).toBe('sonia@gmail.com');
          });
    
          it('should render Password input element', async () => {
            render(<MockLoginComponent/>);
            const inputValue = screen.getByPlaceholderText(/Password:/i);
            expect(inputValue).toBeInTheDocument();
          });

          it('should be able to type in Password input', async () => {
            render(<MockLoginComponent emailAndPass={[]} sets={mockedSets} />);
            const inputValue = screen.getByPlaceholderText(/Password:/i);
            fireEvent.change(inputValue,{target: {value: '123456'}})
            expect(inputValue.value).toBe('123456');
          });
    })

    describe('Text elements are rendering correctly', () => {
        it('show me the text in the first paragraph', async () => {
            render(<MockLoginComponent/>);
            const pElement = screen.getByText(/You don’t have an account?/i);
            expect(pElement).toBeInTheDocument();
          });
          
          it('You don’t have an account? text is contained in a p', async () => {
              render(<MockLoginComponent/>);
              const pElement = screen.getByText(/You don’t have an account?/i);
           
              expect(pElement).toContainHTML('p');
            });
          
          it('show me the text in the second paragraph', async () => {
              render(<MockLoginComponent/>);
              const pElement = screen.getByText(/Register/i);
              expect(pElement).toBeInTheDocument();
            });
          
            it('Register text is contained in a p', async () => {
              render(<MockLoginComponent/>);
              const pElement = screen.getByText(/Register/i);
           
              expect(pElement).toContainHTML('p');
            });
    })
        
})


  
