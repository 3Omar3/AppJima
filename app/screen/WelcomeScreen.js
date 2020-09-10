import React from "react";
import { StyleSheet, StatusBar, Image, View, Text } from "react-native";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";

// components
import Button from "../components/Button";
import ScreenScroll from "../components/ScreenScroll";
import Routes from "../navigation/routes";
import Card from "../components/Card";

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
        styleContainer={{ marginBottom: 10 }}
      />
      <Button
        title={t("registerMe")}
        color="liteGray"
        textColor="text"
        onPress={() => navigation.navigate(Routes.REGISTER)}
        styleContainer={{ marginBottom: 10 }}
      />
      <StatusBar hidden={true} />
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 170,
    width: 285,
    position: "absolute",
    top: 5,
  },
  containerWelcome: {
    position: "absolute",
    top: "33.5%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 23,
    letterSpacing: 2, // 2.6
    marginBottom: 20,
    fontWeight: "bold",
    color: Colors.text,
  },
  text: {
    fontSize: 19, // 18
    letterSpacing: 0.6,
    textAlign: "center",
    lineHeight: 30,
    fontWeight: "200",
    marginBottom: 40,
    marginLeft: "10%",
    marginRight: "10%",
    color: Colors.text,
  },
});

export default WelcomeScreen;
