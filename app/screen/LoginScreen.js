import React, { useState, useContext } from "react";
import { vh, vw } from "react-native-css-vh-vw";
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

// api
import authApi from "../api/auth";
import userApi from "../api/users";
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

function LoginScreen({ navigation }) {
  // login
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  // autentificacion
  const handleSubmit = async ({ email, password }) => {
    setLoading(true);
    const result = await authApi.login(email, password, 1);
    setLoading(false);

    if (!result.ok) return setLoginFailed(true); // mensaje error
    setLoginFailed(false); // mensaje error

    const token = result.data.token;
    authContext.setUser(token);
  };

  // autentificacion google
  async function signInWithGoogleAsync() {
    try {
      setLoading(true);
      const res = await Google.logInAsync({
        androidClientId: `900903839512-slau4q9aeqte0bbs00qihn6757dr4qb4.apps.googleusercontent.com`,
        iosClientId: `900903839512-ml04hdcj09fetddm8f7h3l56u4s41du8.apps.googleusercontent.com`,
        scopes: ["profile", "email"],
      });

      if (res.type === "success") {
        // datos de usuario
        const info = {
          email: res.user.email,
          password: res.user.id,
          name: res.user.givenName,
          lastname: res.user.familyName,
          lastname2: "",
          fk_referido: 0,
          tipo_login: 4,
        };

        // registro de usuario
        const resReg = await userApi.register({ ...info });

        switch (resReg.status) {
          case 200:
          case 400:
            const resLog = await authApi.login(
              info.email,
              info.password,
              info.tipo_login
            );

            if (resLog.ok) {
              const token = resLog.data.token;
              authContext.setUser(token);
            } else Alert.alert(t("error"), t("errorEmailUse"));
            break;

          default:
            Alert.alert(t("error"), t("errorLogGoogle"));
            break;
        }
        setLoading(false);
      } else {
        setLoading(false);
        Alert.alert(t("error"), t("errorLogGoogle"));
      }
    } catch (e) {
      setLoading(false);
      Alert.alert(t("error"), t("errorLogGoogle"));
    }
  }

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
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const res = await fetch(
          `https://graph.facebook.com/me?fields=email,name,id&access_token=${token}`
        );
        const data = await res.json(); // email, name

        // datos relevates
        const info = {
          email: data.email,
          password: data.id,
          name: data.name,
          lastname1: "",
          lastname2: "",
          fk_referido: 0,
          tipo_login: 2,
        };

        // registro de usuario
        setLoading(true);
        const resReg = await userApi.register({ ...info });

        switch (resReg.status) {
          case 200:
          case 400:
            const resLog = await authApi.login(
              info.email,
              info.password,
              info.tipo_login
            );
            setLoading(false);

            if (resLog.ok) {
              const token = resLog.data.token;
              authContext.setUser(token);
            } else Alert.alert(t("error"), t("errorEmailUse"));
            break;

          default:
            Alert.alert(t("error"), t("errorLogFacebook"));
            break;
        }
        setLoading(false);
      } else return { cancelled: true };
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  // recovery account
  const sendMail = async (email) => {
    setLoading(true);
    const result = await userApi.recoveryMail(email);
    setLoading(false);

    switch (result.status) {
      case 200:
        Alert.alert("Se ha enviado el correo!");
        break;
      default:
        Alert.alert(t("error"), t("errorRecoveryMail"));
        break;
    }
  };

  // dialog
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground
        source={background}
        style={styles.imgBackground}
        fadeDuration={0}
      >
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
          submitInput={(email) => {
            sendMail(email), setDialogVisible(!dialogVisible);
          }}
          cancelText={t("cancel")}
          closeDialog={() => {
            setDialogVisible(!dialogVisible);
          }}
        />
        {/* end Dialog */}
        <KeyScroll>
          <View style={{ alignItems: "center" }}>
            <Loading loading={loading} />
            <Image style={styles.logo} resizeMode="contain" source={logo} />
            <Card styleContainer={styles.container}>
              <Form
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
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
                  onPress={() => signInWithGoogleAsync()}
                />
                <IconImage
                  style={[styles.icon, { marginRight: 0 }]}
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
    height: vw(31),
    width: vw(76),
    marginTop: 20,
    marginBottom: 5,
  },
  container: {
    width: vw(72),
    paddingBottom: vh(2),
    padding: vw(8),
  },
  input: {
    fontSize: vw(4.9),
  },
  textError: {
    fontSize: vw(4.3),
  },
  textForget: {
    fontSize: vw(4.5),
    color: Colors.green,
    textAlign: "center",
    marginTop: vh(2),
  },
  textAccount: {
    fontSize: vw(4.5),
    color: Colors.gray,
    textAlign: "center",
    marginTop: vh(1),
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
    width: vw(11.5),
    height: vw(11.5),
  },
});

export default LoginScreen;
