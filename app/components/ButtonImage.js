import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import Colors from "../config/colors";

function AppButtonImage({ title, source, onPress, textColor = "white" }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={source}
        fadeDuration={0}
      />
      <Text style={[styles.text, { color: Colors[textColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 65,
    width: "100%",
  },
  text: {
    letterSpacing: 0.6,
    color: Colors.white,
    position: "absolute",
  },
});

export default AppButtonImage;
