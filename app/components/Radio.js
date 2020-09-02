import React from "react";
import { StyleSheet, View } from "react-native";

function Radio({ color }) {
  return <View style={[styles.container, { backgroundColor: color }]} />;
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: 20,
    borderRadius: 10,
    margin: 3,
    marginHorizontal: 5,
  },
});

export default Radio;
