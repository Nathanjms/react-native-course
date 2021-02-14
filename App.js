import React, {useState} from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import imgRicko from "./assets/ricko.jpg"
import imgRickoTwo from "./assets/ricko2.jpg"


export default function App() {
  const [backgroundColor, setbackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.button}
        onPress={ () => setbackgroundColor("green")}>green</Text>
      <Text style={styles.button}
      onPress={ () => setbackgroundColor("red")}>red</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding:10,
    textAlign: "center",
    borderRadius: 10,
    borderWidth: 3,
    margin:10,
    width: Dimensions.get("window").width-10
  }
})