import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from "react-native";

/** InteractiveCard: Renders a text input and a message generated from
 *                   numbers_api based on the input
 *
 *  Props: fact: obj like:
 *    ERROR:
      {
        "message": f"A math fact for { number } not found"
        "status": 404
      }

      MATH/TRIVIA/YEAR:
      {
        "number": "145"
        "message": "145 is the atomic number of Unquadpentium."
        "type": "math"
      }

      DATE:
      {
        "month": "1"
        "day": "1"
        "dayOfYear": 1
        "message": "January 1st is the test case.",
        "type": "date"
      }
 *        searchNum: function to be called in parent component
 *
 *  InteractiveTable -> InteractiveCard
 */

function InteractiveCard({ fact, searchNum }) {
  console.debug("InteractiveCard")

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

  const [text, setText] = useState(endpoint);

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
    color: "white",
    height: 40,
    margin: 12,
    borderColor: "white",
    borderWidth: 1,
    width: 150,
    padding: 10,
  },
  container: {
    alignItems: "center",
  },
  result: {
    width: 300,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    padding: 30
  },
  text: {
    color: "white"
  }
});

export default InteractiveCard;
