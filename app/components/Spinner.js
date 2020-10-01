import React from "react";
import { StyleSheet, View, Text } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// resource
import Colors from "../config/colors";

function Spinner({
  text,
  config,
  buttonSize = 22,
  icon,
  iconSize = 25,
  onChange,
}) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={styles.text}>{text}</Text>
        <InputSpinner
          prepend={
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name={icon}
                size={iconSize}
                color={Colors.chi}
              />
            </View>
          }
          style={styles.containerSpinner}
          inputStyle={styles.inputSpinner}
          buttonFontSize={buttonSize}
          buttonStyle={styles.buttonStyle}
          buttonTextColor={Colors.gray}
          colorPress={Colors.chi}
          max={config.max}
          step={config.step}
          precision={config.precision}
          value={config.value}
          type={config.type}
          onChange={onChange}
          rounded={false}
          width={"85%"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
  containerSpinner: {
    backgroundColor: Colors.white,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 50,
    borderRadius: 5,
    overflow: "hidden",
  },
  text: {
    color: Colors.text,
    fontSize: 17,
    letterSpacing: 0.8,
    marginBottom: 5,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
    paddingRight: 5,
  },
  inputSpinner: {
    height: 40,
    fontSize: 18,
    color: Colors.text,
    marginRight: 25,
    letterSpacing: 0.6,
  },
  buttonStyle: {
    height: 40,
    width: 40,
    backgroundColor: Colors.background,
    borderRadius: 5,
  },
});

export default Spinner;
