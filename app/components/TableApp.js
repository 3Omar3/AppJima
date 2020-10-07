import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Table, Row } from "react-native-table-component";
import { SearchBar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

// Resource
import { t } from "../config/locales";
import Colors from "../config/colors";

function TableApp({ config, data }) {
  // search table
  const [search, setSearch] = useState("");

  return (
    <>
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
              placeholder={t("search")}
              onChangeText={(text) => setSearch(text)}
              value={search}
              inputStyle={{
                backgroundColor: Colors.white,
              }}
              inputContainerStyle={styles.inputSearch}
              containerStyle={styles.styleSearch}
            />
          </View>
          <View style={styles.containerPicker}>
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
      </View>
      <View style={styles.containerTable}>
        <ScrollView horizontal={true} persistentScrollbar={true}>
          <View style={{ marginBottom: 10 }}>
            <Table
              borderStyle={{ borderWidth: 2, borderColor: Colors.liteGray }}
            >
              <Row
                data={config.tableHead}
                widthArr={config.widthArr}
                style={styles.header}
                textStyle={styles.textHeader}
              />
            </Table>
            <Table borderStyle={{ borderWidth: 0 }}>
              {data.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={config.widthArr}
                  style={[
                    styles.row,
                    index % 2 && { backgroundColor: Colors.white },
                  ]}
                  textStyle={styles.textTable}
                />
              ))}
            </Table>
          </View>
        </ScrollView>
      </View>
      <View style={styles.containerPagination}>
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
    </>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    color: Colors.text,
    fontWeight: "bold",
    letterSpacing: 0.6,
    textAlign: "center",
  },

  // picker Rows
  containerPicker: {
    height: 35,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.liteGray,
    justifyContent: "center",
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
    borderWidth: 1,
    borderColor: Colors.liteGray,
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
    marginBottom: 10,
  },
  header: {
    height: 50,
    backgroundColor: Colors.white,
  },
  textHeader: {
    textAlign: "center",
    color: Colors.text,
    fontSize: 17,
    letterSpacing: 0.8,
  },
  textTable: {
    textAlign: "center",
    color: Colors.text,
    fontSize: 17,
    letterSpacing: 0.6,
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: Colors.liteGray,
  },

  // buttons back, next
  containerPagination: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  SearchSelector: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginRight: 10,
    padding: 6,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
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
    width: 91,
  },
  inputAndroid: {
    width: 91,
  },
});

export default TableApp;
