import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

import Colors from "../config/colors.js";

function WelcomeScreen(props) {
  const [user, onChangeTextUser] = React.useState();
  const [password, onChangeTextPassword] = React.useState();

  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/logo-green.png")}
        />
      </View>
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
        <Text style={styles.textLogin}>Iniciar sesión</Text>
      </TouchableOpacity>
      <Text style={[styles.label, styles.labelForget]}>
        ¿Olvido su contraseña?
      </Text>
      <View style={styles.register}>
        <Text style={styles.label}>¿No tienes una cuenta?</Text>
        <Text style={[styles.label, styles.labelRegister]}>Registrate</Text>
      </View>
      <StatusBar style={"auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  logoContainer: {
    position: "absolute",
    top: 30,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  inputs: {
    backgroundColor: Colors.input,
    borderRadius: 5,
    padding: 10,
    width: "70%",
    fontSize: 18,
  },
  passwordInput: {
    marginTop: 10,
    marginBottom: 15,
  },
  loginButton: {
    width: "70%",
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.button,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: Colors.white,
    fontWeight: "bold",
  },
  label: {
    color: Colors.text,
    fontWeight: "bold",
    marginTop: 15,
  },
  labelForget: {
    color: Colors.link,
  },
  labelRegister: {
    marginLeft: 5,
    textDecorationLine: "underline",
    color: Colors.link,
  },
  register: {
    flexDirection: "row",
  },
});

export default WelcomeScreen;
