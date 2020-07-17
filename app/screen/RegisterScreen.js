import React from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { Checkbox } from "react-native-paper";
import {
  View,
  StyleSheet,
  Text,
  CheckBox,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Modal,
  Keyboard,
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

  // modal
  const [modalVisible, setModalVisible] = React.useState(false);

  // functions
  const showTerms = () => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.ContainerForm}>
            <Text style={styles.labelTitle}>Registro</Text>
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
              <TouchableOpacity>
                <Text style={styles.labelTerms} onPress={showTerms}>
                  términos y condiciones
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => Alert.alert("Sin implementar")}
            >
              <Text style={styles.textLogin}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
      <StatusBar style={"inverted"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  // main
  background: {
    flex: 1,
    justifyContent: "flex-start",
    top: 30,
  },
  labelTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: Colors.text,
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
    marginBottom: 50,
  },
  textLogin: {
    color: Colors.white,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
