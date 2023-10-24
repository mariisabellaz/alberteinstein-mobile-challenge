import { Text } from 'react-native';
import normalize from 'react-native-normalize';
import { FlattenInterpolation, css } from 'styled-components';
import styled, { DefaultTheme, ThemeProps } from 'styled-components/native';

import theme from '@theme/sizes';

type AppearanceType =
  | 'heading'
  | 'caption'
  | 'paragraph'
  | 'title'
  | 'subtitle'
  | 'placeholder'
  | 'button'
  | 'helperText'
  | 'body'
  | 'error';

export type CustomTextProps = {
  appearance: AppearanceType;
  alignment?: 'center' | 'left' | 'right';
  mt?: keyof typeof theme.SPACING;
  ml?: keyof typeof theme.SPACING;
  mb?: keyof typeof theme.SPACING;
  mr?: keyof typeof theme.SPACING;
  pd?: keyof typeof theme.SPACING;
  position?: 'relative' | 'absolute';
  index?: number;
  lineThrough?: boolean;
  underline?: boolean;
  letterSpacing?: number;
  numberOfLines?: number;
  width?: number;
};

const styles: {
  [key in AppearanceType]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  heading: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.XL}px;
      color: ${theme.COLORS.TEXT.PRIMARY};
      font-family: ${theme.FONTFAMILY.BOLD};
      text-align: left;
    `};
  `,
  subtitle: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.SM}px;
      color: ${theme.COLORS.TEXT.SECONDARY};
      font-family: ${theme.FONTFAMILY.MEDIUM};
      padding: ${theme.SPACING.SM}px 0;
    `};
  `,
  caption: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.SM}px;
      color: ${theme.COLORS.TEXT.PRIMARY};
      font-family: ${theme.FONTFAMILY.ITALIC};
    `};
  `,
  placeholder: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.SM}px;
      color: ${theme.COLORS.TEXT.PRIMARY};
      font-family: ${theme.FONTFAMILY.REGULAR};
    `};
  `,
  paragraph: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.SM}px;
      color: ${theme.COLORS.TEXT.PRIMARY};
      font-family: ${theme.FONTFAMILY.REGULAR};
    `};
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.XS}px;
      color: ${theme.COLORS.TEXT.PRIMARY};
      font-family: ${theme.FONTFAMILY.BOLD};
    `};
  `,
  body: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.XS}px;
      color: ${theme.COLORS.TEXT.SECONDARY};
      font-family: ${theme.FONTFAMILY.REGULAR};
    `};
  `,
  button: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.SM}px;
      font-family: ${theme.FONTFAMILY.MEDIUM};
      color: ${theme.COLORS.BUTTON.TEXT.PRIMARY};
    `};
  `,
  helperText: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.XS}px;
      color: ${theme.COLORS.TEXT.SECONDARY};
      font-family: ${theme.FONTFAMILY.REGULAR};
    `};
  `,
  error: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.XS}px;
      color: ${theme.COLORS.TEXT.ERROR};
      font-family: ${theme.FONTFAMILY.REGULAR};
    `};
  `,
};

export const Label = styled(Text)<CustomTextProps>`
  ${({ appearance }) => styles[appearance]}

  ${({
    theme,
    alignment,
    underline,
    letterSpacing,
    pd = 'NONE',
    mt = 'NONE',
    ml = 'NONE',
    mb = 'NONE',
    mr = 'NONE',
    position,
    index,
    width,
  }) => css`
    text-align: ${alignment || 'left'};
    text-decoration: ${underline ? 'underline' : 'none'};
    letter-spacing: ${letterSpacing ? normalize(letterSpacing) : 0}px;

    padding: ${theme.SPACING[pd]}px;
    width: ${width ? `${normalize(width)}px` : 'auto'};

    margin-top: ${theme.SPACING[mt]}px;
    margin-left: ${theme.SPACING[ml]}px;
    margin-bottom: ${theme.SPACING[mb]}px;
    margin-right: ${theme.SPACING[mr]}px;

    position: ${position || 'relative'};
    z-index: ${index || 1};
  `};
`;
