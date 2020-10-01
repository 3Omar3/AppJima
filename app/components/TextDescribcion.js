import React from "react";
import { StyleSheet, View, Text } from "react-native";

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
    fontSize: 17,
    letterSpacing: 0.6,
  },
  text: {
    fontSize: 17,
    letterSpacing: 0.6,
  },
});

export default TextDescribcion;
