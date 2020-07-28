import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  View,
  Text,
} from "react-native";

import Language from "../config/language-es.js";

function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/png/LogoShadow.png")}
        />
        <Text style={styles.title}>{Language.welcome}</Text>
        <Text style={styles.text}>{Language.welcomeMessage}</Text>
        <TouchableOpacity
          style={styles.touchBoutton}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            style={styles.button}
            resizeMode="contain"
            source={require("../assets/png/inputLogin.png")}
          ></Image>
          <Text style={styles.textLogin}>{Language.logIn}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate("Register")}
        >
          <Image
            style={styles.button}
            resizeMode="contain"
            source={require("../assets/png/inputRegister.png")}
            onProgress={() => navigation.navigate("Register")}
          ></Image>
          <Text style={styles.textRegister}>{Language.registerMe}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 200,
    width: 295,
  },
  title: {
    fontSize: 23,
    letterSpacing: 2, // 2.6
    marginBottom: 20,
  },
  text: {
    fontSize: 19, // 18
    letterSpacing: 0.5,
    textAlign: "center",
    lineHeight: 26,
    fontWeight: "200",
    marginBottom: 40,
    marginLeft: "10%",
    marginRight: "10%",
  },
  touchBoutton: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnRegister: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 65,
    width: 270,
  },
  textLogin: {
    fontSize: 17,
    letterSpacing: 0.6,
    color: "#313131",
    position: "absolute",
  },
  textRegister: {
    fontSize: 17,
    letterSpacing: 0.6,
    color: "white",
    position: "absolute",
    marginBottom: 20,
  },
});

export default WelcomeScreen;
