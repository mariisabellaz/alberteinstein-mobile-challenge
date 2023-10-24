import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.SPACING.MD}px;
`;

export const SearchContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
