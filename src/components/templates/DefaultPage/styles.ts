import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { Typography } from '@components/atoms/Typography';

export type CustomTextProps = {
  padding: 'NONE' | 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'XXL';
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.PRIMARY};
`;

export const SafeArea = styled(SafeAreaView).attrs({
  contentContainerStyle: {
    paddingBottom: 100,
  },
})`
  flex: 1;
`;

export const Padding = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.SPACING.SM}px;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.DARK};
  padding: ${({ theme }) => theme.SPACING.MD}px;

  align-items: center;
`;

export const LabelWrapper = styled.View`
  padding: ${({ theme }) => theme.SPACING.XXL}px 0;
`;

export const Title = styled(Typography)`
  padding: ${({ theme }) => theme.SPACING.LG}px 0;
`;
