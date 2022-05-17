import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { create, act } from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  LoginPage from './Login';
import { AuthProvider } from '../../context/AutProvider';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe(('Test component Login'), () => {
  test('render component Login', () => {

    const {asFragment} = render(< AuthProvider><LoginPage /></AuthProvider>);
    const loginButton = screen.getByText('Login')
    expect(asFragment()).toMatchSnapshot();
    expect(loginButton).toBeDefined();
  });

  test('value when click on button cancel', () => {
    render(< AuthProvider><LoginPage /></AuthProvider> );
    const button = screen.getByText('Login');
    fireEvent.click(button);
    expect(LoginPage.handleSubmit).toHaveBeenCalledTimes(1);
  });
});