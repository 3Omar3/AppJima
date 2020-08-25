import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { Checkbox } from "react-native-paper";
import * as Yup from "yup"; // validacion
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  Modal,
} from "react-native";

// resource
import Colors from "../config/colors.js";
import Language from "../config/Language-es.js";

// components
import KeyScroll from "../components/KeyScroll";
import Card from "../components/Card";
import TouchableText from "../components/TouchableText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

// api
import api from "../api/client";

// images
const background = require("../assets/png/background.png");
const logo = require("../assets/png/jimablanco.png");
const btnRegister = require("../assets/png/btnDegradado.png");

// validation
const validationSchema = Yup.object().shape({
  name: Yup.string().required(Language.require).label(),
  firstLastname: Yup.string().required(Language.require).label(),
  secondLastname: Yup.string().label(),
  email: Yup.string()
    .required(Language.require)
    .email(Language.invalidEmail)
    .label(),
  password: Yup.string().required(Language.require).label(),
  passwordConfirm: Yup.string()
    .required(Language.require)
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .label(),
});

function RegisterScreen({ navigation }) {
  // checkbox
  const [checked, setChecked] = useState(false);

  // modal
  const [modalVisible, setModalVisible] = useState(false);

  // api
  registerUser = async () => {
    try {
      const response = await api.post("/usuarios", {
        correo: "omarnuel123@gmail.com",
        contrasenia: "admin123",
        foto: "",
        tipo_login: "1",
        fk_referido: "0",
        puesto: "",
      });

      const { message } = response.data;
      console.log(response.data);
    } catch (res) {
      setState({ errorMessage: res.data.error });
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground source={background} style={styles.imgBackground}>
        <KeyScroll>
          <View style={{ alignItems: "center" }}>
            <Image style={styles.logo} resizeMode="contain" source={logo} />
            <Card>
              <AppForm
                initialValues={{
                  name: "",
                  firstLastname: "",
                  secondLastname: "",
                  email: "",
                  password: "",
                  passwordConfirm: "",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
              >
                <AppFormField
                  name="name"
                  placeholder={Language.name}
                  autoCorrect={false}
                />
                <AppFormField
                  name="firstLastname"
                  placeholder={Language.firstLastname}
                  autoCorrect={false}
                />
                <AppFormField
                  name="secondLastname"
                  placeholder={Language.secondLastname}
                  autoCorrect={false}
                />
                <AppFormField
                  name="email"
                  placeholder={Language.email}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                />
                <AppFormField
                  name="password"
                  placeholder={Language.password}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  textContentType="password"
                />
                <AppFormField
                  name="passwordConfirm"
                  placeholder={Language.passwordConfirm}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  textContentType="password"
                />
                <View style={styles.containerTerms}>
                  {/* Modal muestra los terminos y condiciones */}
                  <Modal
                    animationType="fade"
                    transparent={true}
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
                        source={{ html: Language.document }}
                      />
                      <TouchableText
                        title={Language.close}
                        style={styles.closeButton}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      />
                    </View>
                  </Modal>
                  <Checkbox
                    color={Colors.primary}
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                  <Text style={styles.textAccept}>{Language.accept}</Text>
                  <TouchableText
                    title={Language.terms}
                    textColor={"text"}
                    style={styles.textTerms}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  />
                </View>
                {/* button register */}
                <SubmitButton
                  title={Language.register}
                  source={btnRegister}
                  onPress={registerUser}
                />
              </AppForm>
            </Card>
          </View>
        </KeyScroll>
      </ImageBackground>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // main
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
  containerTerms: {
    flexDirection: "row",
    alignItems: "center",
  },
  textAccept: {
    fontSize: 12,
    color: Colors.gray,
  },
  textTerms: {
    fontSize: 12,
    color: Colors.text,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  card: {
    backgroundColor: "white",
    width: 270,
    height: 460,
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
    marginBottom: 10,
  },

  // modal
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 0.6,
    color: "dodgerblue",
    top: 10,
  },
});

export default RegisterScreen;
