import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiariesScreen from "@/screens/diaries.screen";
import SettingsScreen from "@/screens/settings.screen";
import { SCREEN_NAMES } from "@/constants";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAMES.DIARIES}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={SCREEN_NAMES.DIARIES} component={DiariesScreen} />
      <Tab.Screen name={SCREEN_NAMES.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
