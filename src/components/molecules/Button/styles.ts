import { Dimensions, TouchableOpacity } from 'react-native';
import { FlattenInterpolation, css } from 'styled-components';
import styled, { DefaultTheme, ThemeProps } from 'styled-components/native';

const { width } = Dimensions.get('window');

type AppearanceType = 'primary' | 'secondary';

export type CustomButtonProps = {
  appearance: AppearanceType;
};

const styles: {
  [key in AppearanceType]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  primary: css`
    ${({ theme }) => css`
      background-color: ${theme.COLORS.BUTTON.BACKGROUND.PRIMARY};
    `};
  `,
  secondary: css`
    ${({ theme }) => css`
      background-color: ${theme.COLORS.BUTTON.BACKGROUND.SECONDARY};
      border: ${theme.COLORS.BORDER};
    `};
  `,
};

export const Containers = styled(TouchableOpacity)<CustomButtonProps>`
  ${({ appearance }) => styles[appearance]}

  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    width: ${width - theme.SPACING.XL}px;
    height: ${theme.HEIGHT.BUTTON}px;
    border-radius: ${theme.BORDER.RADIUS.BUTTON}px;
    margin: ${theme.SPACING.XS}px 0;
  `};
`;
