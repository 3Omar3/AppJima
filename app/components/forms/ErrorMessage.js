import React from "react";
import { StyleSheet, Text } from "react-native";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "crimson",
    marginTop: -7,
    marginBottom: 10,
  },
});

export default ErrorMessage;
