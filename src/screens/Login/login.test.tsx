import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Login } from '.';

jest.mock('@hooks/useAuth', () => ({
  useAuth: () => ({
    signIn: jest.fn(),
  }),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('Login Screen', () => {
  it('renders the Login screen', () => {
    const { getByTestId, getByText } = render(<Login />);

    expect(getByText('Bem vindo ao')).toBeTruthy();
    expect(getByTestId('button-singin')).toBeTruthy();
    expect(getByTestId('button-singup')).toBeTruthy();
  });

  it('calls signIn on form submission', async () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId('form-email');
    const passwordInput = getByTestId('form-password');
    const signInButton = getByTestId('button-singin');

    fireEvent.changeText(emailInput, 'example@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    fireEvent.press(signInButton);

    expect(jest.fn()).toHaveBeenCalled();
  });

  it('navigates to signup screen on "Criar uma conta" button press', () => {
    const { getByTestId } = render(<Login />);
    const signUpButton = getByTestId('button-singup');

    fireEvent.press(signUpButton);
    expect(jest.fn()).toHaveBeenCalled();
  });
});
