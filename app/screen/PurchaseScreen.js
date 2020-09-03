import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonGroup } from "react-native-elements";

// API
import userApi from "../api/users";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import Separator from "../components/Separator";
import AlertLabel from "../components/AlertLabel";
import { ScrollView } from "react-native-gesture-handler";

// images
const map = require("../assets/png/tiger.jpg");
const jima = require("../assets/png/iconoJima.png");

function PurchaseScreen({ navigation }) {
  const buttons = ["2017", "2019", "2020"]; // button group
  const [index, setSelectedIndex] = useState(2); // button group

  return (
    <ScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <ButtonGroup
        buttons={buttons}
        containerStyle={{ height: 25, marginTop: 10 }}
        onPress={setSelectedIndex}
        selectedIndex={index}
        textStyle={{ fontSize: 13 }}
      />
      <AlertLabel
        text="El total minimo de dinero a invertir en la primera compra a la empresa es de"
        money="10,000"
        coin="MXN"
      />
      <View style={styles.card}>
        <Image style={styles.previewMap} source={map} />
        <View style={{ padding: 15 }}>
          <View style={styles.horizontalView}>
            <Text style={styles.title}>Maravillas</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ borderRadius: 3 }}>
                <MaterialCommunityIcons
                  name="map-marker-radius"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 7, borderRadius: 3 }}>
                <MaterialCommunityIcons name="camera" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <Separator />
          <View style={[styles.horizontalView, { marginBottom: 6 }]}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                style={{ marginRight: 2 }}
                name="clock"
                size={16}
                color="black"
              />
              <Text style={styles.features}>Edad:</Text>
              <Text style={{ fontSize: 13 }}>2 meses y 1 día</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                style={{ marginRight: 4 }}
                name="map-marker-path"
                size={16.5}
                color="black"
              />
              <Text style={styles.features}>Solares:</Text>
              <Text style={{ fontSize: 13 }}>270.60</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 6 }}>
            <MaterialCommunityIcons
              style={{ marginRight: 2 }}
              name="map-marker-path"
              size={16.5}
              color="black"
            />
            <Text style={styles.features}>Hectareas:</Text>
            <Text style={{ fontSize: 13 }}>47.51</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 9 }}>
            <Image
              source={jima}
              style={{ height: 20, width: 20 }}
              resizeMode="contain"
            />
            <View style={styles.containerDescripcion}>
              <Text style={styles.subDescribcion}>Total de planta:</Text>
              <Text style={styles.subDescribcion}>189,420</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 9 }}>
            <Image
              source={jima}
              style={{ height: 20, width: 20 }}
              resizeMode="contain"
            />
            <View style={styles.containerDescripcion}>
              <Text style={styles.subDescribcion}>
                Planta disponible para compra:
              </Text>
              <Text style={styles.avaibleText}>93,568</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 9 }}>
            <MaterialCommunityIcons
              style={{ marginRight: 2 }}
              name="currency-usd"
              size={18}
              color="black"
            />
            <View style={styles.containerDescripcion}>
              <Text style={styles.subDescribcion}>Precio:</Text>
              <Text style={styles.subDescribcion}>$120.00 MXN</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.textButton}>Comprar</Text>
        </TouchableOpacity>
      </View>
      <AlertLabel
        text="El total minimo de dinero a invertir en la primera compra a la empresa es de"
        money="10,000"
        coin="MXN"
      />
      <AlertLabel
        text="El total minimo de dinero a invertir en la primera compra a la empresa es de"
        money="10,000"
        coin="MXN"
      />
      <AlertLabel
        text="El total minimo de dinero a invertir en la primera compra a la empresa es de"
        money="10,000"
        coin="MXN"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  horizontalView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "92%",
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: 15,
    overflow: "hidden",
  },
  previewMap: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  features: {
    fontWeight: "bold",
    fontSize: 13,
    marginRight: 4,
  },
  containerDescripcion: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subDescribcion: {
    fontWeight: "bold",
    fontSize: 13,
  },
  avaibleText: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#0ABA86",
    fontSize: 13,
  },
  cardButton: {
    backgroundColor: "#2289DC",
    alignItems: "center",
    padding: 5,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PurchaseScreen;
