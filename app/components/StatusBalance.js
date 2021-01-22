import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { vh, vw } from "react-native-css-vh-vw";

// resource
import { t } from "../config/locales";
import Colors from "../config/colors";

function StatusBalance({ data }) {
  function status(totales) {
    this.total_dinero = setNumber(totales.total_dinero);
    this.total_saldo = setNumber(
      totales.total_dinero + totales.total_dinero_planta
    );
    this.total_planta = setPlants(totales.total_planta);
    this.total_saldo_planta = setNumber(totales.total_dinero_planta);

    function setPlants(n) {
      return n ? n : 0;
    }

    function setNumber(n) {
      return Math.round(n ? n : (0 * 100) / 100).toFixed(2);
    }
  }

  const balance = new status(data.totales);

  return (
    <>
      <View style={styles.containerStatus}>
        <View style={[styles.status, { marginRight: 15 }]}>
          <View style={{ padding: 5 }}>
            <MaterialCommunityIcons
              name={"coins"}
              size={vw(13.5)}
              color={Colors.chi}
            />
          </View>
          <Text style={styles.statusTitle}>${balance.total_dinero}</Text>
          <Text style={styles.statusSubTile}>{t("balance")}</Text>
        </View>
        <View style={styles.status}>
          <View style={{ padding: 5 }}>
            <MaterialCommunityIcons
              name="bank-outline"
              size={vw(13.5)}
              color={Colors.chi}
            />
          </View>
          <Text style={styles.statusTitle}>${balance.total_saldo}</Text>
          <Text style={styles.statusSubTile}>{t("balanceTotal")}</Text>
        </View>
      </View>
      <View style={styles.statusFull}>
        <View style={{ padding: 5 }}>
          <MaterialCommunityIcons
            name={"seed-outline"}
            size={vw(13.5)}
            color={Colors.chi}
          />
        </View>
        <Text style={styles.statusTitle}>${balance.total_saldo_planta}</Text>
        <View style={{ width: 200, alignItems: "center" }}>
          <Text style={[styles.statusSubTile]}>
            {t("quantity")} {balance.total_planta}
          </Text>
          <Text style={styles.statusSubTile}>{t("balancePlants")}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerStatus: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  status: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 15,
  },
  statusFull: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 15,
  },
  statusTitle: {
    fontSize: vw(4.8),
    color: Colors.text,
    fontWeight: "bold",
    letterSpacing: 0.6,
    marginBottom: 1,
  },
  statusSubTile: {
    fontSize: vw(4.8),
    letterSpacing: 0.6,
    color: Colors.gray,
    textAlign: "center",
    marginTop: 2,
  },
});

export default StatusBalance;
