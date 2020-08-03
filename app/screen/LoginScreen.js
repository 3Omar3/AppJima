import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput, Button } from "react-native-paper";
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

// resource
import Language from "../config/language-es";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// Images
const background = require("../assets/png/background.png");
const logo = require("../assets/png/jimablanco.png");
const btnLogin = require("../assets/png/btnDegradado.png");
const btnRegister = require("../assets/png/btnLogin.png");
const iconGoogle = require("../assets/png/google.png");
const iconFacebook = require("../assets/png/facebook.png");

function LoginScreen({ navigation }) {
  // variables
  const [user, onChangeTextUser] = useState();
  const [password, onChangeTextPassword] = useState();

  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground source={background} style={styles.imgBackground}>
        <KeyboardAwareScrollView
          extraScrollHeight={50}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ alignItems: "center" }}>
              <Image style={styles.logo} resizeMode="contain" source={logo} />
              <View style={styles.card}>
                <TextInput
                  placeholder={Language.user}
                  dense={true}
                  style={styles.inputUser}
                  theme={inputTheme}
                />
                <TextInput
                  placeholder={Language.password}
                  dense={true}
                  secureTextEntry={true}
                  style={styles.inputRegister}
                  theme={inputTheme}
                />
                <TouchableOpacity>
                  <Text style={styles.textForget}>
                    {Language.forgetPassword}
                  </Text>
                </TouchableOpacity>
                {/* button login */}
                <TouchableOpacity style={styles.btnTouch}>
                  <Image
                    style={styles.button}
                    resizeMode="contain"
                    source={btnLogin}
                  />
                  <Text style={styles.textLogin}>{Language.logIn}</Text>
                </TouchableOpacity>
                <Text style={styles.textAccount}>
                  {Language.dontHaveAccount}
                </Text>
                {/* button register */}
                <TouchableOpacity
                  style={styles.btnTouch}
                  onPress={() => navigation.navigate(Routes.REGISTER)}
                >
                  <Image
                    style={styles.button}
                    resizeMode="contain"
                    source={btnRegister}
                  />
                  <Text style={styles.textRegister}>{Language.register}</Text>
                </TouchableOpacity>
                {/* button icons */}
                <View style={styles.containerIcons}>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      resizeMode="contain"
                      source={iconGoogle}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      resizeMode="contain"
                      source={iconFacebook}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </ImageBackground>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

// paper theme
const inputTheme = {
  text: Colors.text,
  primary: Colors.primary,
  underlineColor: "transparent",
  background: Colors.white,
};

// default styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  logo: {
    height: 110,
    width: 250,
    marginTop: 20,
    marginBottom: 8,
  },
  card: {
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
  },
  inputUser: {
    backgroundColor: "white",
    marginBottom: 15,
  },
  inputRegister: {
    backgroundColor: "white",
    marginBottom: 10,
  },
  textForget: {
    color: Colors.primary,
    textAlign: "right",
    padding: 5,
  },
  textAccount: {
    color: Colors.gray,
    textAlign: "center",
    marginTop: 10,
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
    color: Colors.text,
    letterSpacing: 0.6,
    position: "absolute",
  },
  containerIcons: {
    flexDirection: "row",
    marginTop: 3,
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 44,
  },
});

export default LoginScreen;
