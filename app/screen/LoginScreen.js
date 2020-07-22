import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "react-native-paper";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  StatusBar,
} from "react-native";

import Colors from "../config/colors.js";
import Language from "../config/language-es.js";

function LoginScreen(props) {
  const [user, onChangeTextUser] = useState();
  const [password, onChangeTextPassword] = useState();

  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAwareScrollView
        extraScrollHeight={20}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.ContainerForm}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require("../assets/logo-liteGreen.jpg")}
            ></Image>
            <TextInput
              style={styles.inputs}
              placeholderTextColor={Colors.placeholder}
              placeholder={Language.name}
              onChangeText={(text) => onChangeTextUser(text)}
              value={user}
            />
            <TextInput
              style={[styles.inputs, styles.passwordInput]}
              secureTextEntry={true}
              placeholderTextColor={Colors.placeholder}
              placeholder={Language.password}
              onChangeText={(text) => onChangeTextPassword(text)}
              value={password}
            />
            <Button
              uppercase={false}
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.loginButton}
            >
              {Language.logIn}
            </Button>
            <TouchableOpacity>
              <Text style={styles.labelForget}>{Language.forgetPassword}</Text>
            </TouchableOpacity>
            <View>
              <Button
                uppercase={false}
                mode="contained"
                onPress={() => console.log("Pressed")}
                style={styles.loginFacebook}
                icon="facebook"
              >
                Facebook
              </Button>
              <Button
                uppercase={false}
                mode="contained"
                onPress={() => console.log("Pressed")}
                style={styles.loginGoogle}
                icon="google"
                color={Colors.gray}
              >
                Google
              </Button>
            </View>
            <View style={styles.label}>
              <Text style={styles.labelText}>{Language.dontHaveAccount}</Text>
              <TouchableOpacity>
                <Text style={styles.labelRegister}>{Language.register}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
  },
  ContainerForm: {
    alignItems: "center",
  },
  logo: {
    width: 240,
    height: 150,
    marginTop: 5,
    marginBottom: 10,
  },
  inputs: {
    backgroundColor: Colors.input,
    borderRadius: 5,
    padding: 10,
    width: "70%",
    fontSize: 18,
    shadowColor: Colors.gray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 10,
  },
  loginButton: {
    width: "70%",
    height: 40,
    backgroundColor: Colors.button,
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 20,
  },
  loginFacebook: {
    backgroundColor: "#3C9FE8",
  },
  textLogin: {
    color: Colors.textButton,
    fontWeight: "bold",
  },
  labelForget: {
    color: Colors.link,
    fontWeight: "bold",
  },
  label: {
    marginTop: 10,
    flexDirection: "row",
  },
  labelText: {
    color: Colors.text,
    fontWeight: "bold",
  },
  labelRegister: {
    color: Colors.link,
    fontWeight: "bold",
  },
  loginGoogle: {
    backgroundColor: Colors.white,
    color: "black",
  },
});

export default LoginScreen;
