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
        <View style={styles.containerTitle}>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name="map-marker"
              size={25}
              color={Colors.chi}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{data.title}</Text>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name="camera-burst"
              size={28}
              color={Colors.chi}
            />
          </TouchableOpacity>
        </View>
        <Separator />
        <View style={[styles.containerIconText, { marginTop: 10 }]}>
          <View style={styles.containerHorizontal}>
            <MaterialCommunityIcons
              style={{ marginRight: 4 }}
              name="timer-sand"
              size={18}
              color={Colors.text}
            />
            <Text style={styles.features}>{t("age")}</Text>
          </View>
          <Text style={styles.textNumber}>{data.age}</Text>
        </View>
        <View style={styles.containerIconText}>
          <View style={styles.containerHorizontal}>
            <MaterialCommunityIcons
              style={{ marginRight: 4 }}
              name="solar-panel"
              size={18}
              color={Colors.text}
            />
            <Text style={styles.features}>{t("solar")}</Text>
          </View>
          <Text style={styles.textNumber}>{data.solares}</Text>
        </View>
        <View style={styles.containerIconText}>
          <View style={styles.containerHorizontal}>
            <MaterialCommunityIcons
              style={{ marginRight: 4 }}
              name="signal-distance-variant"
              size={18}
              color={Colors.text}
            />
            <Text style={styles.features}>{t("hectares")}</Text>
          </View>
          <Text style={styles.textNumber}>{data.hectareas}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={jima} style={styles.iconJima} resizeMode="contain" />
            <Text style={styles.subDescribcion}>{t("totalPlant")}</Text>
          </View>
          <View>
            <Text style={styles.textNumber}>{data.totalPlant}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={jima} style={styles.iconJima} resizeMode="contain" />
            <Text style={styles.subDescribcion}>{t("avaiblePlants")}</Text>
          </View>
          <View>
            <Text style={styles.avaibleText}>{data.avaiblePlants}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={styles.containerHorizontal}>
            <MaterialCommunityIcons
              style={{ marginRight: 4 }}
              name="coin"
              size={18}
              color={Colors.text}
            />
            <Text style={styles.subDescribcion}>{t("price")}</Text>
          </View>
          <Text
            style={[
              styles.subDescribcion,
              {
                textTransform: "uppercase",
                letterSpacing: 0.6,
              },
            ]}
          >
            ${data.price} {t("coin")}
          </Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  previewMap: {
    width: "100%",
    height: 250,
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    alignItems: "center",
  },
  button: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    alignItems: "center",
    padding: 5,
    width: 60,
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 22,
    letterSpacing: 0.6,
    color: Colors.text,
    textAlign: "center",
  },
  containerIconText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  containerHorizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  features: {
    fontSize: 18,
    marginRight: 4,
    color: Colors.text,
    letterSpacing: 0.6,
  },
  textNumber: {
    fontSize: 18,
    color: Colors.text,
    letterSpacing: 0.6,
  },
  containerDescripcion: {
    flex: 1,
    justifyContent: "space-between",
  },
  iconJima: {
    height: 22,
    width: 22,
  },
  subDescribcion: {
    letterSpacing: 0.6,
    fontSize: 18,
    color: Colors.text,
  },
  avaibleText: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.chi,
    letterSpacing: 0.6,
  },
  cardButton: {
    backgroundColor: Colors.chi,
    alignItems: "center",
    justifyContent: "center",
    height: 28,
    borderRadius: 10,
    width: "93%",
    marginBottom: 10,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  containerButton: {
    marginTop: 5,
    alignItems: "center",
  },
  textButton: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "bold",
    letterSpacing: 0.8,
  },
});

export default CardPreview;
