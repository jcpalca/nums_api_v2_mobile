import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { getFact } from "./utils";
import InteractiveCard from "./InteractiveCard";

function InteractiveTable() {
  console.debug('InteractiveTable');

  const [fact, setFact] = useState({
    "number": "42",
    "type": "trivia"
  })

  console.log('fact', fact);

  const [currSearch, setCurrSearch] = useState();
  console.log('currSearch', currSearch);

  useEffect(function fetchFact() {
    try {
      async function fetchFactAPI() {
        const factInfo = await getFact(fact.number, fact.type);
        setFact(factInfo);
      }

      fetchFactAPI();
    }
    catch(err) {
      console.log(err);
    }
  }, []);

  async function searchNum(endpoint) {
    const [cat, arg1, arg2] = endpoint.split("/");
    let factInfo;

    if(cat === "dates") {
      factInfo = await getFact(`${arg1}/${arg2}`, cat);
    }
    else {
      factInfo = await getFact(arg1, cat)
    }

    setFact(factInfo);
    setCurrSearch(endpoint);
  }

  async function searchRand(endpoint) {
    const [cat, arg1] = endpoint.split("/");
    console.log("RANDOM SEARCH", cat, arg1);
    let factInfo = await getFact(arg1, cat);
    factInfo.number = "random";
    setFact(factInfo);
  }

  return (
    <View style={styles.container}>
      <InteractiveCard fact={fact} searchNum={searchNum}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default InteractiveTable;
