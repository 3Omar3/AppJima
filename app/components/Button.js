import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../config/colors";

function AppButton({ title, onPress, color = "primary", textColor = "white" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: Colors[color] }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: Colors[textColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    letterSpacing: 0.6,
    color: Colors.white,
    position: "absolute",
    fontSize: 17,
  },
});

export default AppButton;
