import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { vh, vw } from "react-native-css-vh-vw";

function RadioText({
  color,
  text,
  marginVertical = vh(0.8),
  styleText,
  styleRadio,
}) {
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
    height: vh(2),
    width: vw(4),
    borderRadius: 100,
    marginRight: 7,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: vw(4.5),
    letterSpacing: 0.6,
  },
});

export default RadioText;
