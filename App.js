import React from "react";
import * as Progress from "expo-progress";
import { 
  Text,
  View, 
  ActivityIndicator, 
  Button,
  Alert,
  Dimensions,
  Platform,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button pressed`)
  }
  return (
    <View style={{ padding:50 }}>
      <ActivityIndicator size="large" color="#61DBFB" />
      <Progress.Bar 
        color="blue"
        progress={0.8}
      />
      <Button title="click me" onPress={onButtonPress}/>
      <Text>OS: {Platform.OS}</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
    </View>
  )
}