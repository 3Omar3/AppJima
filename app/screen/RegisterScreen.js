import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  CheckBox,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import Colors from "../config/colors.js";

function WelcomeScreen(props) {
  // inputs
  const [name, onChangeTextUser] = React.useState();
  const [firstLastname, onChangeTextFirst] = React.useState();
  const [SecondLastname, onChangeTextSecond] = React.useState();
  const [email, onChangeTextEmail] = React.useState();
  const [password, onChangeTextPassword] = React.useState();
  const [confirmPassword, onChangeTextConfirm] = React.useState();
  // checkbox
  const [isSelected, setSelection] = React.useState(false);

  return (
    <View style={styles.background}>
      <Text style={styles.labelTitle}>Registro</Text>
      <View style={styles.ContainerForm}>
        <TextInput
          style={styles.inputs}
          placeholderTextColor={Colors.placeholder}
          placeholder="Nombre"
          onChangeText={(text) => onChangeTextUser(text)}
          value={name}
        />
        <TextInput
          style={styles.inputs}
          placeholderTextColor={Colors.placeholder}
          placeholder="Primer apellido"
          onChangeText={(text) => onChangeTextFirst(text)}
          value={firstLastname}
        />
        <TextInput
          style={styles.inputs}
          placeholderTextColor={Colors.placeholder}
          placeholder="Segundo apellido"
          onChangeText={(text) => onChangeTextSecond(text)}
          value={SecondLastname}
        />
        <TextInput
          style={styles.inputs}
          placeholderTextColor={Colors.placeholder}
          placeholder="Correo electrónico"
          onChangeText={(text) => onChangeTextEmail(text)}
          value={email}
        />
        <TextInput
          style={[styles.inputs, styles.passwordInput]}
          secureTextEntry={true}
          placeholderTextColor={Colors.placeholder}
          placeholder="Contraseña"
          onChangeText={(text) => onChangeTextPassword(text)}
          value={password}
        />
        <TextInput
          style={[styles.inputs, styles.passwordInput]}
          secureTextEntry={true}
          placeholderTextColor={Colors.placeholder}
          placeholder="Confirmar Contraseña"
          onChangeText={(text) => onChangeTextConfirm(text)}
          value={confirmPassword}
        />
        <View style={styles.terms}>
          <CheckBox value={isSelected} onValueChange={setSelection} />
          <Text style={styles.label}>Aceptar </Text>
          <Text style={styles.labelTerms}>términos y condiciones</Text>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => Alert.alert("Sin implementar")}
        >
          <Text style={styles.textLogin}>Registrar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style={"dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    top: 30,
  },
  labelTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: Colors.text,
    left: 25,
    paddingBottom: 30,
  },
  ContainerForm: {
    alignItems: "center",
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
    marginBottom: 15,
  },
  terms: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: Colors.gray,
  },
  labelTerms: {
    color: Colors.text,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  loginButton: {
    width: "70%",
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.button,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textLogin: {
    color: Colors.white,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
