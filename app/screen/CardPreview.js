import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CardPreview({ title }) {
  return (
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
              size={18}
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
            size={18}
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
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CardPreview;
