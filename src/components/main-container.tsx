import { ReactNode } from "react";
import { View } from "react-native";
import { getCurrentStatusBarHeight } from "@/helpers/status-bar-helpers";

interface Props {
  children: ReactNode;
}

export default function MainContainer({ children }: Props) {
  return (
    <View className="p-5">
      {/* Spacer */}
      <View className={`min-h-[${getCurrentStatusBarHeight()}px]`}></View>

      {children}
    </View>
  );
}
