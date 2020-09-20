import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components

// screens
import {
  ReportPlant,
  ReportPurchase,
  ReportProjection,
  ReportSale,
  ReportWithDraw,
  ReportPrice,
} from "./Reports";

function ReportScreen({ navigation }) {
  return (
    <ScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        justifyContent: "flex-start",
      }}
    >
      <View style={{ padding: 15 }}>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>Reportes</Text>
          <Text style={styles.textSubTitle}>Mi Planta | MXN</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.containerIcon}>
            <MaterialCommunityIcons
              name="chart-donut"
              size={25}
              color={Colors.gray}
            />
          </View>
          <View style={styles.containerIcon}>
            <MaterialCommunityIcons
              name="cart-minus"
              size={25}
              color={Colors.chi}
            />
          </View>
          <View style={styles.containerIcon}>
            <MaterialCommunityIcons
              name="currency-usd"
              size={25}
              color={Colors.gray}
            />
          </View>
          <View style={styles.containerIcon}>
            <MaterialCommunityIcons
              name="clock-outline"
              size={25}
              color={Colors.gray}
            />
          </View>
          <View style={styles.containerIcon}>
            <MaterialCommunityIcons name="coin" size={25} color={Colors.gray} />
          </View>
          <View style={[styles.containerIcon, { marginRight: 0 }]}>
            <MaterialCommunityIcons
              name="chart-bell-curve"
              size={25}
              color={Colors.gray}
            />
          </View>
        </View>
        <ReportWithDraw />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.text,
    letterSpacing: 0.8,
    textAlign: "center",
  },
  textSubTitle: {
    fontSize: 18,
    letterSpacing: 0.6,
    color: Colors.gray,
    marginVertical: 5,
  },
  containerIcon: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: "center",
  },
});

export default ReportScreen;
