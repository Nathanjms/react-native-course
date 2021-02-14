import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ColorDteails() {
  return (
    <View style={styles.container}>
        <Text>Color Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
