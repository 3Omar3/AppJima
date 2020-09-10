import React from "react";
import { StyleSheet, View, Text } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

// resource
import Colors from "../config/colors";

function Spinner({
  text,
  config,
  buttonSize = 13,
  icons,
  icon,
  iconSize = 21,
  onChange,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <InputSpinner
        prepend={
          <View style={styles.icon}>
            {icons === "FontAwesome5" ? (
              <FontAwesome5 name={icon} size={iconSize} color={Colors.chi} />
            ) : (
              <MaterialIcons name={icon} size={iconSize} color={Colors.chi} />
            )}
          </View>
        }
        inputStyle={styles.inputSpinner}
        buttonFontSize={buttonSize}
        buttonStyle={styles.buttonStyle}
        max={config.max}
        step={config.step}
        precision={config.precision}
        value={config.value}
        type={config.type}
        onChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 13,
    letterSpacing: 0.6,
    textAlign: "center",
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 5,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  inputSpinner: {
    height: 28,
    fontSize: 14,
  },
  buttonStyle: {
    height: 28,
    width: 28,
    backgroundColor: Colors.chi,
  },
});

export default Spinner;
