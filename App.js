import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

import imgRicko from "./assets/ricko.jpg"
import imgRickoTwo from "./assets/ricko2.jpg"


export default function App() {
  
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={imgRicko}/>
      <Image style={styles.image} source={imgRickoTwo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    flex: 1,
    borderRadius: 50,
    margin:10,
    width: Dimensions.get("window").width-10
  }
})