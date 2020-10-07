import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { ButtonGroup } from "react-native-elements";

// API
import userApi from "../api/users";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import AlertLabel from "../components/AlertLabel";
import CardPreview from "../components/CardPreview";

function PurchaseScreen({ navigation }) {
  const buttons = ["2017", "2019", "2020"]; // button group
  const [index, setSelectedIndex] = useState(2); // button group

  return (
    <ScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        justifyContent: "flex-start",
      }}
    >
      <View style={{ padding: 15, paddingTop: 10 }}>
        <ButtonGroup
          buttons={buttons}
          containerStyle={styles.buttonGroupContainer}
          onPress={setSelectedIndex}
          selectedIndex={index}
          textStyle={styles.textButtonGroup}
          selectedButtonStyle={{ backgroundColor: Colors.chi }}
        />
        <AlertLabel>
          <Text style={styles.textAlert}>
            {t("warning")}
            <Text style={styles.textBold}>{" 10,000 " + t("coin")}</Text>
          </Text>
        </AlertLabel>
        <CardPreview
          data={{
            title: "Maravillas",
            age: "6 meses y 1 dia",
            solares: "270.60",
            hectareas: "47.51",
            totalPlant: "189,420",
            avaiblePlants: "93,568",
            price: "120.00",
          }}
          textButton={t("buy")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonGroupContainer: {
    height: 27,
    borderRadius: 5,
    marginTop: 0,
    marginHorizontal: 0,
    borderColor: Colors.white,
  },
  textButtonGroup: {
    fontSize: 14,
    color: Colors.gray,
  },
  textAlert: {
    color: Colors.text,
    textAlign: "justify",
    lineHeight: 20,
    letterSpacing: 0.6,
  },
  textBold: { color: Colors.text, fontWeight: "bold" },
});

export default PurchaseScreen;
