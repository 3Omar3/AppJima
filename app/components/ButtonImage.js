import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { vh, vw } from "react-native-css-vh-vw";

import Colors from "../config/colors";

function AppButtonImage({
  title,
  source,
  onPress,
  textColor = "white",
  styleContainer,
  styleText,
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={[styles.image, styleContainer]}
        resizeMode="contain"
        source={source}
        fadeDuration={0}
      />
      <Text style={[styles.text, { color: Colors[textColor] }, styleText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: vh(10),
    width: "100%",
  },
  text: {
    fontSize: vw(4.5),
    letterSpacing: 0.6,
    color: Colors.white,
    position: "absolute",
  },
});

export default AppButtonImage;
