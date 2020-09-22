import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// screens
import {
  ReportPlant,
  ReportPurchase,
  ReportProjection,
  ReportSale,
  ReportWithDraw,
  ReportPrice,
} from "./Reports";
import { set } from "react-native-reanimated";

// estados de los botones
const off = Colors.gray;
const on = Colors.chi;

var state = [on, off, off, off, off, off];

function setState(index) {
  // reset state
  state = [off, off, off, off, off, off];
  // active report
  state[index] = on;

  console.log(state);
}

// show report
function showReport() {
  return <ReportPrice />;
}

function ReportScreen({ navigation }) {
  return (
    <ScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        justifyContent: "flex-start",
      }}
    >
      {/* top */}
      <View style={{ padding: 15, paddingTop: 10 }}>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>Reportes</Text>
          <Text style={styles.textSubTitle}>Mi Planta | MXN</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => setState(0)}
          >
            <MaterialCommunityIcons
              name="chart-donut"
              size={25}
              color={state[0]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => setState(1)}
          >
            <MaterialCommunityIcons
              name="cart-minus"
              size={25}
              color={state[1]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => setState(2)}
          >
            <MaterialCommunityIcons
              name="currency-usd"
              size={25}
              color={state[2]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => setState(3)}
          >
            <MaterialCommunityIcons
              name="clock-outline"
              size={25}
              color={state[3]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => setState(4)}
          >
            <MaterialCommunityIcons name="coin" size={25} color={state[4]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.containerIcon, { marginRight: 0 }]}
            onPress={() => setState(5)}
          >
            <MaterialCommunityIcons
              name="chart-bell-curve"
              size={25}
              color={state[5]}
            />
          </TouchableOpacity>
        </View>
        {/* reports */}
        {showReport()}
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
