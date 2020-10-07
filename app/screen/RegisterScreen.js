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
  Alert,
} from "react-native";

// resource
import Colors from "../config/colors";
import Routes from "../navigation/routes";
import { t } from "../config/locales";

// components
import KeyScroll from "../components/KeyScroll";
import Card from "../components/Card";
import TouchableText from "../components/TouchableText";
import { Form, FormField, SubmitButton } from "../components/forms";

// api
import userApi from "../api/users";

// images
const background = require("../assets/png/background.png");
const logo = require("../assets/png/jimablanco.png");
const btnRegister = require("../assets/png/btnDegradado.png");

// validation
const validationSchema = Yup.object().shape({
  name: Yup.string().required(t("require")).label(),
  lastname1: Yup.string().required(t("require")).label(),
  lastname2: Yup.string().label(),
  email: Yup.string().required(t("require")).email(t("invalidEmail")).label(),
  password: Yup.string().required(t("require")).label(),
  passwordConfirm: Yup.string()
    .required(t("require"))
    .oneOf([Yup.ref("password"), null], t("passwordMatch"))
    .label(),
});

function RegisterScreen({ navigation }) {
  const [checked, setChecked] = useState(false); // checkbox
  const [modalVisible, setModalVisible] = useState(false); // modal

  // registro
  const handleSubmit = async (info) => {
    if (checked === false) return Alert.alert(t("error"), t("warningTerms"));

    const result = await userApi.register({ ...info }); // inserta el usuario

    if (!result.ok) {
      if (result.data.auth === false)
        return Alert.alert(t("error"), t("emailDuplicate"));
      else return alert(t("errorRegister"));
    }

    Alert.alert(t("registerSuccessTitle"), t("registerSuccessMessage"));
    navigation.navigate(Routes.LOGIN);
  };

  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground source={background} style={styles.imgBackground}>
        <KeyScroll>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={logo}
              fadeDuration={0}
            />
            <Card>
              <Form
                initialValues={{
                  name: "",
                  lastname1: "",
                  lastname2: "",
                  email: "",
                  password: "",
                  passwordConfirm: "",
                  fk_referido: 0,
                  tipo_login: 1,
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <FormField
                  name="name"
                  placeholder={t("name")}
                  autoCorrect={false}
                />
                <FormField
                  name="lastname1"
                  placeholder={t("lastname")}
                  autoCorrect={false}
                />
                {t("language") === "espanol" ? (
                  <FormField
                    name="lastname2"
                    placeholder={t("secondLastname")}
                    autoCorrect={false}
                  />
                ) : null}
                <FormField
                  name="email"
                  placeholder={t("emailAddress")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                />
                <FormField
                  name="password"
                  placeholder={t("password")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  textContentType="password"
                />
                <FormField
                  name="passwordConfirm"
                  placeholder={t("passwordConfirm")}
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
                        source={{ html: t("document") }}
                      />
                      <TouchableText
                        title={t("close")}
                        style={styles.closeButton}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      />
                    </View>
                  </Modal>
                  <Checkbox
                    color={Colors.green}
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                  <Text style={styles.textAccept}>{t("accept")}</Text>
                  <TouchableText
                    title={t("terms")}
                    textColor={"text"}
                    style={styles.textTerms}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  />
                </View>
                {/* button register */}
                <SubmitButton title={t("register")} source={btnRegister} />
              </Form>
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
