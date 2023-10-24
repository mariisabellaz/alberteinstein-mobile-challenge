import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Typography } from '@components/atoms/Typography';
import { VectorIcon } from '@components/atoms/VectorIcon';
import * as S from './styles';

type HeaderProps = {
  screenName: string;
};

export function Header({ screenName }: HeaderProps) {
  const insets = useSafeAreaInsets();
  const { goBack } = useNavigation();

  return (
    <S.Container insets={insets} accessible={true} accessibilityRole="header">
      <S.ButtonIcon onPress={goBack}>
        <VectorIcon name="arrow-left" color="LINK" size="MD" />
        <Typography ml="SM">{screenName}</Typography>
      </S.ButtonIcon>
    </S.Container>
  );
}
