import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Table, Row } from "react-native-table-component";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
// import { Picker } from "@react-native-community/picker";
import RNPickerSelect from "react-native-picker-select";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import RadioText from "../components/RadioText";
import StatusBalance from "../components/StatusBalance";

// API
import userApi from "../api/users";

function HomeScreen({ navigation }) {
  const dataBalance = [
    {
      // saldo en plantas
      population: 100,
      color: Colors.liteGray,
    },
    {
      // saldo
      population: 100,
      color: Colors.placeholder,
    },
    {
      // saldo en planta en venta
      population: 100,
      color: Colors.chi,
    },
  ];

  const dataProjection = [
    {
      name: t("totalInvestment"),
      population: 100,
      color: Colors.liteGray,
      legendFontColor: Colors.gray,
      legendFontSize: 15,
    },
    {
      name: t("totalProfit"),
      population: 100,
      color: Colors.chi,
      legendFontColor: Colors.gray,
      legendFontSize: 15,
    },
  ];

  // search table
  const [search, setSearch] = useState("");

  // data table
  const state = {
    tableHead: [
      "Fecha",
      "Tipo",
      "Estatus",
      "Predio",
      "Edad",
      "Cantidad",
      "Precio",
      "Total",
    ],
    widthArr: [120, 110, 110, 110, 130, 110, 110, 110],
  };
  const tableData = [
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", "", "2"],
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", "", "2"],
  ];

  return (
    <ScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        justifyContent: "flex-start",
      }}
    >
      <View style={{ padding: 15, paddingTop: 10 }}>
        <View style={styles.containerTop}>
          <Text style={styles.textTopTitle}>
            Mi Cartera<Text style={styles.textTopSub}> | MXN</Text>
          </Text>
        </View>
        <StatusBalance />
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.textTitle}>{t("balanceInCoins")}</Text>
            <Text style={styles.textSub}>{t("totalBalance")}</Text>
          </View>
          <View style={styles.containerGraphic}>
            <PieChart
              data={dataBalance}
              width={150}
              height={150}
              chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              hasLegend={false}
              paddingLeft={37}
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <View style={[styles.containerDot, { marginBottom: 5 }]}>
              <RadioText
                text={t("balanceInPlants")}
                color={Colors.liteGray}
                styleText={styles.radioText}
              />
              <Text style={styles.textNumber}>7052.23</Text>
            </View>
            <View style={[styles.containerDot, { marginBottom: 5 }]}>
              <RadioText
                text={t("balanceIn")}
                color={Colors.gray}
                styleText={styles.radioText}
              />
              <Text style={styles.textNumber}>520.21</Text>
            </View>
            <View style={styles.containerDot}>
              <RadioText
                text={t("balancePlantInSale")}
                color={Colors.chi}
                styleText={styles.radioText}
              />
              <Text style={styles.textNumber}>1000.21</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.textTitle}>{t("projections")}</Text>
            <Text style={styles.textSub}>{t("totalInvestment")}</Text>
          </View>
          <View style={styles.containerGraphic}>
            <PieChart
              data={dataProjection}
              width={150}
              height={150}
              chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              hasLegend={false}
              paddingLeft={37}
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <View style={[styles.containerDot, { marginBottom: 5 }]}>
              <RadioText
                text={t("totalInvested")}
                color={Colors.liteGray}
                styleText={styles.radioText}
              />
              <Text style={styles.textNumber}>$7052.23</Text>
            </View>
            <View style={[styles.containerDot, { marginBottom: 5 }]}>
              <RadioText
                text={t("totalProfit")}
                color={Colors.chi}
                styleText={styles.radioText}
              />
              <Text style={styles.textNumber}>$520.21</Text>
            </View>
          </View>
        </View>
        {/* table transacciones */}
        <View style={styles.containerTransactions}>
          <Text style={styles.textTitle}>{t("lastestTransacions")}</Text>
          <View style={styles.containerSelector}>
            <RNPickerSelect
              placeholder={{}}
              onValueChange={(value) => console.log(value)}
              style={pickerSelect}
              items={[
                { label: t("generalTransactions"), value: 0 },
                { label: t("myTransactions"), value: 1 },
              ]}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.buttonLeft}>
                <MaterialCommunityIcons
                  name="file-pdf"
                  size={22}
                  color={Colors.red}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.buttonRight}>
                <MaterialCommunityIcons
                  name="file-excel"
                  size={22}
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
            <View
              style={{
                height: 35,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: Colors.liteGray,
                justifyContent: "center",
              }}
            >
              <RNPickerSelect
                placeholder={{}}
                onValueChange={(value) => console.log(value)}
                style={pickerResults}
                items={[
                  { label: "10", value: 10 },
                  { label: "25", value: 25 },
                  { label: "50", value: 50 },
                  { label: "100", value: 100 },
                ]}
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
              </View>
            </ScrollView>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.SearchSelector}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={25}
                color={Colors.gray}
              />
            </View>
            <View style={styles.SearchSelector}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={25}
                color={Colors.gray}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // status
  containerTop: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textTopTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.text,
    letterSpacing: 0.8,
    textAlign: "center",
  },
  textTopSub: {
    fontSize: 18,
    letterSpacing: 0.6,
    color: Colors.gray,
    marginVertical: 5,
    fontWeight: "normal",
  },

  // card graphics
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  textTitle: {
    fontSize: 20,
    color: Colors.text,
    fontWeight: "bold",
    letterSpacing: 0.6,
    textAlign: "center",
  },
  textSub: {
    fontSize: 18,
    letterSpacing: 0.6,
    color: Colors.gray,
    marginTop: 5,
  },
  // graphic
  containerGraphic: {
    alignItems: "center",
    marginTop: 10,
  },
  containerDot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textNumber: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  radioText: {
    fontSize: 16,
    color: Colors.gray,
  },

  // transactions
  containerTransactions: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  buttonLeft: {
    borderWidth: 1,
    borderColor: Colors.liteGray,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: Colors.white,
    height: 35,
  },
  buttonRight: {
    borderWidth: 1,
    borderColor: Colors.liteGray,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    height: 35,
    backgroundColor: Colors.white,
  },

  // search, selector
  containerOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    flex: 1,
    marginTop: 15,
  },
  containerSearch: {
    borderRadius: 10,
    width: 200,
    height: 35,
    borderColor: Colors.liteGray,
    borderWidth: 1,
    marginRight: 10,
    overflow: "hidden",
  },
  styleSearch: {
    backgroundColor: Colors.white,
    borderTopColor: Colors.white,
    borderBottomColor: Colors.white,
    borderRadius: 10,
    height: 30,
    width: 198,
    justifyContent: "center",
  },
  inputSearch: {
    backgroundColor: Colors.white,
    height: 25,
    width: 189,
  },
  containerSelector: {
    alignSelf: "flex-end",
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 35,
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 5,
  },

  // table
  containerTable: {
    overflow: "hidden",
    backgroundColor: Colors.white,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 10,
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
    height: 30,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});

const pickerSelect = StyleSheet.create({
  inputIOS: {
    width: 215,
    color: Colors.text,
  },
  inputAndroid: {
    width: 215,
    color: Colors.text,
  },
});

const pickerResults = StyleSheet.create({
  inputIOS: {
    width: 65,
  },
  inputAndroid: {
    width: 65,
  },
});

export default HomeScreen;
