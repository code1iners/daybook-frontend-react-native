import { useEffect, useState } from "react";
import GuestStacks from "@/navigators/guest-stacks.navigator";
import MemberStacks from "@/navigators/member-stacks.navigator";
import { useNavigation } from "@react-navigation/native";

export default function Stacks() {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <MemberStacks /> : <GuestStacks />;
}
