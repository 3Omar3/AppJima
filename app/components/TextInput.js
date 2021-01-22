import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { vh, vw } from "react-native-css-vh-vw";

import Colors from "../config/colors";

function AppTextInput({ width = "100%", style, theme, ...otherProps }) {
  return (
    <TextInput
      dense={true}
      style={[styles.input, style, { width: width }]}
      theme={inputTheme}
      {...otherProps}
    />
  );
}

// paper theme
const inputTheme = {
  // colors is defined by default
  colors: {
    primary: Colors.green,
    underlineColor: "transparent",
    background: Colors.white,
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: vw(4.5),
    backgroundColor: Colors.white,
    marginBottom: vh(1.8),
    height: vh(7),
  },
});

export default AppTextInput;
