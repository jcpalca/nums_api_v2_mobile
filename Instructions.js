import { View, Text, StyleSheet } from "react-native";

/** Instructions: Renders text
 *
 *  Props: none
 *
 *  State: none
 *
 *  InteractiveTable -> Instructions
*/

function Instructions() {
  console.debug("Instructions");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        How to use Numbers API:
      </Text>
      <Text style={styles.listItem}>
        1. The base URL is already supplied.
      </Text>
      <Text style={styles.listItem}>
        2. Add your own endpoint in the text input below.
      </Text>
      <Text style={styles.listItem}>
        3. The result will be shown in the bigger box below.
      </Text>
      <Text style={styles.listItem}>
        4. You can read the API documentation for any help.
      </Text>
      <Text style={styles.listItem}>
        5. Have fun!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50
  },
  title: {
    fontSize: 20,
    color: "white"
  },
  listItem: {
    color: "white"
  }
});

export default Instructions
