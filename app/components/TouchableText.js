import React from "react";
import { TouchableOpacity, Text } from "react-native";

import Colors from "../config/colors";

function TouchableText({ title, style, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
}

export default TouchableText;
