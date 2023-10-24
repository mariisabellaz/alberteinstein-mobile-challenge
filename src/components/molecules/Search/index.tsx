import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { VectorIcon } from '@components/atoms/VectorIcon';
import * as S from './styles';

type ButtonProps = TextInputProps & { testID?: string };

export function Search({ testID, ...rest }: ButtonProps) {
  const { COLORS } = useTheme();
  return (
    <S.Container testID={testID}>
      <VectorIcon mr="SM" name="search" size="SM" color="ICON" />
      <S.Input
        placeholder="Pesquise aqui"
        placeholderTextColor={COLORS.TEXT.SECONDARY}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        returnKeyType="search"
        {...rest}
      />
    </S.Container>
  );
}
