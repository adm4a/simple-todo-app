import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootNavigationParams } from "../routers/Root";
import { LinearGradient } from "expo-linear-gradient";
import { todoList } from "../data";
import { useState } from "react";

export const Home = (
  props: NativeStackScreenProps<RootNavigationParams, "Home">
) => {
  const [notCompleted, setNotCompleted] = useState(
    todoList.filter((item) => item.completed === false)
  );
  const [completed, setCompleted] = useState(
    todoList.filter((item) => item.completed)
  );

  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F1F5F9",
      }}
    >
      <Text
        style={{
          marginTop: 20,
          fontWeight: 700,
          fontSize: 13,
        }}
      >
        {new Date().toUTCString().substring(0, 16)}
      </Text>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
        bounces={false}
      >
        <View
          style={{
            width: "90%",
            backgroundColor: "white",
            borderRadius: 20,
            padding: 10,
            marginTop: 20,
          }}
        >
          {notCompleted.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  paddingVertical: 22,
                  borderBottomColor: "#D3D3D3",
                  borderBottomWidth:
                    index === notCompleted.length - 1 ? 0 : 0.5,
                }}
                onPress={() =>
                  props.navigation.navigate("Details", {
                    todoItem: item,
                  })
                }
              >
                <Text style={{ fontWeight: 500, fontSize: 12 }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text
          style={{
            fontWeight: 600,
            fontSize: 12,
            alignSelf: "flex-start",
            padding: 22,
          }}
        >
          Completed
        </Text>

        <View
          style={{
            width: "90%",
            backgroundColor: "white",
            borderRadius: 20,
            padding: 10,
          }}
        >
          {completed.map((item, index) => {
            return (
              <View
                style={{
                  paddingVertical: 22,
                  borderBottomColor: "#D3D3D3",
                  borderBottomWidth: index === completed.length - 1 ? 0 : 0.5,
                }}
              >
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#D3D3D3",
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }}
                >
                  {item.title}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
