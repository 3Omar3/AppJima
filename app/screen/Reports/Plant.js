import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";
import { vh, vw } from "react-native-css-vh-vw";

// resource
import { t } from "../../config/locales";
import Colors from "../../config/colors";

// components
import StatusBalance from "../../components/StatusBalance";
import ChartLine from "../../components/ChartLine";

// API
import userApi from "../../api/users";

function Plant() {
  // data lineChart
  const data = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  // data table
  const state = {
    tableHead: ["Predio", "Cantidad", "Valor", "Total"],
    widthArr: [110, 110, 110, 110],
  };
  const tableData = [
    ["Maravillas", "3000 plantas", "", "$1000000.00"],
    ["Maravillas", "3000 plantas", "", "$1000000.00"],
  ];

  return (
    <>
      {/* <StatusBalance /> */}
      <View style={styles.containerGraphic}>
        <Text style={styles.graphicTitle}>
          Crecimiento saldo en plantas por predio
        </Text>
        <View>
          <ChartLine data={data} />
        </View>
      </View>
      <View style={styles.containerTable}>
        <ScrollView horizontal={true} persistentScrollbar={true}>
          <View style={{ marginBottom: 10 }}>
            <Table
              borderStyle={{ borderWidth: 1, borderColor: Colors.liteGray }}
            >
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.textHeader}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderWidth: 0 }}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: Colors.white },
                    ]}
                    textStyle={styles.textTable}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
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
    marginBottom: 10,
    padding: 10,
    fontSize: vw(4),
    marginTop: 5,
    color: Colors.text,
    letterSpacing: 0.6,
    textAlign: "center",
    fontWeight: "bold",
  },

  // table
  containerTable: {
    overflow: "hidden",
    backgroundColor: Colors.white,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 15,
  },
  header: {
    height: 50,
    backgroundColor: Colors.white,
  },
  textHeader: {
    textAlign: "center",
    color: Colors.text,
    fontSize: vw(4.3),
    letterSpacing: 0.8,
  },
  textTable: {
    textAlign: "center",
    color: Colors.text,
    fontSize: vw(4),
    letterSpacing: 0.6,
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: Colors.liteGray,
  },
});

export default Plant;
