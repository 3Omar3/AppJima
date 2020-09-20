import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// resource
import { t } from "../config/locales";
import Colors from "../config/colors";

function StatusBalance() {
  return (
    <>
      <View style={styles.containerStatus}>
        <View style={[styles.status, { marginRight: 15 }]}>
          <View style={{ padding: 15 }}>
            <MaterialCommunityIcons
              name={"coins"}
              size={60}
              color={Colors.chi}
            />
          </View>
          <Text style={styles.statusTitle}>$0.00</Text>
          <Text style={styles.statusSubTile}>{t("balance")}</Text>
        </View>
        <View style={styles.status}>
          <View style={{ padding: 15 }}>
            <MaterialCommunityIcons
              name="bank-outline"
              size={60}
              color={Colors.chi}
            />
          </View>
          <Text style={styles.statusTitle}>$0.00</Text>
          <Text style={styles.statusSubTile}>{t("balanceTotal")}</Text>
        </View>
      </View>
      <View style={styles.statusFull}>
        <View style={{ padding: 15 }}>
          <MaterialCommunityIcons
            name={"seed-outline"}
            size={60}
            color={"#0ABB87"}
          />
        </View>
        <Text style={styles.statusTitle}>$0.00</Text>
        <View style={{ width: 200, alignItems: "center" }}>
          <Text style={styles.statusSubTile}>{t("quantity")} 0</Text>
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
    alignSelf: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
  },
  statusFull: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
  },
  statusTitle: {
    fontSize: 22,
    color: Colors.text,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  statusSubTile: {
    fontSize: 20,
    letterSpacing: 0.6,
    color: Colors.gray,
    textAlign: "center",
  },
});

export default StatusBalance;
