import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { vh, vw } from "react-native-css-vh-vw";
import { Table, Row } from "react-native-table-component";
import { SearchBar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

// Resource
import { t } from "../config/locales";
import Colors from "../config/colors";

function TableApp({
  title,
  config,
  data,
  items,
  selectChange,
  onSearch,
  showPicker = true,
  maxHeight = 457,
  styleTitle,
}) {
  // search table
  const [search, setSearch] = useState("");

  function usePicker() {
    if (showPicker)
      return (
        <View style={styles.containerSelector}>
          <RNPickerSelect
            placeholder={{}}
            onValueChange={selectChange}
            style={pickerSelect}
            Icon={() => {
              return (
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={vh(3.5)}
                  color={Colors.gray}
                  style={{ marginTop: "16%", marginRight: 2 }}
                />
              );
            }}
            items={items}
            useNativeAndroidPickerStyle={false}
          />
        </View>
      );
  }

  return (
    <>
      {/* table transacciones */}
      <View style={styles.containerTransactions}>
        <Text style={[styles.textTitle, styleTitle]}>{title}</Text>
        {usePicker()}
        {/* search and selector */}
        {/* <View style={styles.containerOption}>
          <View style={styles.containerSearch}>
            <SearchBar
              placeholder={t("search")}
              onChangeText={onSearch}
              value={search}
              inputStyle={{
                backgroundColor: Colors.white,
                fontSize: vw(4.2),
              }}
              inputContainerStyle={styles.inputSearch}
              containerStyle={styles.styleSearch}
              searchIcon={() => {
                return (
                  <MaterialCommunityIcons
                    name="magnify"
                    size={vw(4.5)}
                    color={Colors.gray}
                    style={{ marginLeft: -10, marginRight: -10 }}
                  />
                );
              }}
              clearIcon={false}
            />
          </View>
        </View> */}
      </View>
      <View style={[styles.containerTable, { maxHeight: maxHeight }]}>
        <ScrollView horizontal={true} persistentScrollbar={true}>
          <View>
            <Table
              borderStyle={{
                borderWidth: 1,
                borderColor: Colors.liteGray,
              }}
            >
              <Row
                data={config.tableHead}
                widthArr={config.widthArr}
                style={styles.header}
                textStyle={styles.textHeader}
              />
            </Table>
            <ScrollView style={styles.dataWrapper} nestedScrollEnabled={true}>
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
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: vw(5),
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
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    padding: 15,
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

  // search
  containerOption: {
    borderRadius: 10,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  containerSearch: {
    borderRadius: 10,
    width: vw(43),
    height: vh(5.2),
    borderColor: Colors.liteGray,
    borderWidth: 1,
    overflow: "hidden",
  },
  styleSearch: {
    backgroundColor: Colors.white,
    borderTopColor: Colors.white,
    borderBottomColor: Colors.white,
    borderRadius: 10,
    height: vh(5.2),
    width: vw(41),
    justifyContent: "center",
  },
  inputSearch: {
    backgroundColor: Colors.white,
    height: vh(5.2),
    width: vw(41),
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
    marginBottom: 10,
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
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
    height: vh(7),
    backgroundColor: Colors.liteGray,
  },
});

const pickerSelect = StyleSheet.create({
  inputIOS: {
    color: Colors.text,
    fontSize: vw(4),
    paddingLeft: 8,
    paddingRight: 25,
    alignSelf: "center",
    letterSpacing: 0.6,
  },
  inputAndroid: {
    color: Colors.text,
    fontSize: vw(4),
    paddingLeft: 8,
    paddingRight: 25,
    alignSelf: "center",
    letterSpacing: 0.6,
  },
});

const pickerResults = StyleSheet.create({
  inputIOS: {
    color: Colors.text,
    fontSize: vw(4),
    paddingLeft: 8,
    paddingRight: 25,
    alignSelf: "center",
    letterSpacing: 0.6,
  },
  inputAndroid: {
    color: Colors.text,
    fontSize: vw(4),
    paddingLeft: 8,
    paddingRight: 25,
    alignSelf: "center",
    letterSpacing: 0.6,
  },
});

export default TableApp;
