import { View, Text, Image, StyleSheet } from "react-native";

/** Home: Renders homepage
 *
 *  Props: None
 *
 *  State: None
 *
 *  App -> Home
 */

function Home() {
  console.debug("Home");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Numbers API!</Text>
      <Image
        source={require("./assets/numbers_api.jpg")}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  image: {
    borderRadius: 500,
    margin: 50
  },
  title: {
    fontSize: 24
  }
});

export default Home
