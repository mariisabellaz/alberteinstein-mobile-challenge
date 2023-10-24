import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Faq } from '@screens/Faq';
import { Login } from '@screens/Login';
import { SingUp } from '@screens/SingUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="faq" component={Faq} />
      <Screen name="login" component={Login} />
      <Screen name="singup" component={SingUp} />
    </Navigator>
  );
}
