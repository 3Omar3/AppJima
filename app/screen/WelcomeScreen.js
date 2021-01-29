import React from "react";
import { StyleSheet, StatusBar, Image, View, Text } from "react-native";
import { vh, vw } from "react-native-css-vh-vw";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";

// components
import Button from "../components/Button";
import Routes from "../navigation/routes";

// images
const logo = require("../assets/png/Logo.png");

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={logo} />
      <View style={styles.containerWelcome}>
        <Text style={styles.title}>{t("welcome")}</Text>
        <Text style={styles.text}>{t("welcomeMessage")}</Text>
      </View>
      <Button
        title={t("get started")}
        onPress={() => navigation.navigate(Routes.LOGIN)}
        styleContainer={styles.button}
      />
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: vh(20),
    width: vw(70),
    position: "absolute",
    top: 20,
  },
  containerWelcome: {
    position: "absolute",
    top: vh(35),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: vw(5.5),
    letterSpacing: 0.6,
    marginBottom: vh(2.2),
    fontWeight: "bold",
    color: Colors.text,
  },
  text: {
    fontSize: vw(5),
    letterSpacing: 0.6,
    textAlign: "center",
    lineHeight: vh(5.5),
    marginLeft: vw(10.5),
    marginRight: vw(10.5),
    color: Colors.text,
  },
  button: {
    height: vh(5.5),
    width: "65%",
    marginBottom: vh(6),
    borderRadius: 50,
  },
});

export default WelcomeScreen;
