import { TouchableOpacityProps } from 'react-native';

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
      <S.Label appearance="button" type={appearance} testID="button-label">
        {label}
      </S.Label>
    </S.Containers>
  );
}
