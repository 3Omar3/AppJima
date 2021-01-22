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
        title={t("get started")}
        onPress={() => navigation.navigate(Routes.LOGIN)}
        styleContainer={{ height: 45 }}
      />
      <StatusBar hidden={true} />
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: vh(22),
    width: vw(72),
    position: "absolute",
    top: 10,
  },
  containerWelcome: {
    position: "absolute",
    top: vh(35),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: vw(5.5),
    letterSpacing: 2,
    marginBottom: vh(2.2),
    fontWeight: "bold",
    color: Colors.text,
  },
  text: {
    fontSize: vw(5),
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
