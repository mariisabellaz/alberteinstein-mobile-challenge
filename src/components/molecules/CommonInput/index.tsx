import { TextInputProps } from 'react-native';

import { Input } from '@components/atoms/Input';
import * as S from './styles';

type CustomProps = {
  caption: string;
  error?: string;
  isPassword?: boolean;
};

type CommonInputProps = Partial<CustomProps> & TextInputProps;

export function CommonInput({ caption = '', error, isPassword, ...props }: CommonInputProps) {
  return (
    <S.Container testID="input-container">
      <S.Caption appearance="caption" nativeID="formLabel" testID="input-caption">
        {caption}
      </S.Caption>
      <Input {...props} isPassword={isPassword} testID="input" />
      {error && (
        <S.ErrorLabel appearance="error" testID="input-error">
          {error}
        </S.ErrorLabel>
      )}
    </S.Container>
  );
}
