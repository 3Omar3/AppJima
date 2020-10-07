import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { PieChart } from "react-native-chart-kit";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";

// components
import RadioText from "../components/RadioText";
import StatusBalance from "../components/StatusBalance";
import TableApp from "../components/TableApp";

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
      // total invertido,
      population: 100,
      color: Colors.liteGray,
      legendFontColor: Colors.gray,
      legendFontSize: 15,
    },
    {
      // utilidad total,
      population: 100,
      color: Colors.chi,
      legendFontColor: Colors.gray,
      legendFontSize: 15,
    },
  ];

  // data table
  const configTable = {
    tableHead: [
      t("date"),
      t("type"),
      t("status"),
      t("predio"),
      t("age"),
      t("quantity"),
      t("price"),
      t("total"),
    ],
    widthArr: [120, 110, 110, 110, 130, 110, 110, 110],
  };
  const data = [
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", ""],
    ["Maravillas", "3000 plantas", "", "$1000000.00", "", "2", "", ""],
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
            {t("myWallet")}
            <Text style={styles.textTopSub}> | {t("coin")}</Text>
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
              width={145}
              height={145}
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
        <TableApp data={data} config={configTable} />
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
    textTransform: "uppercase",
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
    letterSpacing: 0.8,
    textAlign: "center",
  },
  textSub: {
    fontSize: 19,
    letterSpacing: 0.8,
    color: Colors.gray,
    marginTop: 5,
  },
  // graphic
  containerGraphic: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  containerDot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textNumber: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  radioText: {
    fontSize: 17,
    color: Colors.gray,
  },
});

export default HomeScreen;
