import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootNavigationParams } from "../routers/Root";

export const Details = (
  props: NativeStackScreenProps<RootNavigationParams, "Details">
) => {
  const item = props.route.params?.todoItem;
  return (
    <SafeAreaView
      style={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <View style={{ width: "100%", height: "85%", padding: 22 }}>
        <View style={styles.individualInfoContainer}>
          <Text style={styles.label}>Task title</Text>
          <Text style={styles.text}>{item.title}</Text>
        </View>

        <View
          style={[styles.individualInfoContainer, { flexDirection: "row" }]}
        >
          <Text style={styles.label}>Category: </Text>
          <Text style={styles.text}>{item.category} </Text>
        </View>

        <View style={styles.individualInfoContainer}>
          <Text style={styles.label}>When</Text>
          <Text style={styles.text}>{item.date.substring(0, 16)}</Text>
        </View>

        <View style={styles.individualInfoContainer}>
          <Text style={styles.label}>Notes</Text>
          <Text style={styles.text}>{item.notes}</Text>
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
          Add new item
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
});
