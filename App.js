import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExampleCard from "./ExampleCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>YEAHHHHHH BOIIIIIIIII</Text>
      <StatusBar style="auto" />
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
