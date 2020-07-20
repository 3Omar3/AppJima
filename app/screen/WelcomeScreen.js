import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
} from "react-native";

import Colors from "../config/colors.js";

function WelcomeScreen(props) {
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
              placeholder="Usuario"
              onChangeText={(text) => onChangeTextUser(text)}
              value={user}
            />
            <TextInput
              style={[styles.inputs, styles.passwordInput]}
              secureTextEntry={true}
              placeholderTextColor={Colors.placeholder}
              placeholder="Contraseña"
              onChangeText={(text) => onChangeTextPassword(text)}
              value={password}
            />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => Alert.alert("Sin implementar")}
            >
              <Text style={styles.textLogin}>Registrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.labelForget}>¿Olvido su contraseña?</Text>
            </TouchableOpacity>
            <View style={styles.label}>
              <Text style={styles.labelText}>¿No tienes una cuenta aun? </Text>
              <TouchableOpacity>
                <Text style={styles.labelRegister}>Registrate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
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
    borderRadius: 5,
    backgroundColor: Colors.button,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 20,
  },
  textLogin: {
    color: Colors.white,
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
});

export default WelcomeScreen;
