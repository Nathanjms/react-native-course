import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import ColorButton from "./components/ColorButton"

export default function App() {
  const [backgroundColor, setbackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, { backgroundColor }]}>
        <ColorButton backgroundColor="red" onPress={setbackgroundColor}/>
        <ColorButton backgroundColor="green" onPress={setbackgroundColor}/>
        <ColorButton backgroundColor="blue" onPress={setbackgroundColor}/>
        <ColorButton backgroundColor="yellow" onPress={setbackgroundColor}/>
        <ColorButton backgroundColor="purple"onPress={setbackgroundColor} />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})