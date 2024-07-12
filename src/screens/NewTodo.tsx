import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RootNavigationParams } from "../routers/Root";
import { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addItem, deleteItem, editItem } from "../../redux/todoSlice";
import { todoList } from "../data";

export const NewTodo = (
  props: NativeStackScreenProps<RootNavigationParams, "NewTodo">
) => {
  const [title, setTitle] = useState<string>();

  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos);

  const handleAddItem = (item: any) => {
    dispatch(
      addItem({
        id: todos.length + 1,
        title: item.title,
        completed: false,
        time: item.time,
        category: item.category,
        date: item.date,
        notes: item.notes,
      })
    );
  };

  return (
    <SafeAreaView
      style={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <View style={{ width: "100%", height: "85%", padding: 22 }}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Task title</Text>
          <TextInput
            style={styles.input}
            placeholder="Item title"
            placeholderTextColor={"#D9D9D9"}
            onChangeText={(title) => setTitle(title)}
            value={title}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          borderRadius: 20,
          backgroundColor: "#4A3780",
          padding: 12,
          width: "70%",
          alignItems: "center",
        }}
        onPress={() => {
          handleAddItem({
            title,
            completed: false,
          });
          props.navigation.navigate("Home");
        }}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 11 }}>
          {"Add item"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  individualInfoContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
  },
  inputWrapper: {
    width: "100%",
    paddingHorizontal: 2,
    gap: 8,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1.2,
    borderRadius: 10,
    padding: 10,
    borderColor: "#D9D9D9",
  },
  inputLabel: {
    fontWeight: "600",
    fontSize: 11,
  },
});
