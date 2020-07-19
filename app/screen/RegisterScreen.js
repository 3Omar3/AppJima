import React from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Checkbox, Title } from "react-native-paper";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  ScrollView,
  Platform,
} from "react-native";

import Colors from "../config/colors.js";
import Languaje from "../config/languaje.js";

function WelcomeScreen(props) {
  // inputs
  const [name, onChangeTextUser] = React.useState();
  const [firstLastname, onChangeTextFirst] = React.useState();
  const [SecondLastname, onChangeTextSecond] = React.useState();
  const [email, onChangeTextEmail] = React.useState();
  const [password, onChangeTextPassword] = React.useState();
  const [confirmPassword, onChangeTextConfirm] = React.useState();
  // checkbox
  const [checked, setChecked] = React.useState(false);

  // modal
  const [modalVisible, setModalVisible] = React.useState(false);

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
              <Modal
                animationType="fade"
                transparent={Platform.Version < 26 ? false : true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <ScrollView>
                  <View style={styles.modalView}>
                    <Title style={styles.modalTitle}>{Languaje.Terms.t}</Title>
                    {/* <Title style={styles.modalTitle}>{Languaje.Terms.t}</Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p}</Text>
                    <Title style={styles.modalTitle}>{Languaje.Terms.t1}</Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p1}</Text>
                    <Title style={styles.modalTitle}>{Languaje.Terms.t2}</Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p2}</Text>
                    <Title style={styles.modalTitle}>{Languaje.Terms.t3}</Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p3}</Text>
                    <Title style={styles.modalTitle}>{Languaje.Terms.t4}</Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p4}</Text>
                    <Title style={styles.modalTitle}>{Languaje.Terms.t5}</Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p5}</Text>
                    <Title style={styles.modalTitle}>{Languaje.Terms.t6}</Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p6}</Text>
                    <Title style={styles.modalTitle}>{Languaje.Terms.t7}</Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p7}</Text>
                    <Title style={styles.modalTitle}>{Languaje.Terms.t8}</Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p8}</Text>
                    <Title style={styles.modalTitle}>{Languaje.Terms.t9}</Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p9}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t10}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p10}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t11}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p11}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t12}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p12}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t13}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p13}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t14}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p14}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t15}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p15}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t16}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p16}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t17}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p17}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t18}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p18}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t19}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p19}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t20}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p20}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t21}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p21}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t22}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p22}</Text>
                    <Title style={styles.modalTitle}>
                      {Languaje.Terms.t23}
                    </Title>
                    <Text style={styles.modaltext}>{Languaje.Terms.p23}</Text>
                    <Title style={styles.contact}>
                      {Languaje.Terms.contact}
                    </Title> */}
                    <TouchableOpacity
                      style={{
                        ...styles.openButton,
                        backgroundColor: "#2196F3",
                      }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>Cerrar</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </Modal>

              <Checkbox
                color={Colors.checkbox}
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>Aceptar </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Text style={styles.labelTerms}>términos y condiciones</Text>
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
      {Platform.Version < 25 ? false : <StatusBar style={"auto"} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

  // modal
  modalView: {
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
    backgroundColor: "#F194FF",
    textAlign: "center",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "100%",
    marginTop: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    textAlign: "center",
  },
  contact: {
    textAlign: "center",
    fontSize: 15,
  },
  modaltext: {
    textAlign: "justify",
  },
});

export default WelcomeScreen;
