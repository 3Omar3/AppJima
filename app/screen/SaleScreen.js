import React from "react";
import { StyleSheet, Text } from "react-native";

// source
import Language from "../config/Language-es";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import ScreenScroll from "../components/ScreenScroll";

// API
import userApi from "../api/users";

function SaleScreen({ navigation }) {
  return (
    <ScreenScroll justify="flex-start">
      <Text>SALE SCREEN</Text>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({});

export default SaleScreen;
