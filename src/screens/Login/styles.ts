import styled from 'styled-components/native';

import { Typography } from '@components/atoms/Typography';
import { CommonScreen } from '@components/templates/DefaultPage';

export const Container = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.SPACING.MD}px;
`;

export const ContainerForm = styled(CommonScreen)`
  margin-top: ${({ theme }) => theme.SPACING.MD}px;
`;

export const HelperText = styled(Typography)`
  font-family: ${({ theme }) => theme.FONTFAMILY.BOLD};
`;
