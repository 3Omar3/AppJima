import React from "react";
import { vh, vw } from "react-native-css-vh-vw";
import { StyleSheet, View, Text } from "react-native";

// source
import Colors from "../config/colors";

function TextDescribcion({ title, describcion, styleTitle, styleDescribcion }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
      }}
    >
      <Text style={[styles.title, styleTitle]}>{title} </Text>
      <Text style={[styles.text, styleDescribcion]}>{describcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: Colors.text,
    fontSize: vw(4),
    letterSpacing: 0.6,
  },
  text: {
    fontSize: vw(4),
    letterSpacing: 0.6,
    color: Colors.text,
  },
});

export default TextDescribcion;
