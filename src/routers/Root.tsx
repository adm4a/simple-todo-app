import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Welcome } from "../screens/Welcome";
import { Details } from "../screens/Details";
import { Text, View } from "react-native";

export type RootNavigationParams = {
  Welcome: undefined;
  Home: undefined;
  Details: { todoItem: any } | undefined;
};

export const RootRouterStack =
  createNativeStackNavigator<RootNavigationParams>();

export const Root = () => {
  return (
    <RootRouterStack.Navigator>
      <RootRouterStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <RootRouterStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          header: () => {
            return (
              <View
                style={{
                  height: 100,
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingBottom: 10,
                  backgroundColor: "#4A3780",
                }}
              >
                <Text style={{ color: "white", fontWeight: 600 }}>
                  My Todo List
                </Text>
              </View>
            );
          },
        }}
      />

      <RootRouterStack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: true }}
      />
    </RootRouterStack.Navigator>
  );
};
