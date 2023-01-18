import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

const InteractiveCard = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>numbersapi.com/</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={""}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 150,
    padding: 10,
  },
  container: {
    alignItems: "center",
  },
});

export default InteractiveCard;
