import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

function InteractiveCard({ fact, searchNum }) {
  let endpoint = "";

  if (fact.number === "random") {
    endpoint = `${fact.type}/random`;
  }
  else if (fact.type === "dates") {
    endpoint = `${fact.type}/${fact.month}/${fact.day}`;
  }
  else if (fact.type === "years" || fact.type === "math" || fact.type === "trivia") {
    endpoint = `${fact.type}/${fact.number}`;
  }
  else {
    endpoint = "";
  }

  console.log("ENDPOINT", endpoint);

  const [text, setText] = React.useState(endpoint);

  console.log("TEXT", text);

  function onChangeText(value) {
    setText(value);
    searchNum(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>numbersapi.com/api/</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={"trivia/random"}
        value={text}
      />
      <Text style={styles.result}>{fact.message}</Text>
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
  result: {
    width: 300,
    borderWidth: 1,
    borderRadius: 15,
    padding: 30
  }
});

export default InteractiveCard;
