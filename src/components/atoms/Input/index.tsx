import React, { useState } from 'react';
import { TextInputProps, TouchableOpacity as TogglePasswordButton } from 'react-native';

import * as S from './styles';

type CommonInputProps = TextInputProps & { isPassword?: boolean; testID?: string };

export function Input({ isPassword = false, testID, ...rest }: CommonInputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  return (
    <S.Container testID={testID}>
      <S.Input secureTextEntry={isPassword ? showPassword : false} {...rest} />
      {isPassword && (
        <TogglePasswordButton onPress={() => setShowPassword(!showPassword)}>
          <S.Icon name={showPassword ? 'eye' : 'eye-off'} />
        </TogglePasswordButton>
      )}
    </S.Container>
  );
}
