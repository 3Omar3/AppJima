import React from "react";
import { StyleSheet, Text, View } from "react-native";

// API
import userApi from "../../api/users";

// source
import { t } from "../../config/colors";
import Colors from "../../config/colors";

// components
import ChartLine from "../../components/ChartLine";
import TableApp from "../../components/TableApp";

function Sale() {
  // data lineChart
  const dataChart = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  // data table
  const configTable = {
    tableHead: [
      "Fecha",
      "Estatus",
      "Predio",
      "Edad",
      "Cantidad",
      "Precio",
      "Total",
      "Accion",
    ],
    widthArr: [110, 110, 110, 110, 110, 130, 120, 120],
  };
  const dataTable = [
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", "", "2"],
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", "", "2"],
  ];

  return (
    <>
      <View style={styles.containerGraphic}>
        <Text style={styles.graphicTitle}>Ventas Completadas</Text>
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

export default Sale;
