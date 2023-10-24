import { useTheme } from 'styled-components';
import * as S from './styles';

export function Loading() {
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <S.LoadIndicator color={COLORS.TEXT.LINK} />
    </S.Container>
  );
}
