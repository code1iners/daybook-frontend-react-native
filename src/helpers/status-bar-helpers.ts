import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const getCurrentStatusBarHeight = () => {
  const isAndroid = Platform.OS === "android";
  return isAndroid ? 0 : getStatusBarHeight();
};
