import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

// source
import Language from "../config/language-es";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// API
import userApi from "../api/users";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default HomeScreen;
