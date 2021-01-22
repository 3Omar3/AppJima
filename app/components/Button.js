import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { vh, vw } from "react-native-css-vh-vw";

import Colors from "../config/colors";

function AppButton({
  title,
  onPress,
  color = "green",
  textColor = "white",
  styleContainer,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styleContainer,
        { backgroundColor: Colors[color] },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: Colors[textColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.liteGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  text: {
    letterSpacing: 0.6,
    color: Colors.white,
    position: "absolute",
    fontSize: vw(4.4),
  },
});

export default AppButton;
