import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ width: "100%", height: "100%" }}
        colors={["rgba(0,0,0,0.5)", "transparent"]}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: "20%",
            }}
          />
          <View
            style={{
              height: "60%",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "500",
              }}
            >
              Welcome to
            </Text>
            <Text style={{ fontSize: 34, color: "white", fontWeight: "900" }}>
              on.time
            </Text>
          </View>

          <View style={{ height: "20%", width: "100%", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: "white",
                padding: 12,
                width: "70%",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black", fontWeight: "600", fontSize: 11 }}>
                Open my ToDo List
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </LinearGradient>
    </View>
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
