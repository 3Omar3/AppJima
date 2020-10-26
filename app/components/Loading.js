import React from "react";
import { StyleSheet } from "react-native";
import { vh, vw } from "react-native-css-vh-vw";
import Spinner from "react-native-loading-spinner-overlay";

// resource
import Colors from "../config/colors";
import { t } from "../config/locales";

function Loading({ loading }) {
  return (
    <Spinner
      visible={loading}
      textContent={t("loading")}
      textStyle={styles.spinnerTextStyle}
    />
  );
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    height: "6.8%",
    letterSpacing: 0.6,
    color: Colors.text,
    fontSize: vw(5),
  },
});

export default Loading;
