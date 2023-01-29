import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "@/screens/home.screen";
import { NAVIGATORS, SCREEN_NAMES } from "@/constants";

const Stack = createNativeStackNavigator();

export default function MemberStacks() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate(
      NAVIGATORS.TABS as never,
      { screen: SCREEN_NAMES.DIARIES } as never
    );
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}
