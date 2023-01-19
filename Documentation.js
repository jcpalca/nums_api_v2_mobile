import { View, Text, StyleSheet } from "react-native";

function Documentation() {
  return (
    <View style={styles.container}>
      <Text>Documentation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});

export default Documentation;
