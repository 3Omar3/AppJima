import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

// resource
import Colors from "../config/colors";

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
          <FontAwesome5 name={icon} size={iconSize} color={Colors.gray} />
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
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.text,
  },
  text: {
    fontSize: 14,
    // fontWeight: "bold",
    color: Colors.text,
  },
  iconContainer: {
    marginVertical: 10,
  },
});

export default TopHome;
