import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { vh, vw } from "react-native-css-vh-vw";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";

function NetScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="wifi-off"
        size={vh(20)}
        color={Colors.liteGray}
      />
      <Text style={styles.text}>No hay conexión</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 5 + vh(2),
    fontWeight: "bold",
    color: Colors.liteGray,
    letterSpacing: 0.6,
  },
});

export default NetScreen;
