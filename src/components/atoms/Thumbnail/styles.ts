import theme from '@theme/sizes';
import normalize from 'react-native-normalize';
import styled, { css } from 'styled-components/native';

type ResizeModeType = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';

export type CustomImageProps = {
  width?: number;
  height?: number;
  mr?: keyof typeof theme.SPACING;
  ml?: keyof typeof theme.SPACING;
  mt?: keyof typeof theme.SPACING;
  mb?: keyof typeof theme.SPACING;
  resizeMode?: ResizeModeType;
  position?: 'relative' | 'absolute';
  index?: number;
  accessibilityLabel?: string;
};

export const Container = styled.Image<CustomImageProps>`
  ${({
    theme,
    mt = 'NONE',
    ml = 'NONE',
    mb = 'NONE',
    mr = 'NONE',
    position,
    index,
    width,
    height,
  }) => css`
    width: ${width ? normalize(width) : 0}px;
    height: ${height ? normalize(height) : 0}px;
    margin-top: ${normalize(theme.SPACING[mt])}px;
    margin-left: ${normalize(theme.SPACING[ml])}px;
    margin-bottom: ${normalize(theme.SPACING[mb])}px;
    margin-right: ${normalize(theme.SPACING[mr])}px;
    position: ${position || 'relative'};
    z-index: ${index || 1};
  `}
`;
