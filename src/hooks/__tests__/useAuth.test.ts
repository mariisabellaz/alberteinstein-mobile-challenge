import { CommonActions, useNavigation } from '@react-navigation/native';
import { useAuth } from '../useAuth';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
  }),
}));

describe('useAuth', () => {
  it('should sign in successfully', async () => {
    const auth = useAuth();
    const { navigate } = useNavigation();

    await auth.signIn({ email: 'teste@teste.com', password: 'senha123' });

    expect(navigate).toHaveBeenCalledWith('faq');
  });

  it('should throw an error on invalid credentials', async () => {
    const auth = useAuth();

    await expect(() =>
      auth.signIn({ email: 'invalid@test.com', password: 'invalidPassword' })
    ).rejects.toThrow('Credenciais inválidas');
  });

  it('should sign out successfully', async () => {
    const auth = useAuth();
    const { dispatch } = useNavigation();

    await auth.signOut();

    expect(dispatch).toHaveBeenCalledWith(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'login' }],
      })
    );
  });
});
