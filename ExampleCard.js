import React from 'react';
import { View, Text, StyleSheet, Dimensions } from "react-native";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

/** ExampleCard: Renders facts of a number based on data coming from ExampleCarousel
 *
 *  Props: item: element from data array like:
 *    {
 *      "number": "145"
 *      "message": "145 is the atomic number of Unquadpentium."
 *      "type": "math"
 *    }
 *         index: index of element from data array
 *
 *  State: None
 *
 *  ExampleCarousel -> ExampleCard
 *
 */

function ExampleCard({ item, index }) {
  console.debug("ExampleCard");
  console.log(item, index);

  return (
    <View style={styles.container} key={index}>
      <Text style={styles.header}>{item.type.toUpperCase()}</Text>
      {item.number
        ? <Text style={styles.body}>numbersapi.com/api/{item.type}/{item.number}</Text>
        : <Text style={styles.body}>numbersapi.com/api/{item.type}/{item.month}/{item.day}</Text>
      }
      <Text style={styles.body}>{item.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderRadius: 8,
    width: ITEM_WIDTH,
    height: 350,
    paddingTop: 50,
    paddingBottom: 40,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  header: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "white",
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20
  },
});

export default ExampleCard;
