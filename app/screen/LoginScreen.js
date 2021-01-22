import React, { useState } from "react";
import { vh, vw } from "react-native-css-vh-vw";
import DialogInput from "react-native-dialog-input";
import * as Yup from "yup"; // validacion
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from "react-native";

// components
import KeyScroll from "../components/KeyScroll";
import Card from "../components/Card";
import Loading from "../components/Loading";
import ButtonImage from "../components/ButtonImage";
import IconImage from "../components/IconImage";
import TouchableText from "../components/TouchableText";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";

// resource
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";
import Login from "../controllers/Login";

// Images
const background = require("../assets/png/background.png");
const logo = require("../assets/png/jimablanco.png");
const btnLogin = require("../assets/png/btnDegradado.png");
const btnRegister = require("../assets/png/btnLogin.png");
const iconGoogle = require("../assets/png/google.png");
const iconFacebook = require("../assets/png/facebook.png");

// validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required(t("require")).email(t("invalidUser")).label(),
  password: Yup.string().required(t("require")).label(),
});

function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const login = Login({ setLoading, setLoginFailed });

  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <SafeAreaView style={styles.background}>
      <Loading loading={loading} />
      <ImageBackground
        source={background}
        style={styles.imgBackground}
        fadeDuration={0}
      >
        <KeyScroll>
          <View style={{ alignItems: "center" }}>
            <Image style={styles.logo} resizeMode="contain" source={logo} />
            <Card styleContainer={styles.container}>
              <Form
                initialValues={{ email: "", password: "" }}
                onSubmit={login.submit}
                validationSchema={validationSchema}
              >
                <ErrorMessage
                  error={t("invalidLogin")}
                  visible={loginFailed}
                  styleText={styles.textError}
                />
                <FormField
                  name="email"
                  placeholder={t("user")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  style={styles.input}
                  textError={styles.textError}
                />
                <FormField
                  name="password"
                  placeholder={t("password")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  textContentType="password"
                  style={styles.input}
                  textError={styles.textError}
                />
                <TouchableText
                  title={t("forgetPassword")}
                  styleText={styles.textForget}
                  onPress={() => {
                    setDialogVisible(!dialogVisible);
                  }}
                />
                <DialogInput
                  isDialogVisible={dialogVisible}
                  title={t("forgetPassword")}
                  message={t("messageDialogRecovery")}
                  hintInput={t("email")}
                  textInputProps={{
                    autoCapitalize: "none",
                    autoCorrect: false,
                    keyboardType: "email-address",
                  }}
                  submitText={t("submit")}
                  submitInput={(email) => {
                    login.sendMail(email), setDialogVisible(!dialogVisible);
                  }}
                  cancelText={t("cancel")}
                  closeDialog={() => {
                    setDialogVisible(!dialogVisible);
                  }}
                />
                <SubmitButton title={t("logIn")} source={btnLogin} />
              </Form>
              {/* Label */}
              <Text style={styles.textAccount}>{t("dontHaveAccount")}</Text>
              {/* button register */}
              <ButtonImage
                title={t("register")}
                source={btnRegister}
                textColor="text"
                onPress={() => navigation.navigate(Routes.REGISTER)}
              />
              {/* button icons */}
              <View style={styles.containerIcons}>
                <IconImage
                  style={[styles.icon, { marginRight: 10 * vw(1) }]}
                  source={iconGoogle}
                  onPress={() => login.google()}
                />
                <IconImage
                  style={[styles.icon, { marginRight: 0 }]}
                  source={iconFacebook}
                  onPress={() => login.facebook()}
                />
              </View>
            </Card>
          </View>
        </KeyScroll>
      </ImageBackground>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

// default styles
const styles = StyleSheet.create({
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
    marginTop: 20,
    marginBottom: 5,
  },
  container: {
    width: vw(70),
    paddingBottom: vh(2),
    padding: vw(8),
  },
  input: {
    fontSize: vw(4.5),
  },
  textError: {
    fontSize: vw(4.2),
  },
  textForget: {
    fontSize: vw(4.3),
    color: Colors.green,
    textAlign: "center",
    marginTop: vh(2.5),
  },
  textAccount: {
    fontSize: vw(4.3),
    color: Colors.gray,
    textAlign: "center",
    marginTop: vh(1.5),
  },
  textLogin: {
    letterSpacing: 0.6,
    color: "white",
    position: "absolute",
  },
  textRegister: {
    color: Colors.text,
    letterSpacing: 0.6,
    position: "absolute",
  },
  containerIcons: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: vh(1),
  },
  icon: {
    width: vw(10.5),
    height: vw(10.5),
  },
});

export default LoginScreen;
