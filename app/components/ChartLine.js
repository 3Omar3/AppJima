import React from "react";
import { LineChart } from "react-native-chart-kit";
import { vh, vw } from "react-native-css-vh-vw";

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
      fontSize: vw(3),
      // fontWeight: "bold",
    },
    propsForVerticalLabels: {
      fontSize: vw(3.5),
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
        width={vw(90)} // from react-native
        height={vh(35)}
        // yAxisLabel="$"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier // smoth lines
        style={{ marginBottom: 8 }}
      />
    </>
  );
}

export default ChartLine;
