import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-paper";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  StatusBar,
  ImageBackground,
} from "react-native";

import Language from "../config/language-es.js";
import Colors from "../config/colors.js";

// Images
const background = require("../assets/png/background.png");
const logo = require("../assets/png/jimablanco.png");
const inputLogin = require("../assets/png/inputDegradado.png");
const inputRegister = require("../assets/png/inputLogin.png");
const iconGoogle = require("../assets/png/google.png");
const iconFacebook = require("../assets/png/facebook.png");

function LoginScreen({ navigation }) {
  // variables
  const [user, onChangeTextUser] = useState();
  const [password, onChangeTextPassword] = useState();

  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground
        source={background}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 110, width: 250, marginTop: 20, marginBottom: 8 }}
          resizeMode="contain"
          source={logo}
        />
        <View
          style={{
            backgroundColor: "white",
            width: 270,
            height: 390,
            padding: 30,
            borderRadius: 16,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <TextInput
            placeholder="Usuario"
            dense={true}
            style={{ backgroundColor: "white", marginBottom: 15 }}
            theme={{
              colors: {
                // placeholder: "#313131",
                text: "#313131",
                primary: Colors.primary,
                underlineColor: "transparent",
                background: Colors.white,
              },
            }}
          />
          <TextInput
            placeholder="Contraseña"
            dense={true}
            secureTextEntry={true}
            style={{ backgroundColor: "white", marginBottom: 10 }}
            theme={{
              colors: {
                // placeholder: "#313131",
                text: "#313131",
                primary: Colors.primary,
                underlineColor: "transparent",
                background: Colors.white,
              },
            }}
          />
          <TouchableOpacity>
            <Text
              style={{
                color: Colors.primary,
                textAlign: "right",
                padding: 5,
              }}
            >
              {Language.forgetPassword}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTouch}>
            <Image
              style={styles.button}
              resizeMode="contain"
              source={inputLogin}
            />
            <Text style={styles.textLogin}>{Language.logIn}</Text>
          </TouchableOpacity>
          <Text
            style={{ color: Colors.gray, textAlign: "center", marginTop: 10 }}
          >
            {Language.dontHaveAccount}
          </Text>
          <TouchableOpacity style={styles.btnTouch}>
            <Image
              style={styles.button}
              resizeMode="contain"
              source={inputRegister}
            />
            <Text style={styles.textRegister}>{Language.register}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 3 }}>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={iconGoogle}
            />
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={iconFacebook}
            />
          </View>
        </View>
      </ImageBackground>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  btnTouch: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 65,
    width: "100%",
  },
  textLogin: {
    letterSpacing: 0.6,
    color: "white",
    position: "absolute",
  },
  textRegister: {
    color: "#313131",
    letterSpacing: 0.6,
    position: "absolute",
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 44,
  },
});

export default LoginScreen;
