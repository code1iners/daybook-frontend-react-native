import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stacks from "@/navigators/stacks.navigator";
import Tabs from "@/navigators/bottom-tabs.navigator";
import { NAVIGATORS } from "@/constants";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NAVIGATORS.STACKS} component={Stacks} />
      <Stack.Screen name={NAVIGATORS.TABS} component={Tabs} />
    </Stack.Navigator>
  );
}
