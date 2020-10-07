import React from "react";
import { StyleSheet, Text, View } from "react-native";

// source
import { t } from "../../config/colors";
import Colors from "../../config/colors";

// components
import TableApp from "../../components/TableApp";

// API
import userApi from "../../api/users";
import ChartLine from "../../components/ChartLine";

function Projection() {
  // data lineChart
  const dataChart = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  // data table
  const configTable = {
    tableHead: [
      "Fecha Compra",
      "Predio",
      "Edad Compra",
      "Edad Actual",
      "Cantidad",
      "Precio de Compra",
      "Precio Actual",
      "Utilidad",
      "Totales",
    ],
    widthArr: [150, 150, 150, 150, 150, 150, 150, 150, 150],
  };
  const dataTable = [
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", "", "2"],
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", "", "2"],
  ];

  return (
    <>
      <View style={styles.containerGraphic}>
        <Text style={styles.graphicTitle}>Utilidad</Text>
        <View>
          <ChartLine data={dataChart} />
        </View>
      </View>
      <TableApp config={configTable} data={dataTable} />
    </>
  );
}

const styles = StyleSheet.create({
  // graphic
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

export default Projection;
