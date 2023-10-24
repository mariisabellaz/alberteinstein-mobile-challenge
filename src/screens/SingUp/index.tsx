import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

import { schema } from './signup.yup';

type FormData = yup.InferType<typeof schema>;

export function SingUp() {
  const { goBack, navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    navigate('faq');
  };

  return (
    <CommonScreen.Heading>
      <S.KeyboardView testID="keyboardView">
        <Form
          caption="E-mail*"
          name="email"
          control={control}
          placeholder="seu@email.com"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          error={errors?.email?.message}
        />
        <Form
          caption="Nome*"
          name="name"
          control={control}
          placeholder="Nome"
          autoComplete="username"
          error={errors?.name?.message}
        />
        <Form
          caption="Senha"
          name="password"
          control={control}
          placeholder="******"
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          error={errors?.password?.message}
        />
        <Form
          caption="Confirme sua senha*"
          name="confirm_password"
          control={control}
          placeholder="******"
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          error={errors?.confirm_password?.message}
        />
        <Button
          label="Criar conta"
          onPress={handleSubmit(onSubmit)}
          accessibilityHint="Cria uma conta nova e navega para a próxima tela"
          testID="button-singup"
        />
        <Button
          label="Voltar ao login"
          appearance="secondary"
          onPress={goBack}
          accessibilityHint="Volta para a tela de login"
          testID="button-goback"
        />
      </S.KeyboardView>
    </CommonScreen.Heading>
  );
}
