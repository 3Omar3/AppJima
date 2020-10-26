import React from "react";
import { StyleSheet, Text } from "react-native";
import { vh, vw } from "react-native-css-vh-vw";

function ErrorMessage({ error, visible, styleText }) {
  if (!visible || !error) return null;

  return <Text style={[styles.error, styleText]}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "crimson",
    marginTop: vh(-1),
    marginBottom: vh(1.5),
  },
});

export default ErrorMessage;
