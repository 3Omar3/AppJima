import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

// source
import Colors from "../config/colors";

function ChartLine({ data }) {
  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: Colors.white,
    backgroundGradientTo: Colors.white,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => Colors.chi,
    labelColor: (opacity = 1) => Colors.text,
    style: {
      borderRadius: 16,
    },
    propsForLabels: {
      fontSize: 14,
      // fontWeight: "bold",
    },
    propsForVerticalLabels: {
      fontSize: 15,
    },
    propsForBackgroundLines: {
      stroke: Colors.gray,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: Colors.chi,
      fill: Colors.white,
    },
  };

  return (
    <>
      <LineChart
        data={data}
        width={Dimensions.get("window").width - 30} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier // smoth lines
        style={{ marginBottom: 8 }}
      />
    </>
  );
}

export default ChartLine;
