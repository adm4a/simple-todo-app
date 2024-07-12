import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Image, View } from "react-native";
import { NewTodo } from "../screens/NewTodo";

export type RootNavigationParams = {
  Welcome: undefined;
  Home: undefined;
  NewTodo: undefined;
};

export const RootRouterStack =
  createNativeStackNavigator<RootNavigationParams>();

export const Root = () => {
  return (
    <RootRouterStack.Navigator>
      <RootRouterStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          header: () => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "flex-end",
                  backgroundColor: "white",
                  paddingTop: 50,
                }}
              >
                <Image
                  source={require("../../assets/logo.png")}
                  style={{ width: 300, height: 50 }}
                  resizeMode="contain"
                />
              </View>
            );
          },
        }}
      />

      <RootRouterStack.Screen
        name="NewTodo"
        component={NewTodo}
        options={{ headerShown: true }}
      />
    </RootRouterStack.Navigator>
  );
};
