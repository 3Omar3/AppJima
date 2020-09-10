import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
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
        alignItems: "center",
      }}
    >
      <ButtonGroup
        buttons={buttons}
        containerStyle={{
          height: 25,
          marginTop: 10,
          width: "92%",
          borderRadius: 5,
        }}
        onPress={setSelectedIndex}
        selectedIndex={index}
        textStyle={{ fontSize: 13 }}
        selectedButtonStyle={{ backgroundColor: Colors.chi }}
      />
      <AlertLabel text={t("warning")} money="10,000" coin={t("coin")} />
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default PurchaseScreen;
