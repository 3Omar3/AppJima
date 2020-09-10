import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import Colors from "../config/colors";

function AppTextInput({ width = "100%", ...otherProps }) {
  return (
    <TextInput
      dense={true}
      style={[styles.input, { width: width }]}
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
    backgroundColor: Colors.white,
    marginBottom: 15,
  },
});

export default AppTextInput;
