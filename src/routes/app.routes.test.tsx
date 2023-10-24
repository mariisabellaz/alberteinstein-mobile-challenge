import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';

import { AppRoutes } from './app.routes';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('AppRoutes', () => {
  it('should render the AppRoutes component', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );

    expect(getByTestId('faq-screen')).toBeTruthy();
    expect(getByTestId('login-screen')).toBeTruthy();
    expect(getByTestId('singup-screen')).toBeTruthy();
  });

  it('should navigate to the FAQ screen', () => {
    const { navigate } = useNavigation();

    render(
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );

    navigate('faq');
    expect(navigate).toHaveBeenCalledWith('faq');
  });

  it('should navigate to the Login screen', () => {
    const { navigate } = useNavigation();

    render(
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );

    navigate('login');
    expect(navigate).toHaveBeenCalledWith('login');
  });

  it('should navigate to the SignUp screen', () => {
    const { navigate } = useNavigation();

    render(
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );

    navigate('singup');
    expect(navigate).toHaveBeenCalledWith('singup');
  });
});
