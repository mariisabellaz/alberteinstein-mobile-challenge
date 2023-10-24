import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAuth } from '@hooks/useAuth';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

import { schema } from './login.yup';

type FormData = yup.InferType<typeof schema>;

export function Login() {
  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await signIn(data);
  };

  const goToSingUp = () => {
    navigate('singup');
  };

  return (
    <CommonScreen.Heading
      title={`Bem vindo ao \nportal do usuário`}
      subtitle="Digite seus dados de acesso"
    >
      <Form
        caption="E-mail"
        name="email"
        control={control}
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        error={errors?.email?.message}
      />
      <Form
        caption="Senha"
        name="password"
        control={control}
        autoCorrect={false}
        autoCapitalize="none"
        autoComplete="off"
        error={errors?.password?.message}
      />
      <S.HelperText testID="helper-text">Não possui conta?</S.HelperText>

      <Button
        label="Entrar"
        onPress={handleSubmit(onSubmit)}
        accessibilityHint="Faz login e navega para a próxima tela"
        testID="button-singin"
      />
      <Button
        label="Criar uma conta"
        appearance="secondary"
        onPress={goToSingUp}
        accessibilityHint="Navega para a tela de criar cadastro"
        testID="button-singup"
      />
    </CommonScreen.Heading>
  );
}
