import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";

import Colors from "../config/colors.js";

function WelcomeScreen(props) {
  const [text, setText] = React.useState("");
  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={(text) => setText(text)}
    />
  );
}

const styles = StyleSheet.create({});

export default WelcomeScreen;
