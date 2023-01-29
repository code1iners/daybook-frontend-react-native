import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "@/screens/auth/sign-in.screen";
import SignUpScreen from "@/screens/auth/sign-up.screen";
import { SCREEN_NAMES } from "@/constants";

const Stack = createNativeStackNavigator();

export default function GuestStacks() {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAMES.AUTH.SIGN_IN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN_NAMES.AUTH.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={SCREEN_NAMES.AUTH.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
