import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Alert,
  FlatList,
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
import { deleteItem, editItem } from "../../redux/todoSlice";

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

  const handleDeleteItem = (id: number) => {
    dispatch(deleteItem(id));
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

      <FlatList
        style={{
          width: "90%",

          marginTop: 20,
        }}
        bounces={false}
        data={todos}
        ListEmptyComponent={() => {
          return <Text>No Items</Text>;
        }}
        renderItem={(todoItem) => {
          const { item } = todoItem;
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                paddingVertical: 10,
                borderBottomColor: "#D3D3D3",
                borderBottomWidth:
                  todoItem.index === todos.length - 1 ? 0 : 0.5,
                opacity: item.completed ? 0.5 : 1,
                backgroundColor: "white",
                padding: 12,
                borderRadius: 10,
              }}
              onPress={() => handleEditItem(item.id, { completed: true })}
              onLongPress={() =>
                Alert.alert("Delete todo item", "Are you sure?", [
                  {
                    text: "Yes",
                    onPress: () => handleDeleteItem(item.id),
                  },
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                ])
              }
            >
              <Text style={{ fontWeight: 600, fontSize: 12 }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};
