import { ScrollView, Text, Image, StyleSheet } from "react-native";

/** Documentation: Renders API documentation for numbers_api
 *
 *  Props: none
 *
 *  State: none
 *
 *  App -> Documentation
 */

function Documentation() {
  return (
    <ScrollView style={styles.container}>
      <Text>Documentation</Text>
      <Image
        source={require("./assets/dates-image.png")}
        style={styles.image}
      />
      <Image source={require("./assets/math-image.png")} style={styles.image2} />
      <Image
        source={require("./assets/trivia-image.png")}
        style={styles.image2}
      />
      <Image
        source={require("./assets/years-image.png")}
        style={styles.image2}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  image: {
    height: 415,
    width: 400,
  },
  image2: {
    height: 400,
    width: 400,
  },
});

export default Documentation;
