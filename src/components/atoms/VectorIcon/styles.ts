import { Feather } from '@expo/vector-icons';
import { css } from 'styled-components';
import styled from 'styled-components/native';

import themeColors from '@theme/colors';
import themeFonts from '@theme/fonts';
import themeSizes from '@theme/sizes';

export type CustomIconProps = {
  alignment?: 'center' | 'left' | 'right';
  color?: keyof typeof themeColors.COLORS.TEXT;
  size?: keyof typeof themeFonts.FONTSIZE | string;
  mt?: keyof typeof themeSizes.SPACING;
  ml?: keyof typeof themeSizes.SPACING;
  mb?: keyof typeof themeSizes.SPACING;
  mr?: keyof typeof themeSizes.SPACING;
};

export const StyledIcon = styled(Feather)<CustomIconProps>`
  ${({
    theme,
    alignment,
    size = 'NONE',
    color = 'PRIMARY',
    mt = 'NONE',
    ml = 'NONE',
    mb = 'NONE',
    mr = 'NONE',
  }) => css`
    font-size: ${theme.FONTSIZE[size as keyof typeof themeFonts.FONTSIZE]}px;
    color: ${theme.COLORS.TEXT[color]};
    text-align: ${alignment || 'left'};

    margin-top: ${theme.SPACING[mt]}px;
    margin-left: ${theme.SPACING[ml]}px;
    margin-bottom: ${theme.SPACING[mb]}px;
    margin-right: ${theme.SPACING[mr]}px;
  `};
`;
