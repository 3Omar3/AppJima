import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";
import { LineChart } from "react-native-chart-kit";

// resource
import { t } from "../../config/locales";
import Colors from "../../config/colors";

// components
import StatusBalance from "../../components/StatusBalance";

// API
import userApi from "../../api/users";

function ReportPlant() {
  // data lineChart
  const data = {
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
      <StatusBalance />
      <View style={styles.containerGraphic}>
        <Text style={styles.graphicTitle}>
          Crecimiento saldo en plantas por predio
        </Text>
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
      <View style={styles.containerTable}>
        <ScrollView horizontal={true} persistentScrollbar={true}>
          <View style={{ marginBottom: 10 }}>
            <Table borderStyle={{ borderWidth: 0 }}>
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
                      // index % 2 && { backgroundColor: Colors.background },
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
    paddingBottom: 20,
    padding: 10,
    fontSize: 18,
    color: Colors.text,
    letterSpacing: 0.6,
    textAlign: "center",
    fontWeight: "bold",
  },
  containerTable: {
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginVertical: 20,
  },
  header: {
    height: 50,
    backgroundColor: Colors.liteGray,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textHeader: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.text,
    fontSize: 17,
    letterSpacing: 0.6,
  },
  textTable: {
    textAlign: "center",
    color: Colors.text,
    fontSize: 17,
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: Colors.white,
  },
});

export default ReportPlant;
