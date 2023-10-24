import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { FAQProvider } from '@context/faqContext';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND.PRIMARY }}>
      <NavigationContainer>
        <FAQProvider>
          <AppRoutes />
        </FAQProvider>
      </NavigationContainer>
    </View>
  );
}
