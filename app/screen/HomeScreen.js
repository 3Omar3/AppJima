import React from "react";
import { StyleSheet, Text } from "react-native";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import ScreenScroll from "../components/ScreenScroll";

// API
import userApi from "../api/users";

function HomeScreen({ navigation }) {
  return (
    <ScreenScroll justify="flex-start">
      <Text>HOME SCREEN</Text>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
