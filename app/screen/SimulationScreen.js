import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { vh, vw } from "react-native-css-vh-vw";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";

// components
import KeyScroll from "../components/KeyScroll";
import Separator from "../components/Separator";
import ChartLine from "../components/ChartLine";
import TextDescribcion from "../components/TextDescribcion";
import Spinner from "../components/Spinner";
import RadioText from "../components/RadioText";

function SimulationScreen() {
  const [invest, setInvest] = useState([0, 0, 0]);
  const [result, setResult] = useState([26, 2.5, 0]);
  let timer = null; // controla las peticiones

  const dataChart = {
    labels: getProgresion(),
    datasets: [
      {
        data: getGraphicData(),
      },
    ],
    // legend: ["Ganancias por año"], // optional
  };

  function getProgresion() {
    const arr = [];
    if (result[1] > 0) arr.push("6m");

    for (let i = 1; i <= result[1]; ++i) arr.push(i + "y");

    return arr;
  }

  function getGraphicData() {
    const aumento = [0.2, 0.5, 0.3, 0.2, 0.4, 0.75, 1];
    let progresion = [];
    let diferenciaP = 0,
      diferenciaK = 0,
      valor = 0;

    if (result[1] < 3) diferenciaP = (result[0] - invest[1]) / result[1];

    valor =
      invest[0] *
      (invest[1] + (!diferenciaP ? invest[1] * aumento[0] : diferenciaP / 2));
    progresion.push(valor); // 6 meses

    for (let i = 1; i <= result[1]; i++) {
      if (i < 3)
        valor =
          invest[0] *
          (invest[1] +
            (!diferenciaP ? invest[1] * aumento[i] : diferenciaP * i));
      else if (i == 3) valor = invest[0] * result[0] * result[2] * aumento[i];
      else if (i > 3)
        valor =
          invest[0] *
          (result[0] + diferenciaK * (i - 2)) *
          result[2] *
          aumento[i];

      progresion.push(valor);
    }

    return progresion;
  }

  function setTotalInvest(i, n) {
    let newArr = [...invest];
    newArr[i] = n;

    if (i === 0 || i === 1) newArr[2] = newArr[0] * newArr[1];
    setInvest(newArr);
  }

  function validatePlants(n) {
    if (n >= invest[1] && invest[1] !== 0) setTotalInvest(0, n / invest[1]);
    else setTotalInvest(2, n);
  }

  function setResultInvest(i, n) {
    let newArr = [...result];
    newArr[i] = n;

    setResult(newArr);
  }

  // funcion auxiliar
  function setNumber(n) {
    return Number(n).toFixed(2);
  }

  function getUtilidadBruta() {
    return setNumber(
      invest[0] * result[0] * (result[1] > 2 && result[2] > 0 ? result[2] : 1)
    );
  }

  function getUtilidadNeta() {
    return result[1] !== 6
      ? getUtilidadBruta()
      : setNumber(getUtilidadBruta() * 0.65);
  }

  function getUtilidad(n) {
    const utilidadNeta = getUtilidadNeta();

    return setNumber(invest[0] === 0 ? 0 : utilidadNeta / n);
  }

  function getUtilidadPlanta() {
    return getUtilidad(invest[0]);
  }

  function getUtilidadDia() {
    return getUtilidad(result[1] * 12 * 30 - result[1]);
  }

  function getUtilidadMes() {
    return getUtilidad(result[1] * 12 - result[1]);
  }

  function getUtilidadAnio() {
    return getUtilidad(result[1]);
  }

  function getRedimientoMes() {
    return setNumber((getUtilidadMes() / invest[2]) * 100);
  }

  function getRedimientoAnio() {
    return setNumber((getUtilidadAnio() / invest[2]) * 100);
  }

  return (
    <KeyScroll>
      <View style={{ padding: 15 }}>
        <View style={[styles.card, { marginBottom: 10 }]}>
          <Text style={styles.textTop}>{t("simulationTitle")}</Text>
        </View>
        <View style={[styles.card, { paddingBottom: 25 }]}>
          <Text style={styles.textTitle}>{t("Investment")}</Text>
          <Spinner
            text={t("numberofPlants")}
            config={{ step: 1, value: invest[0], max: 400000 }}
            icon="flower-outline"
            onChange={(n) => {
              clearTimeout(timer);
              timer = setTimeout(() => {
                setTotalInvest(0, n);
              }, 250);
            }}
          />
          <Spinner
            text={t("price")}
            config={{
              step: 0.5,
              precision: 2,
              value: invest[1],
              max: 1000,
              type: "float",
            }}
            icon="coin"
            onChange={(n) => {
              clearTimeout(timer);
              timer = setTimeout(() => {
                setTotalInvest(1, n);
              }, 250);
            }}
          />
          <Spinner
            text={t("totalInvested")}
            config={{
              step: 0.05,
              precision: 2,
              value: invest[2],
              max: 50000000,
              type: "float",
            }}
            icon="coin"
            onChange={(n) => {
              clearTimeout(timer);
              timer = setTimeout(() => {
                validatePlants(n);
              }, 250);
            }}
          />
        </View>
        <View style={[styles.card, { paddingBottom: 25 }]}>
          <Text style={styles.textTitle}>{t("result")}</Text>
          <Spinner
            text={t("price")}
            config={{
              step: 0.5,
              precision: 2,
              value: result[0],
              max: 1000,
              type: "float",
            }}
            icon="coin"
            onChange={(n) => {
              clearTimeout(timer);
              timer = setTimeout(() => {
                setResultInvest(0, n);
              }, 250);
            }}
          />
          <Spinner
            text={t("yearsPlanted")}
            config={{
              step: 0.5,
              precision: 1,
              value: result[1],
              max: 6,
              min: 0.5,
              type: "float",
            }}
            icon="timer-sand"
            onChange={(n) => {
              clearTimeout(timer);
              timer = setTimeout(() => {
                setResultInvest(1, n);
              }, 250);
            }}
          />
          <Spinner
            text={t("kilosperPlant")}
            config={{
              step: 0.5,
              precision: 2,
              value: result[2],
              max: 100,
              disabled: result[1] < 2.5 ? true : false,
              type: "float",
            }}
            icon="scale-balance"
            onChange={(n) => {
              clearTimeout(timer);
              timer = setTimeout(() => {
                setResultInvest(2, n);
              }, 250);
            }}
          />
        </View>
        <View style={styles.card}>
          <View style={{ padding: 5 }}>
            <Text style={styles.text}>{t("hectares")}</Text>
            <Text style={styles.textDescribcion}>
              {(invest[0] / 3990).toFixed(2)} ( 3,990 {t("plantperHectares")})
            </Text>
            <Separator />
            <Text style={styles.text}>{t("solar")}</Text>
            <Text style={styles.textDescribcion}>
              {(invest[0] / 700).toFixed(2)} (700 {t("plantperSolar")})
            </Text>
            <Separator />
            <TextDescribcion
              title={t("totalInvested") + ":"}
              describcion={"$" + setNumber(invest[2])}
            />
            <Separator />
            <TextDescribcion
              title={t("yieldperMonth")}
              describcion={getRedimientoMes() + "%"}
            />
            <Separator />
            <TextDescribcion
              title={t("yieldperYear")}
              describcion={getRedimientoAnio() + "%"}
            />
            <Separator />
            <TextDescribcion
              title={t("profitperPlant")}
              describcion={"$" + getUtilidadPlanta()}
            />
            <Separator />
            <TextDescribcion
              title={t("profitperDay")}
              describcion={"$" + getUtilidadDia()}
            />
            <Separator />
            <TextDescribcion
              title={t("profitperMonth")}
              describcion={"$" + getUtilidadMes()}
            />
            <Separator />
            <TextDescribcion
              title={t("profitperYear")}
              describcion={"$" + getUtilidadAnio()}
            />
            <Separator />
            <TextDescribcion
              title={t("grossProfit") + ":"}
              describcion={"$" + getUtilidadBruta()}
              styleDescribcion={styles.textHighlight}
            />
            <Separator />
            <TextDescribcion
              title={t("netProfit") + ":"}
              describcion={"$" + getUtilidadNeta()}
              styleDescribcion={styles.textHighlight}
            />
            {result[1] === 6 ? (
              <Text style={[styles.textHighlight, { textAlign: "right" }]}>
                (${getUtilidadBruta()} - 35%)
              </Text>
            ) : null}
          </View>
        </View>
        <View style={styles.containerGraphic}>
          <ScrollView>
            <ChartLine data={dataChart} />
            <View style={styles.containerRadioText}>
              <RadioText
                color={Colors.chi}
                styleText={styles.radioText}
                text="Ganancias por año"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyScroll>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
  },
  textTop: {
    fontSize: vw(4),
    textAlign: "center",
    letterSpacing: 0.6,
    color: Colors.text,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: vw(4.5),
    letterSpacing: 0.8,
    textAlign: "center",
    color: Colors.text,
    marginBottom: 5,
    marginTop: 5,
  },

  // resultados obtenidos
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: vw(4),
    letterSpacing: 0.8,
    color: Colors.text,
  },
  textDescribcion: {
    color: Colors.text,
    fontSize: vw(4),
    letterSpacing: 0.6,
    marginVertical: 5,
  },
  textHighlight: {
    fontSize: vw(4),
    letterSpacing: 0.6,
    color: Colors.chi,
  },
  containerGraphic: {
    backgroundColor: Colors.white,
    marginVertical: 5,
    paddingTop: 20,
    padding: 10,
    paddingBottom: 0,
    borderRadius: 10,
  },
  containerRadioText: {
    alignSelf: "center",
    top: -10,
  },
  radioText: {
    fontSize: vw(4),
    color: Colors.gray,
  },
});

export default SimulationScreen;
