import React from "react";
import { StyleSheet, View } from "react-native";

// source
import Colors from "../config/colors";

function Separator(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: Colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Separator;
