import React, { useState } from "react";
import { StyleSheet, FlatList, Alert } from "react-native";
import ColorButton from "./ColorButton";
import ColorForm from "./ColorForm";
import { useColors } from "../hooks";

export default function ColorList() {
  const [backgroundColor, setbackgroundColor] = useState("blue");
  const { colors, addColor} = useColors();
  return (
    <>
      <ColorForm
        onNewColor={addColor}
      />
      <FlatList
        style={[styles.container, { backgroundColor }]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={setbackgroundColor}
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
});
