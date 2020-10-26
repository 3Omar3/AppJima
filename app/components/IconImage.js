import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

function AppIconImage({ source, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={[styles.icon, style]}
        resizeMode="contain"
        source={source}
        onPress={onPress}
        fadeDuration={0}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});

export default AppIconImage;
