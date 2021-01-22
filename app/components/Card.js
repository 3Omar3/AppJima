import React from "react";
import { StyleSheet, View } from "react-native";
import { vh, vw } from "react-native-css-vh-vw";

function Card({ children, styleContainer }) {
  return <View style={[styles.container, styleContainer]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 270,
    height: null, // auto height dependiendo de los componentes
    padding: 10 * vw(1),
    paddingBottom: 19,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
});

export default Card;
