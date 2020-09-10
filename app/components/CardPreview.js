import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";

// components
import Separator from "../components/Separator";

// images
const map = require("../assets/png/tiger.jpg");
const jima = require("../assets/png/iconoJima.png");

function CardPreview({ data, textButton }) {
  return (
    <View style={styles.card}>
      <Image style={styles.previewMap} source={map} />
      <View style={{ padding: 10 }}>
        <View style={styles.horizontalView}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ borderRadius: 3 }}>
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={23}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 7, borderRadius: 3 }}>
              <MaterialCommunityIcons name="camera" size={23} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <Separator />
        <View style={[styles.horizontalView, { marginBottom: 10 }]}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={{ marginRight: 4 }}
              name="clock"
              size={15}
              color="black"
            />
            <Text style={styles.features}>{t("age")}</Text>
            <Text style={{ fontSize: 13 }}>{data.age}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={{ marginRight: 3 }}
              name="camera-control"
              size={16.5}
              color="black"
            />
            <Text style={styles.features}>{t("solar")}</Text>
            <Text style={{ fontSize: 13 }}>{data.solares}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <MaterialCommunityIcons
            style={{ marginRight: 3 }}
            name="camera-control"
            size={16.5}
            color="black"
          />
          <Text style={styles.features}>{t("hectares")}</Text>
          <Text style={{ fontSize: 13 }}>{data.hectareas}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 9 }}>
          <Image source={jima} style={styles.iconJima} resizeMode="contain" />
          <View style={styles.containerDescripcion}>
            <Text style={styles.subDescribcion}>{t("totalPlant")}</Text>
            <Text style={styles.subDescribcion}>{data.totalPlant}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 9 }}>
          <Image source={jima} style={styles.iconJima} resizeMode="contain" />
          <View style={styles.containerDescripcion}>
            <Text style={styles.subDescribcion}>{t("avaiblePlants")}</Text>
            <Text style={styles.avaibleText}>{data.avaiblePlants}</Text>
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
            <Text style={styles.subDescribcion}>{t("price")}</Text>
            <Text
              style={[styles.subDescribcion, { textTransform: "uppercase" }]}
            >
              ${data.price} {t("coin")}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.textButton}>{textButton}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "92%",
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: Colors.liteGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
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
  iconJima: {
    height: 20,
    width: 20,
  },
  subDescribcion: {
    fontWeight: "bold",
    fontSize: 13,
  },
  avaibleText: {
    fontWeight: "bold",
    fontSize: 13,
    color: Colors.chi,
  },
  cardButton: {
    backgroundColor: Colors.chi,
    alignItems: "center",
    padding: 5,
  },
  textButton: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
});

export default CardPreview;
