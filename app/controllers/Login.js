import { Alert } from "react-native";
import * as Facebook from "expo-facebook"; // faceboock api
import * as Google from "expo-google-app-auth"; // google api

// source
import { t } from "../config/locales";
import authApi from "../api/auth";
import userApi from "../api/users";
import useAuth from "../auth/useAuth";

export default Login = ({ setLoading, setLoginFailed }) => {
  const auth = useAuth();

  // autentificacion
  const submit = async ({ email, password }) => {
    setLoading(true);
    const result = await authApi.login(email, password, 1); // tipo_login = 1
    setLoading(false);

    if (!result.ok) return setLoginFailed(true); // error message

    auth.logIn(result.data.token); // storage token
  };

  // funcion auxiliar de registro y login
  const register = async (info, errorMessage) => {
    const resReg = await userApi.register({ ...info });

    switch (resReg.status) {
      case 200:
      case 400:
        const resLog = await authApi.login(
          info.email,
          info.password,
          info.tipo_login
        );

        if (resLog.ok) auth.logIn(resLog.data.token);
        else Alert.alert(t("error"), t("errorEmailUse"));
        break;

      default:
        Alert.alert(t("error"), errorMessage);
        break;
    }
  };

  // autentificacion google
  async function google() {
    try {
      setLoading(true);
      const res = await Google.logInAsync({
        androidClientId: `900903839512-slau4q9aeqte0bbs00qihn6757dr4qb4.apps.googleusercontent.com`,
        iosClientId: `900903839512-ml04hdcj09fetddm8f7h3l56u4s41du8.apps.googleusercontent.com`,
        scopes: ["profile", "email"],
      });

      if (res.type !== "success") {
        setLoading(false);
        return Alert.alert(t("error"), t("errorLogGoogle"));
      }
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

      // registro y login
      register(info, t("errorLogGoogle"));
      setLoading(false);
    } catch (e) {
      setLoading(false);
      Alert.alert(t("error"), t("errorLogGoogle"));
    }
  }

  // login Facebook
  async function facebook() {
    try {
      setLoading(true);
      await Facebook.initializeAsync("380315140060022"); // must be erase the key when upload the app, because its already declared in app.json
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });

      if (type !== "success") {
        setLoading(false);
        return { cancelled: true };
      }

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
        lastname: "",
        lastname2: "",
        fk_referido: 0,
        tipo_login: 2,
      };

      // registro y login
      register(info, t("errorLogFacebook"));
      setLoading(false);
    } catch ({ message }) {
      setLoading(false);
      Alert.alert("Facebook Login Error", message);
    }
  }

  // recovery account
  const sendMail = async (email) => {
    setLoading(true);
    const result = await userApi.recoveryMail(email);
    setLoading(false);

    if (result.ok) return Alert.alert("Se ha enviado el correo!");
    else return Alert.alert(t("error"), t("errorRecoveryMail"));
  };

  return { submit, google, facebook, sendMail };
};
