import React from "react";
import { StyleSheet, StatusBar, Image, View, Text } from "react-native";
import { vh, vw } from "react-native-css-vh-vw";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";

// components
import Button from "../components/Button";
import ScreenScroll from "../components/ScreenScroll";
import Routes from "../navigation/routes";

// images
const logo = require("../assets/png/Logo.png");

function WelcomeScreen({ navigation }) {
  return (
    <ScreenScroll justify={"flex-end"}>
      <Image style={styles.logo} resizeMode="contain" source={logo} />
      <View style={styles.containerWelcome}>
        <Text style={styles.title}>{t("welcome")}</Text>
        <Text style={styles.text}>{t("welcomeMessage")}</Text>
      </View>
      <Button
        title={t("logIn")}
        onPress={() => navigation.navigate(Routes.LOGIN)}
        styleContainer={{ height: vh(6.8) }}
      />
      <Button
        title={t("registerMe")}
        color="liteGray"
        textColor="text"
        onPress={() => navigation.navigate(Routes.REGISTER)}
        styleContainer={{ height: vh(6.8) }}
      />
      <StatusBar hidden={true} />
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: vh(24),
    width: vw(74),
    position: "absolute",
    top: 1,
  },
  containerWelcome: {
    position: "absolute",
    top: vh(32),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: vw(6.2),
    letterSpacing: 2,
    marginBottom: vh(2.2),
    fontWeight: "bold",
    color: Colors.text,
  },
  text: {
    fontSize: vw(5.3),
    letterSpacing: 0.8,
    textAlign: "center",
    lineHeight: vh(5.5),
    fontWeight: "200",
    marginLeft: "10%",
    marginRight: "10%",
    color: Colors.text,
  },
});

export default WelcomeScreen;
