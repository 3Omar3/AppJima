import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";

// components
import ScreenScroll from "../components/ScreenScroll";
import RadioText from "../components/RadioText";
import TopHome from "../components/TopHome";

// API
import userApi from "../api/users";

function HomeScreen({ navigation }) {
  const data = [
    {
      name: "d",
      population: 6500000,
      color: "#FFDF9A",
    },
    {
      name: "d2",
      population: 6800000,
      color: "#63506C",
    },
    {
      name: "d3",
      population: 7276120,
      color: "#F03757",
    },
  ];

  return (
    <ScreenScroll justify="flex-start">
      <View style={styles.topStatus}>
        <TopHome icon="coins" title={t("balance")} text="$0.00" />
        <View style={{ top: 7 }}>
          <TopHome icon="seedling" title={t("balancePlants")} text="$0.00" />
          <Text style={styles.middleIcon}>
            {t("quantity")} 0 {t("plants")}
          </Text>
        </View>
        <TopHome
          icon="wallet"
          packageIcons={"Entypo"}
          title={t("balanceTotal")}
          text="$0.00"
          iconSize={30}
        />
      </View>
      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.titleCard}>{t("balanceInCoins")}</Text>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Text style={styles.rightTitle}>{t("balanceInPlants")}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={styles.subTitle}>{t("totalBalance")}</Text>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Text style={styles.rightTitle}>0</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <RadioText color="#FFDF9A" title={t("balanceInPlant") + " - 0%"} />
            <RadioText color="#63506C" title={t("balanceIn") + " - 0%"} />
            <RadioText
              color="#F03757"
              title={t("balancePlantInSale") + " - 0%"}
            />
          </View>
          <View style={{ top: -15 }}>
            <PieChart
              data={data}
              width={100}
              height={100}
              chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              hasLegend={false}
              absolute
            />
          </View>
        </View>
      </View>
      <View style={[styles.card, { marginVertical: 10 }]}>
        <View style={{ marginVertical: 5, marginBottom: 20 }}>
          <Text style={styles.titleCard}>{t("projections")}</Text>
          <Text style={styles.subTitle}>{t("totalInvestment")}</Text>
        </View>
        <View>
          <RadioText color="#FFDF9A" title={t("totalInvested") + " $0.00"} />
          <RadioText color="#63506C" title={t("totalProfit") + " $0.00"} />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.titleTable}>{t("lastestTransacions")}</Text>
      </View>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  topStatus: {
    flexDirection: "row",
    width: "95%",
    backgroundColor: Colors.white,
    padding: 5,
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  middleIcon: {
    top: -11,
    fontSize: 11,
    textAlign: "center",
  },
  card: {
    width: "95%",
    padding: 5,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: Colors.liteGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
  },
  titleCard: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  rightTitle: {
    fontSize: 12,
    textAlign: "right",
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  subTitle: {
    fontSize: 12,
    color: Colors.gray,
  },
  titleTable: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
});

export default HomeScreen;
