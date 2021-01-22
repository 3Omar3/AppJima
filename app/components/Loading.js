import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

// resource
import Colors from "../config/colors";

// animation
const loader = require("../assets/animation/loader.json");

function Loading({ loading = false, styleContainer }) {
  if (!loading) return null;

  return (
    <View style={[styles.overlay, styleContainer]}>
      <LottieView source={loader} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: Colors.black,
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 0.5,
  },
});

export default Loading;
