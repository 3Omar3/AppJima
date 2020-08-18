import React from "react";
import { StyleSheet, View } from "react-native";

function Card({ children, paddingBottom = 0 }) {
  return (
    <View style={[styles.container, { paddingBottom: paddingBottom }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 270,
    height: null, // auto height dependiendo de los componentes
    padding: 30,
    paddingBottom: 19,
    borderRadius: 16,
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
