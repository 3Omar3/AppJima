import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Table, Row } from "react-native-table-component";
import { SearchBar } from "react-native-elements";
import NumericInput from "react-native-numeric-input";
import { LineChart } from "react-native-chart-kit";

// source
import { t } from "../../config/colors";
import Colors from "../../config/colors";

// API
import userApi from "../../api/users";

function ReportProjection() {
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

  // search table
  const [search, setSearch] = useState("");

  // data table
  const state = {
    tableHead: [
      "Fecha Compra",
      "Predio",
      "Edad\nCompra",
      "Edad\nActual",
      "Cantidad",
      "Precio de Compra",
      "Precio Actual",
      "Utilidad",
      "Totales",
    ],
    widthArr: [110, 110, 110, 110, 110, 130, 110, 120, 130],
  };
  const tableData = [
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", "", "2"],
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", "", "2"],
  ];

  return (
    <>
      <View style={styles.containerGraphic}>
        <Text style={styles.graphicTitle}>Utilidad</Text>
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
      {/* table options */}
      {/* download buttons */}
      <View style={styles.card}>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.buttonLeft}>
              <MaterialCommunityIcons
                name="file-pdf"
                size={25}
                color={Colors.red}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.buttonRight}>
              <MaterialCommunityIcons
                name="file-excel"
                size={25}
                color={Colors.chi}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* search and selector */}
        <View style={styles.containerOption}>
          <View style={styles.containerSearch}>
            <SearchBar
              placeholder="Buscar"
              onChangeText={(text) => setSearch(text)}
              value={search}
              inputStyle={{
                backgroundColor: Colors.white,
              }}
              inputContainerStyle={styles.inputSearch}
              containerStyle={styles.styleSearch}
            />
          </View>
          <NumericInput
            type="up-down"
            totalHeight={40}
            totalWidth={95}
            initValue={10}
            minValue={10}
            maxValue={100}
            textColor={Colors.text}
            rounded={true}
            onChange={(value) => console.log(value)}
            containerStyle={styles.selector}
            inputStyle={{ borderColor: Colors.liteGray }}
            iconStyle={{ color: Colors.text }}
          />
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
                        index % 2 && { backgroundColor: Colors.background },
                      ]}
                      textStyle={styles.textTable}
                    />
                  ))}
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        {/* buttons back, next */}
        <View style={{ flexDirection: "row" }}>
          <View style={styles.SearchSelector}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={25}
              color={Colors.text}
            />
          </View>
          <View style={styles.SearchSelector}>
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={Colors.text}
            />
          </View>
        </View>
      </View>
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

  // buttons download
  card: {
    backgroundColor: Colors.white,
    marginTop: 25,
    borderRadius: 10,
    padding: 10,
  },
  buttonLeft: {
    borderWidth: 1,
    borderColor: Colors.liteGray,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: "center",
    padding: 5,
    backgroundColor: Colors.white,
  },
  buttonRight: {
    borderWidth: 1,
    borderColor: Colors.liteGray,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: "center",
    padding: 5,
    backgroundColor: Colors.white,
  },

  // search, selector
  containerOption: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    flex: 1,
    marginTop: 15,
  },
  containerSearch: {
    borderRadius: 10,
    flex: 1,
    borderColor: Colors.liteGray,
    borderWidth: 1,
    marginRight: 10,
  },
  styleSearch: {
    backgroundColor: Colors.white,
    borderTopColor: Colors.white,
    borderBottomColor: Colors.white,
    borderRadius: 10,
    height: 38,
    justifyContent: "center",
  },
  inputSearch: {
    backgroundColor: Colors.white,
    height: 30,
  },
  selector: {
    backgroundColor: Colors.white,
    borderColor: Colors.liteGray,
  },

  // table
  containerTable: {
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginTop: 15,
    marginBottom: 15,
  },
  header: {
    height: 50,
    backgroundColor: Colors.background,
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

  // buttons back, next
  SearchSelector: {
    backgroundColor: Colors.background,
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
  },
});

export default ReportProjection;
