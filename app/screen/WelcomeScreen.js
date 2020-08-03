import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Text,
} from "react-native";

// source
import Language from "../config/language-es";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// images
const logo = require("../assets/png/Logo.png");

function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scroll}
      >
        <Image style={styles.logo} resizeMode="contain" source={logo} />
        <View style={styles.containerWelcome}>
          <Text style={styles.title}>{Language.welcome}</Text>
          <Text style={styles.text}>{Language.welcomeMessage}</Text>
        </View>
        {/* button login */}
        <TouchableOpacity
          style={styles.btnLogIn}
          onPress={() => navigation.navigate(Routes.LOGIN)}
        >
          <Text style={styles.textLogin}>{Language.logIn}</Text>
        </TouchableOpacity>
        {/* button Register */}
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate(Routes.REGISTER)}
        >
          <Text style={styles.textRegister}>{Language.registerMe}</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 170,
    width: 265,
    position: "absolute",
    top: 5,
  },
  containerWelcome: {
    position: "absolute",
    top: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 23,
    letterSpacing: 2, // 2.6
    marginBottom: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 19, // 18
    letterSpacing: 0.5,
    textAlign: "center",
    lineHeight: 26,
    fontWeight: "200",
    marginBottom: 40,
    marginLeft: "10%",
    marginRight: "10%",
  },
  btnLogIn: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: Colors.white,
    letterSpacing: 0.6,
    fontSize: 17,
  },
  btnRegister: {
    backgroundColor: Colors.liteGray,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textRegister: {
    color: Colors.text,
    letterSpacing: 0.6,
    fontSize: 17,
  },
});

export default WelcomeScreen;
