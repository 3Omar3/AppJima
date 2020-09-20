import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

// source
import { t } from "../../config/locales";
import Colors from "../../config/colors";

// API
import userApi from "../../api/users";

function ReportPrice() {
  // data lineChart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  // data lineChart
  const data2 = {
    labels: ["January", "February", "March", "April", "May", "June"],
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
    labelColor: (opacity = 1) => Colors.gray,
    style: {
      borderRadius: 16,
    },
    propsForLabels: {
      fontWeight: "bold",
    },
    propsForBackgroundLines: {
      stroke: Colors.white,
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
          <LineChart
            data={{
              labels: ["Jan", "Feb", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 110,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 110,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width - 30} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier // smoth lines
            style={{ marginBottom: 8 }}
          />
        </View>
      </View>
      <View style={styles.containerGraphic}>
        <Text style={styles.graphicTitle}>Precios por Planta</Text>
        <View>
          <LineChart
            data={{
              labels: ["Jan", "Feb", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 110,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 110,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width - 30} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier // smoth lines
            style={{ marginBottom: 8 }}
          />
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

export default ReportPrice;
