import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Avatar } from "react-native-paper";
import { vh, vw } from "react-native-css-vh-vw";

// components
import KeyScroll from "../components/KeyScroll";
import Card from "../components/Card";
import {
  Form,
  FormField,
  FormFieldLabel,
  SubmitButton,
} from "../components/forms";

// resource
import Colors from "../config/colors";
import Routes from "../navigation/routes";
import { t } from "../config/locales";

// images
const background = require("../assets/png/background.png");
const btnRegister = require("../assets/png/btnDegradado.png");

function ProfileScreen() {
  const [date, setDate] = useState();
  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground source={background} style={styles.imgBackground}>
        <KeyScroll>
          <View
            style={{ alignItems: "center", marginTop: 50, marginBottom: 15 }}
          >
            <View
              style={{
                backgroundColor: Colors.white,
                paddingBottom: vh(2),
                padding: vw(7),
                paddingBottom: 5,
                width: vh(48),
                margin: 5,
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 2,
              }}
            >
              <Form
                initialValues={{ fontSize: vh(22) }}
                // onSubmit={handleSubmit}
                // validationSchema={validationSchema}
              >
                <Avatar.Text
                  style={{
                    backgroundColor: Colors.green,
                    alignSelf: "center",
                    marginBottom: 20,
                  }}
                  size={vh(13.2)}
                  label="EA"
                />
                <FormFieldLabel
                  name={"name"}
                  label={t("name")}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                <FormFieldLabel
                  name={"lastname"}
                  label={t("lastname")}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                {t("language") === "espanol" ? (
                  <FormFieldLabel
                    name="lastname2"
                    label={t("secondLastname")}
                    autoCorrect={false}
                    textError={styles.textError}
                  />
                ) : null}
                <Text
                  style={{
                    marginBottom: 20,
                    textTransform: "capitalize",
                    fontSize: vw(4.8),
                    color: "#5F5F5F",
                    letterSpacing: 0.5,
                  }}
                >
                  Fecha De Nacimiento
                </Text>
                <FormFieldLabel
                  name={"nacionality"}
                  label={t("nacionality")}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                <FormFieldLabel
                  name={"dni"}
                  label={"nombre del no. de identificación"}
                  placeholder={"CURP/DNI"}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                <FormFieldLabel
                  name={"numberNdi"}
                  label={"numero de identificacion"}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                <FormFieldLabel
                  name={"phone"}
                  label={"télefono"}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                <FormFieldLabel
                  name={"postal"}
                  label={"código Postal"}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                <FormFieldLabel
                  name={"address"}
                  label={"dirección"}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                <FormFieldLabel
                  name={"colonia"}
                  label={"colonia"}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                <FormFieldLabel
                  name={"city"}
                  label={"ciudad"}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                <FormFieldLabel
                  name={"state"}
                  label={"estado"}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                <FormFieldLabel
                  name={"country"}
                  label={"país"}
                  autoCorrect={false}
                  textError={styles.textError}
                />
                <FormFieldLabel
                  name={"password"}
                  label={"contraseña"}
                  autoCorrect={false}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  textContentType="password"
                />
                <SubmitButton title={"Guardar"} source={btnRegister} />
              </Form>
            </View>
          </View>
        </KeyScroll>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  container: {
    width: vw(72),
    paddingBottom: vh(2),
    padding: vw(8),
  },
});

export default ProfileScreen;
