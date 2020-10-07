import React from "react";
import { StyleSheet, Text, View } from "react-native";

// API
import userApi from "../api/users";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import KeyScroll from "../components/KeyScroll";
import Separator from "../components/Separator";
import ChartLine from "../components/ChartLine";
import TextDescribcion from "../components/TextDescribcion";
import Spinner from "../components/Spinner";

function SimulationScreen() {
  const dataChart = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
    // legend: ["Rainy Days"], // optional
  };

  return (
    <KeyScroll>
      <View style={{ padding: 10 }}>
        <View style={[styles.card, { marginBottom: 10 }]}>
          <Text style={styles.textTop}>{t("simulationTitle")}</Text>
        </View>
        <View style={[styles.card, { paddingBottom: 25 }]}>
          <Text style={styles.textTitle}>{t("Investment")}</Text>
          <Separator />
          <Spinner
            text={t("numberofPlants")}
            config={{ step: 1, value: 0, max: 400000 }}
            icon="flower-outline"
            onChange={() => console.log("planta n")}
          />
          <Spinner
            text={t("price")}
            config={{
              step: 0.5,
              precision: 1,
              value: 0,
              max: 1000,
              type: "float",
            }}
            icon="coin"
            onChange={() => console.log("precio n")}
          />
          <Spinner
            text={t("totalInvested")}
            config={{
              step: 0.05,
              precision: 2,
              value: 0,
              max: 50000000,
              type: "float",
            }}
            icon="coin"
            onChange={() => console.log("precio n")}
          />
        </View>
        <View style={[styles.card, { paddingBottom: 25 }]}>
          <Text style={styles.textTitle}>{t("result")}</Text>
          <Separator />
          <Spinner
            text={t("price")}
            config={{
              step: 0.5,
              precision: 1,
              value: 0,
              max: 1000,
              type: "float",
            }}
            icon="coin"
            onChange={() => console.log("precio n")}
          />
          <Spinner
            text={t("yearsPlanted")}
            config={{
              step: 0.5,
              precision: 1,
              value: 0,
              max: 6,
              type: "float",
            }}
            icon="timer-sand"
            onChange={() => console.log("años n")}
          />
          <Spinner
            text={t("kilosperPlant")}
            config={{
              step: 0.5,
              precision: 1,
              value: 0,
              max: 100,
              type: "float",
            }}
            icon="scale-balance"
            onChange={() => console.log("kilos n")}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>{t("hectares")}</Text>
          <Text style={styles.textDescribcion}>
            0.03 ( 3,990 {t("plantperHectares")})
          </Text>
          <Separator />
          <Text style={styles.text}>{t("solar")}</Text>
          <Text style={styles.textDescribcion}>
            0.14 (700 {t("plantperSolar")})
          </Text>
          <Separator />
          <TextDescribcion
            title={t("totalInvested") + ":"}
            describcion="$12,000.00"
          />
          <Separator />
          <TextDescribcion
            title={t("grossProfit") + ":"}
            describcion="$137,500.00"
            styleDescribcion={styles.textHighlight}
          />
          <Separator />
          <TextDescribcion
            title={t("yieldperMonth")}
            describcion="10%"
            styleDescribcion={styles.textHighlight}
          />
          <Separator />
          <TextDescribcion title={t("yieldperYear")} describcion="124%" />
          <Separator />
          <Text style={styles.text}>{t("netProfit")}</Text>
          <Text style={[styles.textHighlight, { marginVertical: 5 }]}>
            $89,375.00 ( $137,500 - 35%)
          </Text>
          <Separator />
          <TextDescribcion title={t("profitperPlant")} describcion="$893.75" />
          <Separator />
          <TextDescribcion title={t("profitperDay")} describcion="$41.38" />
          <Separator />
          <TextDescribcion
            title={t("profitperMonth")}
            describcion="$1,241.32"
          />
          <Separator />
          <TextDescribcion
            title={t("profitperYear")}
            describcion="$14,895.83"
          />
        </View>
        <View style={styles.containerGraphic}>
          <ChartLine data={dataChart} />
        </View>
      </View>
    </KeyScroll>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  textTop: {
    fontSize: 17,
    textAlign: "center",
    letterSpacing: 0.6,
    color: Colors.text,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 0.8,
    textAlign: "center",
    color: Colors.text,
    marginBottom: 10,
  },

  // resultados obtenidos
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 0.8,
    color: Colors.text,
  },
  textDescribcion: {
    color: Colors.text,
    fontSize: 17,
    letterSpacing: 0.6,
    marginVertical: 5,
  },
  textHighlight: {
    fontSize: 17,
    letterSpacing: 0.6,
    color: Colors.chi,
  },
  containerGraphic: {
    backgroundColor: Colors.white,
    marginVertical: 5,
    paddingTop: 20,
    padding: 10,
    paddingBottom: 0,
    paddingRight: 10,
    borderRadius: 10,
  },
});

export default SimulationScreen;
