import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { StackedBarChart } from "react-native-chart-kit";

// source
import { t } from "../../config/locales";
import Colors from "../../config/colors";

// components
import RadioText from "../../components/RadioText";
import TableApp from "../../components/TableApp";

// API
import userApi from "../../api/users";

function Purchase() {
  // table
  const configTable = {
    tableHead: [
      "Fecha",
      "Estatus",
      "Predio",
      "Edad",
      "Cantidad",
      "Precio",
      "Total",
      "Contrato",
      "Calificar",
    ],
    widthArr: [110, 110, 110, 110, 110, 110, 110, 110, 110],
  };
  const dataTable = [
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", "", "2"],
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", "", "2"],
  ];

  const chartConfig = {
    backgroundColor: Colors.white,
    backgroundGradientFrom: Colors.white,
    backgroundGradientTo: Colors.white,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => Colors.chi,
    labelColor: (opacity = 1) => Colors.text,
    style: {
      borderRadius: 16,
    },
    propsForLabels: {
      fontSize: 12,
    },
    propsForVerticalLabels: {
      // fontWeight: "bold",
    },
    propsForBackgroundLines: {
      stroke: Colors.liteGray,
    },
  };

  // chart bar
  const data = {
    labels: [
      "07-04-2020",
      "07-04-2020",
      "07-04-2020",
      "07-04-2020",
      "07-04-2020",
      "07-04-2020",
    ],
    data: [
      [45, 45],
      [15, 35],
      [50, 45],
      [30, 35],
      [50, 25],
      [45, 45],
    ],
    barColors: [Colors.chi, Colors.background],
  };

  return (
    <>
      <View style={styles.containerGraphic}>
        <Text style={styles.graphicTitle}>Compras</Text>
        <View style={{ marginBottom: 5 }}>
          <RadioText
            color={Colors.chi}
            text="Cantidad en plantas"
            styleText={styles.radioText}
          />
          <RadioText
            color={Colors.liteGray}
            text={"Cantidad en" + " " + t("coin")}
            styleText={styles.radioText}
          />
        </View>
        <ScrollView
          horizontal={true}
          persistentScrollbar={true}
          style={{ marginTop: 15 }}
        >
          <StackedBarChart
            style={{ marginBottom: 10 }}
            data={data}
            width={850}
            height={220}
            chartConfig={chartConfig}
            yAxisSuffix={"k"}
            showLegend={false}
          />
        </ScrollView>
      </View>
      <TableApp config={configTable} data={dataTable} />
    </>
  );
}

const styles = StyleSheet.create({
  // Graphic
  radioText: {
    fontSize: 14,
    color: Colors.gray,
  },
  containerGraphic: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginTop: 15,
    padding: 10,
    paddingBottom: 0,
  },
  graphicTitle: {
    fontSize: 19,
    color: Colors.text,
    letterSpacing: 0.6,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Purchase;
