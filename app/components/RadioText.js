import React from "react";
import { StyleSheet, View, Text } from "react-native";

// component
import Radio from "../components/Radio";

function RadioText({ color, title, marginVertical = 5 }) {
  return (
    <View style={[styles.container, { marginVertical: marginVertical }]}>
      <Radio color={color} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    fontSize: 11,
  },
});

export default RadioText;
