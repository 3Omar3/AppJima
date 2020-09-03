import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

function TopHome({
  title,
  text,
  packageIcons = "FontAwesome5",
  icon,
  iconSize = 28,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.iconContainer}>
        {packageIcons == "FontAwesome5" ? (
          <FontAwesome5 name={icon} size={iconSize} color="black" />
        ) : (
          <Entypo name={icon} size={iconSize} color="black" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  title: {
    fontSize: 11,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
  iconContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default TopHome;
