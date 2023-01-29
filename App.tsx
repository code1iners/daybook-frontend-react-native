import RootNavigator from "@/navigators/root.navigator";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
