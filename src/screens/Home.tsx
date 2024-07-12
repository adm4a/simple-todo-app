import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootNavigationParams } from "../routers/Root";
import { todoList } from "../data";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { editItem } from "../../redux/todoSlice";

var i = 0;
export const Home = (
  props: NativeStackScreenProps<RootNavigationParams, "Home">
) => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos);

  const handleEditItem = (id: any, updatedItem: any) => {
    dispatch(
      editItem({
        id,
        updatedItem,
      })
    );
  };

  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F1F5F9",
        position: "relative",
        height: "100%",
      }}
    >
      <TouchableOpacity
        style={{
          width: 45,
          height: 45,
          backgroundColor: "#01396d",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          position: "absolute",
          bottom: 50,
          left: 30,
          zIndex: 10,
        }}
        onPress={() => props.navigation.navigate("NewTodo")}
      >
        <Ionicons name="add-outline" size={32} color="white" />
      </TouchableOpacity>
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
            borderRadius: 10,
            padding: 10,
            marginTop: 20,
          }}
        >
          {todos.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{
                  paddingVertical: 10,
                  borderBottomColor: "#D3D3D3",
                  borderBottomWidth: index === todos.length - 1 ? 0 : 0.5,
                  opacity: item.completed ? 0.5 : 1,
                }}
                onPress={() => handleEditItem(item.id, { completed: true })}
              >
                <Text style={{ fontWeight: 600, fontSize: 12 }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
