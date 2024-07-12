import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text } from "react-native";
import { RootNavigationParams } from "../routers/Root";

export const Details = (
  props: NativeStackScreenProps<RootNavigationParams, "Details">
) => {
  return (
    <SafeAreaView style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>Details screen</Text>
    </SafeAreaView>
  );
};
