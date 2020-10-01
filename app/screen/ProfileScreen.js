import React from "react";
import { StyleSheet, View, ScrollView, Text, SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";

// components
import KeyScroll from "../components/KeyScroll";
import { Form, FormField, SubmitButton } from "../components/forms";

// resource
import Colors from "../config/colors";
import Routes from "../navigation/routes";
import { t } from "../config/locales";

function ProfileScreen() {
  return (
    <KeyScroll>
      <View style={{ padding: 20 }}>
        <Text>Datos de Perfil</Text>
        <Form
          initialValues={{}}
          // onSubmit={handleSubmit}
          // validationSchema={validationSchema}
        >
          <FormField name="name" placeholder={t("name")} autoCorrect={false} />
          <FormField
            name="middlename"
            placeholder={t("middlename")}
            autoCorrect={false}
            // styleInput={{}}
          />
          <FormField
            name="lastname"
            placeholder={t("secondLastname")}
            autoCorrect={false}
            // styleInput={{}}
          />
          <FormField
            name="nationality"
            placeholder={"Nacionalidad"}
            autoCorrect={false}
            // styleInput={{}}
          />
          {/* <SubmitButton title={t("register")} source={btnRegister} /> */}
        </Form>
      </View>
    </KeyScroll>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProfileScreen;
