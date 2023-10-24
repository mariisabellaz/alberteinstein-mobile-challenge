import { TextInput } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => css`
    height: ${theme.HEIGHT.INPUT}px;
    padding: 0 ${theme.SPACING.SM}px;
    border-radius: ${theme.BORDER.RADIUS.INPUT}px;
    border-color: ${theme.COLORS.BORDER};
    border-width: ${theme.BORDER.INPUT}px;
  `}
`;

export const Input = styled(TextInput)`
  flex: 1;

  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.FONTSIZE.SM}px;
    font-family: ${theme.FONTFAMILY.REGULAR};
    color: ${theme.COLORS.TEXT.PRIMARY};
  `}
`;
