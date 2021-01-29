import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { vh, vw } from "react-native-css-vh-vw";
import InputSpinner from "react-native-input-spinner";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// resource
import Colors from "../config/colors";

function Spinner({
  text,
  styleText,
  config,
  buttonSize = vw(5),
  icon,
  iconSize = vw(5),
  onChange,
}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, styleText]}>{text}</Text>
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
          onChange={onChange}
          rounded={false}
          width={"85%"}
          {...config}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  containerSpinner: {
    marginTop: 5,
    backgroundColor: Colors.white,
    borderColor: Colors.liteGray,
    borderRadius: 15,
    overflow: "hidden",
  },
  text: {
    color: Colors.text,
    fontSize: vw(3.5),
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
    height: vh(4.5),
    fontSize: vw(4.5),
    color: Colors.text,
    marginRight: 25,
    letterSpacing: 0.6,
  },
  buttonStyle: {
    height: vh(4.5),
    width: vw(11),
    backgroundColor: Colors.background,
    borderRadius: 5,
  },
});

export default Spinner;
