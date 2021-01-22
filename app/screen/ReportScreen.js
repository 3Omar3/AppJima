import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { vh, vw } from "react-native-css-vh-vw";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";

// screens
import { Plant, Purchase, Sale, Projection, WithDraw, Price } from "./Reports";

// variables
var button = 0; // reporte seleccionado por defecto

function ReportScreen() {
  // estados de los botones
  const off = Colors.gray;
  const on = Colors.chi;

  // React Hooks declarations
  var [screen, setScreen] = useState(<Plant />);
  var [report, setReport] = useState([on, off, off, off, off, off]);
  var [title, setTitle] = useState("Mi Planta");

  function selectReport(index, name) {
    // cambio de seleccion
    (report[button] = off), (report[index] = on);
    button = index;

    // titulo del report
    setTitle((title = name));

    switch (index) {
      case 0:
        setScreen(<Plant />);
        break;

      case 1:
        setScreen(<Purchase />);
        break;

      case 2:
        setScreen(<Sale />);
        break;

      case 3:
        setScreen(<Projection />);
        break;

      case 4:
        setScreen(<WithDraw />);
        break;

      case 5:
        setScreen(<Sale />);
        break;

      default:
        console.log("error 301");
        break;
    }

    return report;
  }

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
          <Text style={styles.textSubTitle}>
            {title} |{" "}
            <Text style={{ textTransform: "uppercase" }}>{t("coin")}</Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => setReport(selectReport(0, t("myPlant")))}
          >
            <MaterialCommunityIcons
              name="chart-donut"
              size={vw(5.5)}
              color={report[0]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => setReport(selectReport(1, t("myShopping")))}
          >
            <MaterialCommunityIcons
              name="cart-minus"
              size={vw(5.5)}
              color={report[1]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => setReport(selectReport(2, t("mySales")))}
          >
            <MaterialCommunityIcons
              name="currency-usd"
              size={vw(5.5)}
              color={report[2]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => setReport(selectReport(3, t("projections")))}
          >
            <MaterialCommunityIcons
              name="clock-outline"
              size={vw(5.5)}
              color={report[3]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => setReport(selectReport(4, t("withdrawalsFunding")))}
          >
            <MaterialCommunityIcons
              name="coin"
              size={vw(5.5)}
              color={report[4]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.containerIcon, { marginRight: 0 }]}
            onPress={() => setReport(selectReport(5, t("prices")))}
          >
            <MaterialCommunityIcons
              name="chart-bell-curve"
              size={vw(5)}
              color={report[5]}
            />
          </TouchableOpacity>
        </View>
        {/* reports */}
        {screen}
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
    fontSize: vw(5),
    fontWeight: "bold",
    color: Colors.text,
    letterSpacing: 0.8,
    textAlign: "center",
  },
  textSubTitle: {
    fontSize: vw(4.5),
    letterSpacing: 0.6,
    color: Colors.gray,
    marginVertical: 5,
  },
  containerIcon: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ReportScreen;
