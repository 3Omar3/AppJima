import React, { useState } from "react";
import DialogInput from "react-native-dialog-input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput as Input } from "react-native-paper";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  StatusBar,
  ImageBackground,
} from "react-native";

// resource
import ButtonImage from "../components/ButtonImage";
import IconImage from "../components/IconImage";
import Language from "../config/language-es";
import Colors from "../config/colors";
import Routes from "../navigation/routes";
import { TextInput } from "react-native-gesture-handler";

// Images
const background = require("../assets/png/background.png");
const logo = require("../assets/png/jimablanco.png");
const btnLogin = require("../assets/png/btnDegradado.png");
const btnRegister = require("../assets/png/btnLogin.png");
const iconGoogle = require("../assets/png/google.png");
const iconFacebook = require("../assets/png/facebook.png");

function LoginScreen({ navigation }) {
  // variables
  const [user, onChangeTextUser] = useState("");
  const [password, onChangeTextPassword] = useState("");

  // dialog
  const [recover, onChangeRecover] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground source={background} style={styles.imgBackground}>
        {/* Dialog */}
        <DialogInput
          isDialogVisible={dialogVisible}
          title={Language.forgetPassword}
          message={Language.messageDialogRecovery}
          hintInput={Language.email}
          submitText={Language.submit}
          submitInput={(text) => {
            onChangeRecover(text), setDialogVisible(!dialogVisible);
          }}
          cancelText={Language.cancel}
          closeDialog={() => {
            setDialogVisible(!dialogVisible);
          }}
        />
        {/* end Dialog */}
        <KeyboardAwareScrollView
          extraScrollHeight={50}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ alignItems: "center" }}>
              <Image style={styles.logo} resizeMode="contain" source={logo} />
              <View style={styles.card}>
                <Input
                  placeholder={Language.user}
                  dense={true}
                  style={styles.inputUser}
                  theme={inputTheme}
                />
                <Input
                  placeholder={Language.password}
                  dense={true}
                  secureTextEntry={true}
                  style={styles.inputRegister}
                  theme={inputTheme}
                />
                <TextInput placeholder="Nombre" />
                {/* show dialog */}
                <TouchableOpacity
                  onPress={() => {
                    setDialogVisible(!dialogVisible);
                  }}
                >
                  <Text style={styles.textForget}>
                    {Language.forgetPassword}
                  </Text>
                </TouchableOpacity>
                {/* button login */}
                <ButtonImage
                  title={Language.logIn}
                  source={btnLogin}
                  onPress={() => navigation.navigate(Routes.REGISTER)}
                />
                <Text style={styles.textAccount}>
                  {Language.dontHaveAccount}
                </Text>
                {/* button register */}
                <ButtonImage
                  title={Language.register}
                  source={btnRegister}
                  textColor="text"
                  onPress={() => navigation.navigate(Routes.REGISTER)}
                />
                {/* button icons */}
                <View style={styles.containerIcons}>
                  <IconImage source={iconGoogle} />
                  <IconImage source={iconFacebook} />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </ImageBackground>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

// paper theme
const inputTheme = {
  colors: {
    primary: Colors.primary,
    underlineColor: "transparent",
    background: Colors.white,
  },
};

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
  card: {
    backgroundColor: "white",
    width: 270,
    height: 390,
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
  inputUser: {
    backgroundColor: "white",
    marginBottom: 15,
  },
  inputRegister: {
    backgroundColor: "white",
    marginBottom: 10,
  },
  textForget: {
    color: Colors.primary,
    textAlign: "right",
    padding: 5,
  },
  textAccount: {
    color: Colors.gray,
    textAlign: "center",
    marginTop: 10,
  },
  btnTouch: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 65,
    width: "100%",
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
  icon: {
    width: 40,
    height: 40,
    marginLeft: 44,
  },
});

export default LoginScreen;
