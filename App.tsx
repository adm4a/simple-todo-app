import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Root } from "./src/routers/Root";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A3780",
    alignItems: "center",
    justifyContent: "center",
  },
});
