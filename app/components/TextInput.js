import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import Colors from "../config/colors";

function AppTextInput({ placeholder }) {
  return (
    <TextInput
      placeholder={placeholder}
      dense={true}
      style={styles.input}
      theme={inputTheme.input}
    />
  );
}

// paper theme
const inputTheme = {
  input: {
    primary: Colors.primary,
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
