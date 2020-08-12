import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Checkbox } from "react-native-paper";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";

// resource
import ButtonImage from "../components/ButtonImage";
import TextInput from "../components/TextInput";
import Colors from "../config/colors.js";
import Languaje from "../config/language-es.js";

// images
const background = require("../assets/png/background.png");
const logo = require("../assets/png/jimablanco.png");
const btnRegister = require("../assets/png/btnDegradado.png");

// api
import api from "../api/client";

// carga los terminos y condiciones
function loadTerms() {
  var html =
    "<style> h3{text-align:center; font-size: 20} h4{text-align:center;} p{text-align:justify;}</style>";

  // for in itera atravez del nombre del los elementos
  for (var doc in Languaje.Terms) html += Languaje.Terms[doc]; // obteniene los datos dependiendo del nombre del elemento

  return html;
}

function RegisterScreen({ navigation }) {
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
        <KeyboardAwareScrollView
          extraScrollHeight={50}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ alignItems: "center" }}>
              <Image style={styles.logo} resizeMode="contain" source={logo} />
              <View style={styles.card}>
                <TextInput placeholder={Languaje.name} />
                <TextInput placeholder={Languaje.firstLastname} />
                <TextInput placeholder={Languaje.secondLastname} />
                <TextInput placeholder={Languaje.email} />
                <TextInput placeholder={Languaje.password} />
                <TextInput placeholder={Languaje.confirmPassword} />
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
                        source={{ html: loadTerms() }}
                      />
                      <TouchableOpacity
                        style={styles.openButton}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={styles.textStyle}>{Languaje.close}</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                  <Checkbox
                    color={Colors.primary}
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                  <Text style={styles.textAccept}>{Languaje.accept}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textTerms}>{Languaje.terms}</Text>
                  </TouchableOpacity>
                </View>
                {/* button register */}
                <ButtonImage
                  title={Languaje.register}
                  source={btnRegister}
                  onPress={registerUser}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
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
    textAlign: "center",
    width: "100%",
    top: 10,
    marginTop: 10,
  },
  textStyle: {
    color: "dodgerblue",
    textAlign: "center",
    letterSpacing: 0.6,
    fontSize: 18,
  },
});

export default RegisterScreen;
