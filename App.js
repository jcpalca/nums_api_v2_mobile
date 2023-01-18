import { StyleSheet, ScrollView } from "react-native";
import ExampleCarousel from "./ExampleCarousel";
import InteractiveTable from "./InteractiveTable";

/** App: Top level component rendering ExampleCarousel
 *
 *  Props: none
 *
 *  State: none
 *
 *  App -> ExampleCarousel
 */

export default function App() {
  console.debug("App");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ExampleCarousel />
      <InteractiveTable />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.65,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
