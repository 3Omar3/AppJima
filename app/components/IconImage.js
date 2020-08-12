import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

function AppIconImage({ source, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.icon} resizeMode="contain" source={source} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    marginLeft: 44,
  },
});

export default AppIconImage;
