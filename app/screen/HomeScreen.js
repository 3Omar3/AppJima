import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import ScreenScroll from "../components/ScreenScroll";
import Radio from "../components/Radio";
import RadioText from "../components/RadioText";

// API
import userApi from "../api/users";

function HomeScreen({ navigation }) {
  return (
    <ScreenScroll justify="flex-start">
      <View style={styles.topStatus}>
        <View style={{ marginHorizontal: 5, marginVertical: 5 }}>
          <Text style={{ fontSize: 11, fontWeight: "bold" }}>Saldo en MXN</Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>$0.00</Text>
          <View style={{ marginVertical: 10, alignItems: "center" }}>
            <FontAwesome5 name="coins" size={28} color="black" />
          </View>
        </View>
        <View style={{ marginHorizontal: 5, marginVertical: 5 }}>
          <Text style={{ fontSize: 11, fontWeight: "bold" }}>
            Saldo Plantas MXN
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>$0.00</Text>
          <View style={{ marginVertical: 10, alignItems: "center" }}>
            <FontAwesome5 name="seedling" size={28} color="black" />
            {/* <Text style={{ fontSize: 12 }}>Cantidad: 0 plantas</Text> */}
          </View>
        </View>
        <View style={{ marginHorizontal: 5, marginVertical: 5 }}>
          <Text style={{ fontSize: 11, fontWeight: "bold" }}>
            Total Saldo MXN
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>$0.00</Text>
          <View style={{ marginVertical: 10, alignItems: "center" }}>
            <Entypo name="wallet" size={30} color="black" />
          </View>
        </View>
      </View>
      <View
        style={{
          width: "95%",
          padding: 5,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <View>
          <Text
            style={{ fontSize: 12, fontWeight: "bold", letterSpacing: 0.6 }}
          >
            Saldo en pesos
          </Text>
          <Text style={{ fontSize: 12, color: Colors.gray }}>
            Total plantas saldo y fondos
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Saldo en Plantas MXN
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            0
          </Text>
        </View>
        <RadioText color="#00FFAC" title="Saldo en Planta MXN - 0%" />
        <RadioText color="#59ADFF" title="Saldo en MXN - 0%" />
        <RadioText color="#FF5959" title="Saldo Planta a la Venta MXN - 0%" />
      </View>
      <View
        style={{
          width: "95%",
          padding: 5,
          backgroundColor: "white",
          padding: 10,
          marginVertical: 10,
          borderRadius: 10,
        }}
      >
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{ fontSize: 12, fontWeight: "bold", letterSpacing: 0.6 }}
          >
            Proyecciones
          </Text>
          <Text style={{ fontSize: 12, color: Colors.gray }}>
            Total de inversion y utilidad
          </Text>
        </View>
        <View>
          <RadioText color="#00FFAC" title="Total Invertido: $0.00" />
          <RadioText color="#59ADFF" title="Utilidad Total: $0.00" />
        </View>
      </View>
      <View
        style={{
          width: "95%",
          marginVertical: 5,
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "center",
            // letterSpacing: 0.6,
          }}
        >
          ULTIMAS TRANSACCIONES
        </Text>
      </View>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  topStatus: {
    flexDirection: "row",
    width: "95%",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default HomeScreen;
