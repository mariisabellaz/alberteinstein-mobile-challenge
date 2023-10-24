import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type CustomHeaderProps = {
  insets: any;
};

export const Container = styled.View<CustomHeaderProps>`
  width: 100%;

  ${({ theme, insets }) => css`
    background-color: ${theme.COLORS.BACKGROUND.PRIMARY};
    border-bottom-color: ${theme.COLORS.BORDER};
    border-bottom-width: ${theme.BORDER.HEADER}px;

    margin-top: ${insets}px;
    margin-bottom: ${theme.SPACING.XL}px;
    padding: ${theme.SPACING.SM}px ${theme.SPACING.MD}px ${theme.SPACING.LG}px;
  `};
`;

export const ButtonIcon = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;
