import React, { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient, onlineManager } from "react-query";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "@/navigators/root.navigator";

SplashScreen.preventAutoHideAsync();

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

const queryClient = new QueryClient();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    preload();
  }, []);

  async function preload() {
    try {
      await Font.loadAsync(Ionicons.font);
    } catch (err) {
      console.warn(err);
    } finally {
      setAppIsReady(true);
    }
  }

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
