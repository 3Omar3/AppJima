import React, { useState } from "react";
import { vh, vw } from "react-native-css-vh-vw";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

// resource
import { t } from "../config/locales";
import Colors from "../config/colors";

// components
import Spinner from "../components/Spinner";
import TableApp from "../components/TableApp";

function ConfirmPurchase({ navigation, route }) {
  const data = route.params;
  const [plants, setPlants] = useState(0);
  const [invest, setInvest] = useState(0);
  const [discount, setDiscount] = useState(0);
  let timer = null; // controla las peticiones

  function setNumber(n) {
    return Number(n).toFixed(2);
  }

  function calculateInvest(i = 0) {
    calculatePlants(Number(i / data.precio).toFixed(0));
  }

  function calculatePlants(p = 0) {
    setPlants(p);
    setInvest(p * data.precio);

    switch (true) {
      case p > 2000 && p <= 7000:
        setDiscount(2);
        break;
      case p > 7000 && p <= 14000:
        setDiscount(3);
        break;
      case p > 14000 && p <= 35000:
        setDiscount(5);
        break;
      case p > 35000 && p <= 70000:
        setDiscount(6);
        break;
      case p > 70000 && p <= 140000:
        setDiscount(8);
        break;
      case p > 140000:
        setDiscount(10);
        break;
      default:
        setDiscount(0);
        break;
    }
  }

  function getTotalInvested() {
    return setNumber(data.precio * plants);
  }

  function getSave() {
    return setNumber(getTotalInvested() - (data.precio - discount) * plants);
  }

  function getTotal() {
    return setNumber(getTotalInvested() - getSave());
  }

  // data table
  const dataTable = [
    ["100 - 2,000", `${setNumber(data.precio)} MXN`],
    ["2,001	- 7,000", `${setNumber(data.precio - 2)} MXN`],
    ["7,001	- 14,000", `${setNumber(data.precio - 3)} MXN`],
    ["14,001 - 35,000", `${setNumber(data.precio - 5)} MXN`],
    ["35,001 - 70,000", `${setNumber(data.precio - 6)} MXN`],
    ["70,001 - 140,000", `${setNumber(data.precio - 8)} MXN`],
    ["140,001 - x", `${setNumber(data.precio - 10)} MXN`],
  ];
  const configTable = {
    tableHead: [t("quantity"), t("price")],
    widthArr: [vw(38), vw(38)],
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.txtTitle}>{data.nombre}</Text>
          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            <View style={styles.containerHorizontal}>
              <Text style={styles.txtFeature}>{t("age")}:</Text>
              <Text style={styles.txtFeature}>{data.edad}</Text>
            </View>
            <View style={styles.containerHorizontal}>
              <Text style={styles.txtFeature}>{t("price")}:</Text>
              <Text style={styles.txtFeature}>${setNumber(data.precio)}</Text>
            </View>
            <View style={styles.containerHorizontal}>
              <Text style={styles.txtFeature}>{t("avaiblePlants")}:</Text>
              <Text style={[styles.txtFeature, { color: Colors.chi }]}>
                {data.plantasDisponibles}
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "center", marginBottom: 15 }}>
            <TableApp
              title={t("discount table")}
              styleTitle={{
                fontSize: vw(4),
                fontWeight: "normal",
              }}
              config={configTable}
              showPicker={false}
              data={dataTable}
              maxHeight={vh(57)}
            />
          </View>
          <Spinner
            styleText={{ fontSize: vw(3.8), textAlign: "center" }}
            text={t("plants to buy")}
            icon="flower-outline"
            config={{
              step: 1,
              precision: 1,
              value: plants,
              max: data.plantasDisponibles,
              min: 0,
            }}
            onChange={(n) => {
              clearTimeout(timer);
              timer = setTimeout(() => {
                calculatePlants(n);
              }, 250);
            }}
          />
          <Spinner
            styleText={{ fontSize: vw(3.8), textAlign: "center", marginTop: 5 }}
            text={t("money to invest")}
            config={{
              step: 1,
              precision: 1,
              value: invest,
              max: data.plantasDisponibles * data.precio,
              min: 0,
            }}
            icon="coins"
            onChange={(n) => {
              clearTimeout(timer);
              timer = setTimeout(() => {
                calculateInvest(n);
              }, 250);
            }}
          />
          <View style={{ marginHorizontal: 10, marginTop: 20 }}>
            <View style={styles.containerHorizontal}>
              <Text style={styles.txtFinal}>{t("totalInvested")}:</Text>
              <Text style={styles.txtFinal}>${getTotalInvested()}</Text>
            </View>
            <View style={styles.containerHorizontal}>
              <Text style={styles.txtFinal}>{t("discount in price")}:</Text>
              <Text style={[styles.txtFinal, { color: Colors.chi }]}>
                ${setNumber(discount)}
              </Text>
            </View>
            <View style={styles.containerHorizontal}>
              <Text style={styles.txtFinal}>{t("you save")}:</Text>
              <Text style={[styles.txtFinal, { color: Colors.chi }]}>
                ${getSave()}
              </Text>
            </View>
            <View style={styles.containerHorizontal}>
              <Text style={styles.txtFinal}>{t("total")}:</Text>
              <Text style={styles.txtFinal}>${getTotal()}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                t("are you sure"),
                t("alert purchase"),
                [
                  {
                    text: t("cancel"),
                    onPress: () => {},
                    style: "cancel",
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") },
                ],
                { cancelable: false }
              );
            }}
          >
            <Text style={styles.button}>{t("make a purchase")}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// default styles
const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    padding: 20,
    paddingTop: 25,
    margin: 20,
    borderRadius: 15,
  },
  containerHorizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  txtTitle: {
    fontSize: vw(4.8),
    alignSelf: "center",
    marginBottom: 20,
    letterSpacing: 0.6,
    backgroundColor: Colors.chi,
    padding: 3,
    paddingHorizontal: 20,
    color: Colors.white,
    borderRadius: 15,
  },
  txtFeature: {
    color: Colors.text,
    fontSize: vw(4.3),
    letterSpacing: 0.6,
  },
  txtFinal: {
    textAlign: "center",
    color: Colors.text,
    fontSize: vw(4),
    letterSpacing: 0.6,
    marginVertical: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 0,
  },
  button: {
    backgroundColor: Colors.chi,
    color: Colors.white,
    padding: 8,
    textAlign: "center",
    borderRadius: 15,
    fontWeight: "bold",
    letterSpacing: 0.6,
    fontSize: vw(4.3),
    marginTop: 20,
  },
});

export default ConfirmPurchase;
