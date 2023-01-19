import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { getFact } from "./utils";
import InteractiveCard from "./InteractiveCard";
import Instructions from "./Instructions";

/** InteractiveTable: Renders Instructions and InteractiveCard and supplies
 *                    useful functions and state to be passed down as props
 *
 *  Props: None
 *
 *  State: fact: obj like:
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
 *       currSearch: string
 *
 *  App -> InteractiveTable -> { Instructions, InteractiveCard }
 */

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

  return (
    <View style={styles.container}>
      <Instructions />
      <InteractiveCard fact={fact} searchNum={searchNum}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#335c60",
    alignItems: "center",
  },
});

export default InteractiveTable;
