import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components

// API
import userApi from "../api/users";
import Separator from "../components/Separator";

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
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 10,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: Colors.text,
              letterSpacing: 0.8,
              textAlign: "center",
            }}
          >
            Reportes
          </Text>
          <Text
            style={{
              fontSize: 18,
              letterSpacing: 0.6,
              color: Colors.gray,
              marginVertical: 5,
            }}
          >
            Mi Planta | MXN
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              alignItems: "center",
              flex: 1,
              marginRight: 10,
              backgroundColor: Colors.white,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <View style={{ padding: 15 }}>
              <MaterialCommunityIcons
                name={"coins"}
                size={60}
                color={Colors.chi}
              />
            </View>
            <Text
              style={{
                fontSize: 22,
                color: Colors.text,
                fontWeight: "bold",
                letterSpacing: 0.6,
              }}
            >
              $0.00
            </Text>
            <Text
              style={{
                color: Colors.gray,
                fontSize: 20,
              }}
            >
              Saldo
            </Text>
          </View>
          <View
            style={{
              alignSelf: "center",
              alignItems: "center",
              flex: 1,
              marginLeft: 10,
              backgroundColor: Colors.white,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <View style={{ padding: 15 }}>
              <MaterialCommunityIcons
                name="bank-outline"
                size={60}
                color="#0ABB87"
              />
            </View>
            <Text
              style={{ fontSize: 22, color: Colors.text, fontWeight: "bold" }}
            >
              $0.00
            </Text>
            <Text
              style={{
                fontSize: 20,
                letterSpacing: 0.6,
                color: Colors.gray,
                textAlign: "center",
              }}
            >
              Total Saldo
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            flex: 1,
            backgroundColor: Colors.white,
            borderRadius: 10,
            padding: 20,
          }}
        >
          <View style={{ padding: 15 }}>
            <MaterialCommunityIcons
              name={"seed-outline"}
              size={60}
              color={"#0ABB87"}
            />
          </View>
          <Text
            style={{ fontSize: 22, color: Colors.text, fontWeight: "bold" }}
          >
            $0.00
          </Text>
          <View style={{ width: 200, alignItems: "center" }}>
            <Text
              style={{
                color: Colors.text,
                fontSize: 20,
                letterSpacing: 0.6,
                color: Colors.gray,
              }}
            >
              Cantidad: 0
            </Text>
            <Text
              style={{
                color: Colors.text,
                fontSize: 20,
                letterSpacing: 0.6,
                color: Colors.gray,
                textAlign: "center",
              }}
            >
              Saldo Plantas
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 10,
            padding: 15,
            marginVertical: 20,
          }}
        >
          <View style={styles.tableSum}>
            <Text style={styles.totalSum}>Predio</Text>
            <Text style={[styles.totalSum, { fontWeight: "normal" }]}>0</Text>
          </View>
          <Separator />
          <View style={styles.tableSum}>
            <Text style={styles.totalSum}>Cantidad</Text>
            <Text style={[styles.totalSum, { fontWeight: "normal" }]}>
              0 plantas
            </Text>
          </View>
          <Separator />
          <View style={styles.tableSum}>
            <Text style={styles.totalSum}>Valor</Text>
            <Text style={[styles.totalSum, { fontWeight: "normal" }]}>0</Text>
          </View>
          <Separator />
          <View style={styles.tableSum}>
            <Text style={styles.totalSum}>Total</Text>
            <Text style={[styles.totalSum, { fontWeight: "normal" }]}>
              $0.00
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  totalSum: {
    fontSize: 22,
    color: Colors.text,
    letterSpacing: 0.6,
    fontWeight: "bold",
  },
  tableSum: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ReportScreen;
