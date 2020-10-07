import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { ButtonGroup } from "react-native-elements";

// API
import userApi from "../api/users";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import CardPreview from "../components/CardPreview";

function SaleScreen({ navigation }) {
  const buttons = ["2017", "2020"]; // button group
  const [index, setSelectedIndex] = useState(1); // button group

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
          textButton={t("sell")}
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
});

export default SaleScreen;
