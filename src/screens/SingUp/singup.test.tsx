import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { SingUp } from '.';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
    navigate: jest.fn(),
  }),
}));

describe('SignUp Screen', () => {
  it('renders the SignUp screen', () => {
    const { getByTestId, getByText } = render(<SingUp />);

    expect(getByText('Criar conta')).toBeTruthy();
    expect(getByTestId('button-singup')).toBeTruthy();
    expect(getByTestId('button-goback')).toBeTruthy();
  });

  it('calls signUp when the form is submitted with valid data', () => {
    const { getByText, getByPlaceholderText } = render(<SingUp />);
    const emailInput = getByPlaceholderText('');
    const nameInput = getByPlaceholderText('');
    const passwordInput = getByPlaceholderText('');
    const confirmPasswordInput = getByPlaceholderText('');
    const createAccountButton = getByText('Criar conta');

    fireEvent.changeText(emailInput, 'joão@example.com');
    fireEvent.changeText(nameInput, 'João');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.changeText(confirmPasswordInput, 'password123');
    fireEvent.press(createAccountButton);
  });

  it('navigates to FAQ screen on "Criar conta" button press', async () => {
    const { getByTestId } = render(<SingUp />);
    const signUpButton = getByTestId('button-singup');

    fireEvent.press(signUpButton);

    expect(jest.fn()).toHaveBeenCalledWith('faq');
  });

  it('navigates back on "Voltar ao login" button press', () => {
    const { getByTestId } = render(<SingUp />);
    const goBackButton = getByTestId('button-goback');

    fireEvent.press(goBackButton);

    expect(jest.fn()).toHaveBeenCalled();
  });
});
