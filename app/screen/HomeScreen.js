import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { vh, vw } from "react-native-css-vh-vw";
import { PieChart } from "react-native-chart-kit";

// Source
import { t } from "../config/locales";
import Colors from "../config/colors";

// Components
import RadioText from "../components/RadioText";
import StatusBalance from "../components/StatusBalance";
import TableApp from "../components/TableApp";

// API
import modelApi from "../api/model";

function HomeScreen({ route }) {
  const data = route.params.data;
  const [dataTable, setDataTable] = useState([]);

  // load data
  useEffect(() => {
    loadTransacciones();
  }, []);

  function styleStatus(status) {
    if (status == "completada")
      return <Text style={styles.textCompleted}>{t(status)}</Text>;

    return <Text style={styles.textInSale}>{t(status)}</Text>;
  }

  function styleTipo(tipo) {
    if (tipo == "compra")
      return <Text style={styles.textPurchase}>{t(tipo)}</Text>;

    return <Text style={styles.textSale}>{t(tipo)}</Text>;
  }

  async function loadTransacciones(tipo = 2) {
    const res = await modelApi.getTransacciones(tipo);
    let arr = [];

    for (let r of res.data.transacciones) {
      arr.push([
        r.fecha,
        styleTipo(r.tipo),
        styleStatus(r.estatus),
        r.predio,
        r.edad,
        r.cantidad,
        `$${r.precio}`,
        `$${r.total}`,
      ]);
    }

    setDataTable(arr);
  }

  function graphicBalance(saldos) {
    this.plants = setNumber(
      saldos.total_dinero_planta - saldos.total_dinero_ventas
    );
    this.total = setNumber(saldos.total_dinero);
    this.sale = setNumber(saldos.total_dinero_ventas);

    this.validateGraphic = function (n) {
      return Number(n == null || n == 0 ? 1 : n);
    };

    function setNumber(n) {
      return Number(n ? n : 0).toFixed(2);
    }
  }

  function graphicProjection(totales) {
    this.totalInvertido = setNumber(totales.totalCompras);
    this.utilidadTotal = setNumber(totales.utilidadTotal);

    this.validateGraphic = function (n) {
      return Number(n == null || n == 0 ? 1 : n);
    };

    function setNumber(n) {
      return Number(n ? n : 0).toFixed(2);
    }
  }

  const balance = new graphicBalance(data.saldos.totales);
  const proyecciones = new graphicProjection(data.proyecciones.totales);

  const dataBalance = [
    {
      // saldo plantas en venta
      population: balance.validateGraphic(balance.plants),
      color: Colors.liteGray,
    },
    {
      // saldo total
      population: balance.validateGraphic(balance.total),
      color: "#909090",
    },
    {
      // saldo en plantas
      population: balance.validateGraphic(balance.sale),
      color: Colors.chi,
    },
  ];

  const dataProjection = [
    {
      // total invertido,
      population: proyecciones.validateGraphic(proyecciones.totalInvertido),
      color: Colors.liteGray,
      legendFontColor: Colors.gray,
      legendFontSize: 15,
    },
    {
      // utilidad total,
      population: proyecciones.validateGraphic(proyecciones.utilidadTotal),
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
    widthArr: [vw(30), vw(25), vw(30), vw(30), vw(40), vw(30), vw(25), vw(35)],
  };

  return (
    <ScrollView
      enableOnAndroid={true}
      nestedScrollEnabled={true}
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
        <StatusBalance data={{ totales: data.balance.totales }} />
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.textTitle}>{t("balanceInCoins")}</Text>
            <Text style={styles.textSub}>{t("totalBalance")}</Text>
          </View>
          <View style={styles.containerGraphic}>
            <PieChart
              data={dataBalance}
              width={vw(38)}
              height={vh(22)}
              chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              hasLegend={false}
              paddingLeft={vw(8.5)}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={[styles.containerDot, { marginBottom: 5 }]}>
              <RadioText
                text={t("balanceInPlants")}
                color={Colors.liteGray}
                styleText={styles.radioText}
              />
              <Text style={styles.textNumber}>{balance.plants}</Text>
            </View>
            <View style={[styles.containerDot, { marginBottom: 5 }]}>
              <RadioText
                text={t("balancePlantInSale")}
                color={Colors.chi}
                styleText={styles.radioText}
              />
              <Text style={styles.textNumber}>{balance.sale}</Text>
            </View>
            <View style={styles.containerDot}>
              <RadioText
                text={t("balanceTotal")}
                color={"#909090"}
                styleText={styles.radioText}
              />
              <Text style={styles.textNumber}>{balance.total}</Text>
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
              width={vw(38)}
              height={vh(22)}
              chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              hasLegend={false}
              paddingLeft={vw(9)}
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <View style={[styles.containerDot, { marginBottom: 5 }]}>
              <RadioText
                text={t("totalInvested")}
                color={Colors.liteGray}
                styleText={styles.radioText}
              />
              <Text style={styles.textNumber}>
                ${proyecciones.totalInvertido}
              </Text>
            </View>
            <View style={[styles.containerDot]}>
              <RadioText
                text={t("totalProfit")}
                color={Colors.chi}
                styleText={styles.radioText}
              />
              <Text style={styles.textNumber}>
                ${proyecciones.utilidadTotal}
              </Text>
            </View>
          </View>
        </View>
        <TableApp
          title={t("lastestTransacions")}
          data={dataTable}
          config={configTable}
          items={[
            { label: t("generalTransactions"), value: 2 },
            { label: t("myTransactions"), value: 1 },
          ]}
          selectChange={(value) => {
            loadTransacciones(value);
          }}
          maxHeight={vh(78.1)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // status
  containerTop: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textTopTitle: {
    fontSize: vw(5.1),
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
    letterSpacing: 0.6,
  },
  textTopSub: {
    fontSize: vw(4.8),
    color: Colors.gray,
    marginVertical: 5,
    fontWeight: "normal",
    textTransform: "uppercase",
  },

  // card graphics
  container: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
  },
  textTitle: {
    fontSize: vw(4.8),
    color: Colors.text,
    fontWeight: "bold",
    letterSpacing: 0.6,
    textAlign: "center",
  },
  textSub: {
    fontSize: vw(4.8),
    letterSpacing: 0.6,
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
    fontSize: vw(4.3),
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  radioText: {
    fontSize: vw(4.3),
    color: Colors.gray,
  },

  // report
  textCompleted: {
    color: Colors.white,
    alignSelf: "center",
    backgroundColor: Colors.chi,
    padding: 2.5,
    paddingHorizontal: 8,
    borderRadius: 50,
    fontSize: vw(3.5),
  },
  textInSale: {
    color: Colors.white,
    alignSelf: "center",
    backgroundColor: Colors.red,
    padding: 2.5,
    paddingHorizontal: 8,
    borderRadius: 50,
    fontSize: vw(3.5),
  },

  textPurchase: {
    color: Colors.chi,
    alignSelf: "center",
    fontSize: vw(3.5),
  },

  textSale: {
    color: Colors.red,
    alignSelf: "center",
    fontSize: vw(3.5),
  },
});

export default HomeScreen;
