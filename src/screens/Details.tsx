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
import { convertTimeStringToDate } from "../../helpers";

export const Details = (
  props: NativeStackScreenProps<RootNavigationParams, "Details">
) => {
  const item = props.route.params?.todoItem;
  const [title, setTitle] = useState(item.title);
  const [category, setCategory] = useState(item.category);
  const [date, setDate] = useState(item.date);
  const [time, setTime] = useState(item.time);
  const [notes, setNotes] = useState(item.notes);

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
            onChange={(newDate) => setDate(newDate)}
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
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 11 }}>
          Save
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
