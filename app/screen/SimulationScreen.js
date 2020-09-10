import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import KeyScroll from "../components/KeyScroll";

// API
import userApi from "../api/users";
import Separator from "../components/Separator";
import TextDescribcion from "../components/TextDescribcion";
import Spinner from "../components/Spinner";

function SimulationScreen({ navigation }) {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <KeyScroll>
      <View style={{ padding: 10 }}>
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 5,
            marginBottom: 10,
            padding: 10,
            shadowColor: Colors.liteGray,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 1,
          }}
        >
          <Text style={styles.title}>
            Ingresa los datos para generar una simulación
          </Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              backgroundColor: Colors.background,
              padding: 5,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                letterSpacing: 0.6,
                textAlign: "center",
                color: Colors.text,
              }}
            >
              INVERSIÓN
            </Text>
          </View>
          <View style={{ padding: 15, paddingTop: 0 }}>
            <Spinner
              text="Numero de Plantas"
              config={{ step: 1, value: 0, max: 400000 }}
              iconSize={17}
              icons="FontAwesome5"
              icon="seedling"
              onChange={() => console.log("planta n")}
            />
            <Spinner
              text="Precio"
              config={{
                step: 0.5,
                precision: 1,
                value: 0,
                max: 1000,
                type: "float",
              }}
              icon="attach-money"
              onChange={() => console.log("precio n")}
            />
            <Spinner
              text="Total Invertido"
              config={{
                step: 0.05,
                precision: 2,
                value: 0,
                max: 50000000,
                type: "float",
              }}
              icon="attach-money"
              onChange={() => console.log("precio n")}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.background,
              padding: 5,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                letterSpacing: 0.6,
                textAlign: "center",
                color: Colors.text,
              }}
            >
              RESULTADO
            </Text>
          </View>
          <View style={{ padding: 15, paddingTop: 5 }}>
            <Spinner
              text="Precio"
              config={{
                step: 0.5,
                precision: 1,
                value: 0,
                max: 1000,
                type: "float",
              }}
              icon="attach-money"
              onChange={() => console.log("precio n")}
            />
            <Spinner
              text="Años Plantada"
              config={{
                step: 0.5,
                precision: 1,
                value: 0,
                max: 6,
                type: "float",
              }}
              iconSize={17}
              icons="FontAwesome5"
              icon="calendar-alt"
              onChange={() => console.log("años n")}
            />
            <Spinner
              text="Kilos por Planta"
              config={{
                step: 0.5,
                precision: 1,
                value: 0,
                max: 100,
                type: "float",
              }}
              icon="timelapse"
              onChange={() => console.log("kilos n")}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
            shadowColor: Colors.liteGray,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 1,
          }}
        >
          <TextDescribcion
            title="Hectareas:"
            describcion="0.03 ( 3,990 plantas por hectarea)"
          />
          <TextDescribcion
            title="Solares:"
            describcion="0.14 (700 plantas por solar)"
          />
          <TextDescribcion title="Total invertido:" describcion="$12,000.00" />
          <TextDescribcion
            title="Utilidad bruta:"
            describcion="$137,500.00"
            styleDescribcion={styles.textHighlight}
          />
          <TextDescribcion title="Total invertido:" describcion="$12,000.00" />
          <TextDescribcion
            title="Rendimiento en porcentaje por mes:"
            describcion="10%"
          />
          <TextDescribcion
            title="Rendimiento en porcentaje por año:"
            describcion="124%"
          />
          <TextDescribcion
            title="Utilidad Neta:"
            describcion="$89,375.00 ( $137,500 - 35%)"
            styleDescribcion={styles.textHighlight}
          />
          <TextDescribcion title="Utilidad por planta:" describcion="$893.75" />
          <TextDescribcion title="Utilidad por día:" describcion="$41.38" />
          <TextDescribcion
            title="Rendimiento en porcentaje por mes:"
            describcion="$1,241.32"
          />
          <TextDescribcion title="Utilidad por año:" describcion="$14,895.83" />
        </View>
        <View>
          {/* <LineChart
            data={data}
            width={300}
            height={220}
            chartConfig={chartConfig}
          /> */}
          <LineChart
            data={{
              labels: ["Jan", "Feb", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width - 20} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: Colors.primary,
              backgroundGradientTo: Colors.secondary,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: Colors.chi,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </View>
    </KeyScroll>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 0.6,
  },
  textHighlight: {
    color: Colors.chi,
    fontWeight: "bold",
  },
});

export default SimulationScreen;
