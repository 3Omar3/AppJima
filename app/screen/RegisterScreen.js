import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { CheckBox } from "react-native-elements";
import { vh, vw } from "react-native-css-vh-vw";
import * as Yup from "yup"; // validacion
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  Modal,
  Alert,
} from "react-native";

// components
import KeyScroll from "../components/KeyScroll";
import Loading from "../components/Loading";
import Card from "../components/Card";
import TouchableText from "../components/TouchableText";
import { Form, FormField, SubmitButton } from "../components/forms";

// resource
import Colors from "../config/colors";
import Routes from "../navigation/routes";
import { t } from "../config/locales";

// api
import userApi from "../api/users";

// images
const background = require("../assets/png/background.png");
const logo = require("../assets/png/jimablanco.png");
const btnRegister = require("../assets/png/btnDegradado.png");

// validation
const validationSchema = Yup.object().shape({
  name: Yup.string().required(t("require")).label(),
  lastname: Yup.string().required(t("require")).label(),
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
  const [loading, setLoading] = useState(false);

  // registro
  const handleSubmit = async (info, { resetForm }) => {
    if (checked === false) return Alert.alert(t("error"), t("warningTerms"));

    setLoading(true);
    const result = await userApi.register({ ...info }); // inserta el usuario
    setLoading(false);

    switch (result.status) {
      case 200:
        resetForm();
        Alert.alert(t("success"), t("registerSuccessMessage"));
        navigation.navigate(Routes.LOGIN);
        break;
      case 400:
        Alert.alert(t("error"), t("emailDuplicate"));
        break;
      default:
        Alert.alert(t("error"), t("errorRegister"));
        break;
    }
  };

  return (
    <View style={styles.background}>
      <Loading loading={loading} />
      <ImageBackground source={background} style={styles.imgBackground}>
        <KeyScroll>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={logo}
              fadeDuration={0}
            />
            <Card styleContainer={styles.container}>
              <Form
                initialValues={{
                  name: "",
                  lastname: "",
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
                  textError={styles.textError}
                />
                <FormField
                  name="lastname"
                  placeholder={t("firstLastname")}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                {t("language") === "espanol" ? (
                  <FormField
                    name="lastname2"
                    placeholder={t("secondLastname")}
                    autoCorrect={false}
                    textError={styles.textError}
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
                  textError={styles.textError}
                />
                <FormField
                  name="password"
                  placeholder={t("password")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  textContentType="password"
                  textError={styles.textError}
                />
                <FormField
                  name="passwordConfirm"
                  placeholder={t("passwordConfirm")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  textContentType="password"
                  textError={styles.textError}
                />
                <View style={styles.containerTerms}>
                  <CheckBox
                    containerStyle={styles.containerCheckbox}
                    checkedColor={Colors.green}
                    size={5.5 * vw(1)}
                    checked={checked}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                  <Text style={styles.textAccept}>{t("accept")}</Text>
                  {/* terminos y condiciones */}
                  <TouchableText
                    title={t("terms")}
                    textColor={"text"}
                    styleText={styles.textTerms}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  />
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
                        styleContainer={styles.containerCloseButton}
                        styleText={styles.closeButton}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      />
                    </View>
                  </Modal>
                </View>
                {/* button register */}
                <View style={{ marginTop: vh(2) }}>
                  <SubmitButton
                    title={t("register")}
                    source={btnRegister}
                    styleContainer={styles.containerButton}
                    styleText={styles.textButton}
                  />
                </View>
              </Form>
            </Card>
          </View>
        </KeyScroll>
      </ImageBackground>
      <StatusBar hidden={true} />
    </View>
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
    height: vw(31),
    width: vw(76),
    marginTop: Platform.OS === "ios" ? 50 : 20,
    marginBottom: 5,
  },
  textError: {
    fontSize: vw(4.3),
  },
  containerTerms: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textAccept: {
    fontSize: vw(3.4),
    color: Colors.gray,
  },
  textTerms: {
    fontSize: vw(3.4),
    color: Colors.text,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  containerCheckbox: {
    marginRight: 2,
    marginLeft: 0,
    marginBottom: 0,
    marginTop: vw(0.5),
    padding: 0,
  },
  container: {
    width: vw(70),
    paddingBottom: vh(2),
    padding: vw(8),
  },
  containerButton: {
    height: vh(6),
  },
  textButton: {
    fontSize: vw(4),
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
  containerCloseButton: {
    top: 10,
  },
  closeButton: {
    textAlign: "center",
    fontSize: 17,
    letterSpacing: 0.6,
    color: Colors.green,
  },
});

export default RegisterScreen;
