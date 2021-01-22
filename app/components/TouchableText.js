import React from "react";
import { TouchableOpacity, Text } from "react-native";

function TouchableText({ title, styleContainer, styleText, onPress }) {
  return (
    <TouchableOpacity style={styleContainer} onPress={onPress}>
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default TouchableText;
