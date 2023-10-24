import { TouchableOpacityProps } from 'react-native';

import { Typography } from '@components/atoms/Typography';
import * as S from './styles';

type ButtonProps = Partial<S.CustomButtonProps> & TouchableOpacityProps & { label: string };

export function Button({ appearance = 'primary', label, ...rest }: ButtonProps) {
  return (
    <S.Containers
      appearance={appearance}
      accessible={true}
      accessibilityLabel={label}
      accessibilityRole="button"
      testID="button"
      {...rest}
    >
      <Typography appearance="button" testID="button-label">
        {label}
      </Typography>
    </S.Containers>
  );
}
