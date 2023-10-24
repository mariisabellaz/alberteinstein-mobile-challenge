import { Dimensions, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

import { Typography } from '@components/atoms/Typography';
import { VectorIcon } from '@components/atoms/VectorIcon';

const { width } = Dimensions.get('window');

export type CustomItemProps = {
  isExpanded?: boolean;
};

export const Container = styled.View``;

export const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin: ${({ theme }) => theme.SPACING.SM}px 0;
`;

export const Wrapper = styled.View`
  width: ${width - 70}px;
`;

export const IconContainer = styled.View`
  flex: 1;
`;
export const Title = styled(Typography)<CustomItemProps>`
  ${({ theme, isExpanded }) =>
    isExpanded &&
    css`
      color: ${theme.COLORS.TEXT.LINK};
    `};
`;

export const Icon = styled(VectorIcon)<CustomItemProps>`
  ${({ theme, isExpanded }) =>
    isExpanded &&
    css`
      color: ${theme.COLORS.TEXT.LINK};
    `};
`;

export const ButtonIcon = styled(TouchableOpacity)``;
