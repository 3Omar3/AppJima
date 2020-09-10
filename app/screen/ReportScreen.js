import React from "react";
import { StyleSheet, Text } from "react-native";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import { ScrollView } from "react-native-gesture-handler";
import CardPreview from "../components/CardPreview";

// API
import userApi from "../api/users";

function ReportScreen({ navigation }) {
  return (
    <ScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Text>REPORT SCREEN</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default ReportScreen;
