import React from "react";
import { StyleSheet, Text, View } from "react-native";
// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import ScreenScroll from "../components/ScreenScroll";
import RadioText from "../components/RadioText";
import TopHome from "../components/TopHome";

// API
import userApi from "../api/users";

function HomeScreen({ navigation }) {
  return (
    <ScreenScroll justify="flex-start">
      <View style={styles.topStatus}>
        <TopHome icon="coins" title="Saldo en MXN" text="$0.00" />
        {/* <View style={{ top: 7 }}> */}
        <TopHome icon="seedling" title="Saldo Plantas MXN" text="$0.00" />
        {/* <Text
            style={{
              top: -11,
              fontSize: 11,
              textAlign: "center",
            }}
          >
            Cantidad: 0 plantas
          </Text> */}
        {/* </View> */}
        <TopHome
          icon="wallet"
          packageIcons={"Entypo"}
          title="Total Saldo MXN"
          text="$0.00"
          iconSize={30}
        />
      </View>
      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.titleCard}>Saldo en pesos</Text>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Text
              style={{
                fontSize: 12,
                textAlign: "right",
                fontWeight: "bold",
                letterSpacing: 0.6,
              }}
            >
              Saldo en Plantas MXN
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={styles.subTitle}>Total plantas saldo y fondos</Text>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Text
              style={{
                fontSize: 12,
                textAlign: "right",
                fontWeight: "bold",
                letterSpacing: 0.6,
              }}
            >
              0
            </Text>
          </View>
        </View>
        <RadioText color="#00FFAC" title="Saldo en Planta MXN - 0%" />
        <RadioText color="#59ADFF" title="Saldo en MXN - 0%" />
        <RadioText color="#FF5959" title="Saldo Planta en Venta MXN - 0%" />
      </View>
      <View style={[styles.card, { marginVertical: 10 }]}>
        <View style={{ marginVertical: 5, marginBottom: 20 }}>
          <Text style={styles.titleCard}>Proyecciones</Text>
          <Text style={styles.subTitle}>Total de inversion y utilidad</Text>
        </View>
        <View>
          <RadioText color="#00FFAC" title="Total Invertido: $0.00" />
          <RadioText color="#59ADFF" title="Utilidad Total: $0.00" />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.titleTable}>ULTIMAS TRANSACCIONES</Text>
      </View>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  topStatus: {
    flexDirection: "row",
    width: "95%",
    backgroundColor: Colors.white,
    padding: 5,
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  card: {
    width: "95%",
    padding: 5,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
  },
  titleCard: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  subTitle: {
    fontSize: 12,
    color: Colors.gray,
  },
  titleTable: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    // letterSpacing: 0.6,
  },
});

export default HomeScreen;
