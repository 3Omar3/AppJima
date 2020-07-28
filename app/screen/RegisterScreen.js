import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Checkbox } from "react-native-paper";
import { Button } from "react-native-paper";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Platform,
  StatusBar,
  Image,
} from "react-native";

import Colors from "../config/colors.js";
import Languaje from "../config/language-es.js";

// carga los terminos y condiciones
function loadTerms() {
  var html =
    "<style> h3{text-align:center; font-size: 20} h4{text-align:center;} p{text-align:justify;}</style>";

  // for in itera atravez del nombre del los elementos
  for (var doc in Languaje.Terms) html += Languaje.Terms[doc]; // y obtenemos los datos dependiendo del nombre del elemento

  return html;
}

function RegisterScreen(props) {
  // inputs
  const [name, onChangeTextUser] = useState();
  const [firstLastname, onChangeTextFirst] = useState();
  const [SecondLastname, onChangeTextSecond] = useState();
  const [email, onChangeTextEmail] = useState();
  const [password, onChangeTextPassword] = useState();
  const [confirmPassword, onChangeTextConfirm] = useState();
  // checkbox
  const [checked, setChecked] = useState(false);

  // modal
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAwareScrollView
        extraScrollHeight={50}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        style={{ flex: 1 }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.ContainerForm}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require("../assets/png/jimablanco.png")}
            />
            <View style={styles.viewTitle}>
              <Text style={styles.labelTitle}>Registro</Text>
            </View>
            <TextInput
              style={styles.inputs}
              placeholderTextColor={Colors.placeholder}
              placeholder={Languaje.name}
              onChangeText={(text) => onChangeTextUser(text)}
              value={name}
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputs}
              placeholderTextColor={Colors.placeholder}
              placeholder={Languaje.firstLastname}
              onChangeText={(text) => onChangeTextFirst(text)}
              value={firstLastname}
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputs}
              placeholderTextColor={Colors.placeholder}
              placeholder={Languaje.secondLastname}
              onChangeText={(text) => onChangeTextSecond(text)}
              value={SecondLastname}
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputs}
              placeholderTextColor={Colors.placeholder}
              placeholder={Languaje.email}
              onChangeText={(text) => onChangeTextEmail(text)}
              autoCompleteType={"email"}
              value={email}
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputs}
              secureTextEntry={true}
              placeholderTextColor={Colors.placeholder}
              placeholder={Languaje.password}
              onChangeText={(text) => onChangeTextPassword(text)}
              value={password}
            />
            <TextInput
              style={styles.inputs}
              secureTextEntry={true}
              placeholderTextColor={Colors.placeholder}
              placeholder={Languaje.confirmPassword}
              onChangeText={(text) => onChangeTextConfirm(text)}
              value={confirmPassword}
            />
            <View style={styles.terms}>
              <Modal
                animationType="fade"
                transparent={Platform.Version < 26 ? false : true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.modalView}>
                  <WebView
                    scalesPageToFit={false}
                    bounces={false}
                    scrollEnabled={false}
                    style={{ flex: 1 }}
                    source={{ html: loadTerms() }}
                  />
                  <TouchableOpacity
                    style={styles.openButton}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Cerrar</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <Checkbox
                color={Colors.checkbox}
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>{Languaje.acept}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Text style={styles.labelTerms}>{Languaje.terms}</Text>
              </TouchableOpacity>
            </View>
            <Button
              uppercase={false}
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.loginButton}
            >
              Registrate
            </Button>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // main
  background: {
    flex: 1,
    justifyContent: "flex-start",
    // backgroundColor: Colors.white,
  },
  logo: {
    width: 160,
    height: 90,
  },
  viewTitle: {
    alignItems: "flex-start",
    width: "70%",
  },
  labelTitle: {
    fontSize: 25,
    color: Colors.text,
    paddingBottom: 15,
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
    marginLeft: 5,
  },
  loginButton: {
    width: "70%",
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.button,
    justifyContent: "center",
    marginTop: 15,
  },
  textLogin: {
    color: Colors.textButton,
    fontWeight: "bold",
  },

  // modal
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: Colors.button,
    textAlign: "center",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "100%",
    marginTop: 15,
  },
  textStyle: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegisterScreen;
