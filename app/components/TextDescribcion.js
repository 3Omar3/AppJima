import React from "react";
import { StyleSheet, View, Text } from "react-native";

function TextDescribcion({ title, describcion, styleTitle, styleDescribcion }) {
  return (
    <Text style={[styles.container, styleTitle]}>
      {title} <Text style={[styles.text, styleDescribcion]}>{describcion}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
  },
  text: {
    fontWeight: "normal",
  },
});

export default TextDescribcion;
