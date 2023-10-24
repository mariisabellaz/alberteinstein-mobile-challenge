import React from 'react';
import { TextProps } from 'react-native';

import * as S from './styles';

type TypographyProps = Partial<S.CustomTextProps> &
  TextProps & { children?: React.ReactNode[] | undefined | string | number; testID?: string };

export const Typography: React.FC<TypographyProps> = ({
  children,
  appearance = 'paragraph',
  alignment,
  underline,
  letterSpacing,
  pd,
  mt,
  ml,
  mb,
  mr,
  index,
  position,
  numberOfLines,
  width,
  testID,
  ...props
}) => (
  <S.Label
    testID={testID}
    appearance={appearance}
    accessible={true}
    accessibilityRole="text"
    ellipsizeMode="tail"
    numberOfLines={numberOfLines}
    position={position}
    alignment={alignment}
    underline={underline}
    letterSpacing={letterSpacing}
    pd={pd}
    mt={mt}
    ml={ml}
    mb={mb}
    mr={mr}
    index={index}
    width={width}
    {...props}
  >
    {children}
  </S.Label>
);
