import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { vh, vw } from "react-native-css-vh-vw";
import MapView, { Marker, Polygon } from "react-native-maps";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";

// components
import Separator from "../components/Separator";

// images
const jima = require("../assets/png/iconoJima.png");

function CardPreview({ data, textButton, onPress, onPhotoPress }) {
  function setNumber(n) {
    return Number(n ? n : (0 * 100) / 100).toFixed(2);
  }

  function comprobarBoton() {
    if (data.plantasDisponibles)
      return (
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.cardButton} onPress={onPress}>
            <Text style={styles.textButton}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      );
  }

  return (
    <View style={styles.card}>
      <MapView
        region={{
          latitude: data.ubicacion.latitude,
          longitude: data.ubicacion.longitude,
          latitudeDelta:
            Math.sqrt(
              Math.pow(
                data.coordenadas[2].latitude - data.coordenadas[0].latitude,
                2
              ) +
                Math.pow(
                  data.coordenadas[2].longitude - data.coordenadas[0].longitude,
                  2
                )
            ) + 0.0039,
          longitudeDelta: 0.01,
        }}
        mapType="hybrid"
        style={styles.previewMap}
      >
        <Marker
          coordinate={{
            latitude: data.ubicacion.latitude,
            longitude: data.ubicacion.longitude,
          }}
        />
        <Polygon
          coordinates={data.coordenadas}
          strokeColor={Colors.red}
          fillColor={"#ff000050"}
        />
      </MapView>
      <View style={{ padding: 10 }}>
        <View style={styles.containerTitle}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL(
                `https://www.google.com/maps/dir//'${data.ubicacion.latitude},${data.ubicacion.longitude}'/@'${data.ubicacion.latitude},${data.ubicacion.longitude}'800m/data=!3m1!1e3!4m7!4m6!1m0!1m3!2m2!1d-102.459814!2d20.899354!3e0?hl=es-ES`
              );
            }}
          >
            <MaterialCommunityIcons
              name="map-marker"
              size={vw(5)}
              color={Colors.chi}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{data.nombre}</Text>
          <TouchableOpacity style={styles.button} onPress={onPhotoPress}>
            <MaterialCommunityIcons
              name="camera-burst"
              size={vw(5)}
              color={Colors.chi}
            />
          </TouchableOpacity>
        </View>
        <Separator />
        <View style={{ padding: 3 }}>
          <View style={[styles.containerIconText, { marginTop: 10 }]}>
            <View style={styles.containerHorizontal}>
              <MaterialCommunityIcons
                style={{ marginRight: 4 }}
                name="timer-sand"
                size={vw(5)}
                color={Colors.text}
              />
              <Text style={styles.features}>{t("age")}</Text>
            </View>
            <Text style={styles.textNumber}>{data.edad}</Text>
          </View>
          <View style={styles.containerIconText}>
            <View style={styles.containerHorizontal}>
              <MaterialCommunityIcons
                style={{ marginRight: 4 }}
                name="solar-panel"
                size={vw(5)}
                color={Colors.text}
              />
              <Text style={styles.features}>{t("solar")}:</Text>
            </View>
            <Text style={styles.textNumber}>{setNumber(data.solares)}</Text>
          </View>
          <View style={styles.containerIconText}>
            <View style={styles.containerHorizontal}>
              <MaterialCommunityIcons
                style={{ marginRight: 4 }}
                name="signal-distance-variant"
                size={vw(5)}
                color={Colors.text}
              />
              <Text style={styles.features}>{t("hectares")}:</Text>
            </View>
            <Text style={styles.textNumber}>{setNumber(data.hectareas)}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={jima}
                style={styles.iconJima}
                resizeMode="contain"
              />
              <Text style={styles.subDescribcion}>{t("totalPlant")}:</Text>
            </View>
            <View>
              <Text style={styles.textNumber}>{data.total_planta}</Text>
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
              <Image
                source={jima}
                style={styles.iconJima}
                resizeMode="contain"
              />
              <Text style={styles.subDescribcion}>{t("avaiblePlants")}:</Text>
            </View>
            <View>
              <Text style={styles.avaibleText}>{data.plantasDisponibles}</Text>
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
                name="coins"
                size={vw(5)}
                color={Colors.text}
              />
              <Text style={styles.subDescribcion}>{t("price")}:</Text>
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
              ${setNumber(data.precio)} {t("coin")}
            </Text>
          </View>
        </View>
      </View>
      {comprobarBoton()}
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
    height: 190,
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
    fontSize: vw(4.8),
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
    fontSize: vw(4),
    marginRight: 4,
    color: Colors.text,
    letterSpacing: 0.6,
  },
  textNumber: {
    fontSize: vw(4),
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
    fontSize: vw(4),
    color: Colors.text,
  },
  avaibleText: {
    fontWeight: "bold",
    fontSize: vw(4),
    color: Colors.chi,
    letterSpacing: 0.6,
  },
  cardButton: {
    backgroundColor: Colors.chi,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: "100%",
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
    fontSize: vw(4.3),
    color: Colors.white,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
});

export default CardPreview;
