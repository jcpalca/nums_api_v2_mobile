import { StyleSheet, ScrollView } from "react-native";
import ExampleCarousel from "./ExampleCarousel";

/** App: Top level component rendering ExampleCarousel
 *
 *  Props: none
 *
 *  State: none
 *
 *  App -> ExampleCarousel
 */

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ExampleCarousel />
    </ScrollView>
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
