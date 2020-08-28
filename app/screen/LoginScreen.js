import React, { useState, useContext } from "react";
import DialogInput from "react-native-dialog-input";
import * as Yup from "yup"; // validacion
import * as Facebook from "expo-facebook"; // faceboock login
import * as Google from "expo-google-app-auth"; // google login
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Alert,
  StatusBar,
  ImageBackground,
} from "react-native";

// resource
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import KeyScroll from "../components/KeyScroll";
import Card from "../components/Card";
import ButtonImage from "../components/ButtonImage";
import IconImage from "../components/IconImage";
import TouchableText from "../components/TouchableText";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";

// api
import authApi from "../api/auth";
import AuthContext from "../auth/context";

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

// login Facebook
async function logInFacebook() {
  try {
    await Facebook.initializeAsync("3278020435573594"); // must be erase the key when upload the app, because its already declared in app.json
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    } else {
      return { cancelled: true };
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

// login google
async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      androidClientId: `900903839512-slau4q9aeqte0bbs00qihn6757dr4qb4.apps.googleusercontent.com`,
      iosClientId: `900903839512-ml04hdcj09fetddm8f7h3l56u4s41du8.apps.googleusercontent.com`,
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

function LoginScreen({ navigation }) {
  // login
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const token = result.data.token;
    authContext.setUser(token);
  };

  // dialog
  const [recover, setRecover] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground source={background} style={styles.imgBackground}>
        {/* Dialog */}
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
          submitInput={(text) => {
            setRecover(text), setDialogVisible(!dialogVisible);
          }}
          cancelText={t("cancel")}
          closeDialog={() => {
            setDialogVisible(!dialogVisible);
          }}
        />
        {/* end Dialog */}
        <KeyScroll>
          <View style={{ alignItems: "center" }}>
            <Image style={styles.logo} resizeMode="contain" source={logo} />
            <Card paddingBottom={19}>
              <Form
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <ErrorMessage error={t("invalidLogin")} visible={loginFailed} />
                <FormField
                  name="email"
                  placeholder={t("user")}
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
                <TouchableText
                  title={t("forgetPassword")}
                  style={styles.textForget}
                  onPress={() => {
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
                  source={iconGoogle}
                  onPress={() => signInWithGoogleAsync()}
                />
                <IconImage
                  source={iconFacebook}
                  onPress={() => logInFacebook()}
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
    height: 110,
    width: 250,
    marginTop: 20,
    marginBottom: 8,
  },
  textForget: {
    color: Colors.primary,
    textAlign: "center",
    marginTop: 10,
  },
  textAccount: {
    color: Colors.gray,
    textAlign: "center",
    marginTop: 10,
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
    flexDirection: "row",
    marginTop: 3,
  },
});

export default LoginScreen;
