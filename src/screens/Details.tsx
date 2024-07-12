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

export const Details = (
  props: NativeStackScreenProps<RootNavigationParams, "Details">
) => {
  const item = props.route.params?.todoItem;
  const [title, setTitle] = useState(item.title);
  const [category, setCategory] = useState(item.category);
  const [date, setDate] = useState(item.date);
  const [time, setTime] = useState(item.time);
  const [notes, setNotes] = useState(item.notes);

  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos);

  const handleAddItem = (item: any) => {
    dispatch(
      addItem({
        title: item.title,
        completed: false,
        time: item.time,
        id: todoList.length + 1,
        category: item.category,
        date: item.date,
        notes: item.notes,
      })
    );
  };

  const handleEditItem = (
    id: number,
    updatedItem: Partial<{
      id: number;
      title: string;
      category: string;
      date: string;
      time: string;
      notes: string;
      completed: boolean;
    }>
  ) => {
    dispatch(editItem({ id, updatedItem }));
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
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Category</Text>
          <TextInput
            style={styles.input}
            placeholder="Category"
            placeholderTextColor={"#D9D9D9"}
            onChangeText={(category) => setCategory(category)}
            value={category}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Date</Text>

          <RNDateTimePicker
            mode="date"
            value={new Date(date)}
            onChange={(_, newDate) => {
              setDate(newDate);
            }}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Time</Text>
          <TextInput
            style={styles.input}
            placeholder="Time"
            placeholderTextColor={"#D9D9D9"}
            onChangeText={(time) => setTime(time)}
            value={time}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Notes</Text>
          <TextInput
            style={styles.input}
            placeholder="Notes"
            placeholderTextColor={"#D9D9D9"}
            onChangeText={(notes) => setNotes(notes)}
            value={notes}
            multiline={true}
            numberOfLines={4}
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
          handleEditItem(item.id, {
            title,
            completed: false,
            time,
            id: item.id,
            category,
            date,
            notes,
          });
          props.navigation.navigate("Home");
        }}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 11 }}>
          {!!item ? "Save changes" : "Add item"}
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
