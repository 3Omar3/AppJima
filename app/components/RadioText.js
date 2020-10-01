import React from "react";
import { StyleSheet, View, Text } from "react-native";

function RadioText({ color, text, marginVertical = 5, styleText, styleRadio }) {
  return (
    <View style={[styles.container, { marginVertical: marginVertical }]}>
      <View
        style={[
          styles.radioContainer,
          { backgroundColor: color },
          { styleRadio },
        ]}
      />
      <Text style={[styles.text, styleText]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  radioContainer: {
    height: 15,
    width: 15,
    borderRadius: 100,
    marginRight: 7,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    letterSpacing: 0.8,
  },
});

export default RadioText;
