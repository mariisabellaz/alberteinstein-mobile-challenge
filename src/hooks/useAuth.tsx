import { CommonActions, useNavigation } from '@react-navigation/native';
import * as yup from 'yup';

import { schema as LoginSchema } from '@screens/Login/login.yup';

type UserModel = yup.InferType<typeof LoginSchema>;

export const useAuth = () => {
  const { navigate, dispatch } = useNavigation();

  const signIn = async ({ email, password }: UserModel) => {
    if (email === 'teste@teste.com' && password === 'senha123') {
      navigate('faq');
    } else {
      throw new Error('Credenciais inválidas');
    }
  };

  const signOut = async () => {
    dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'login' }],
      })
    );
  };

  return {
    signIn,
    signOut,
  };
};
