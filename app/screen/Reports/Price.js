import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

// API
import userApi from "../../api/users";

// source
import { t } from "../../config/locales";
import Colors from "../../config/colors";

// components
import ChartLine from "../../components/ChartLine";

function Price() {
  // data lineChart
  const data = {
    labels: ["Jan", "Feb", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  // data lineChart
  const data2 = {
    labels: ["Jan", "Feb", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: Colors.white,
    backgroundGradientTo: Colors.white,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => Colors.chi,
    labelColor: (opacity = 1) => Colors.text,
    style: {
      borderRadius: 16,
    },
    propsForLabels: {
      // fontWeight: "bold",
    },
    propsForBackgroundLines: {
      stroke: Colors.gray,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: Colors.chi,
      fill: Colors.white,
    },
  };
  return (
    <>
      <View style={styles.containerGraphic}>
        <Text style={styles.graphicTitle}>Precios por Kilo</Text>
        <View>
          <ChartLine data={data} />
        </View>
      </View>
      <View style={styles.containerGraphic}>
        <Text style={styles.graphicTitle}>Precios por Planta</Text>
        <View>
          <ChartLine data={data2} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerGraphic: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginTop: 15,
  },
  graphicTitle: {
    paddingBottom: 20,
    padding: 10,
    fontSize: 18,
    color: Colors.text,
    letterSpacing: 0.6,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Price;
