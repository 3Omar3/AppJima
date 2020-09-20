import React from "react";
import {
  StatusBar,
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Screens
import HomeScreen from "../screen/HomeScreen";
import PurchaseScreen from "../screen/PurchaseScreen";
import SaleScreen from "../screen/SaleScreen";
import SimulationScreen from "../screen/SimulationScreen";
import ReportScreen from "../screen/ReportScreen";
import NewsScreen from "../screen/NewsScreen";

// resource
import Colors from "../config/colors";
import { t } from "../config/locales";

// images
const logo = require("../assets/png/blanco.png");

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => (
  <>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.secondary} />
      <View style={styles.topLayer}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
        <View style={styles.contentTop}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.textTitle}>$112.00 {t("coin")}</Text>
            <Text style={styles.textSub}>{t("pricePerPlant")}</Text>
          </View>
          <View style={styles.rightPrice}>
            <Text style={styles.textTitle}>$27.00 {t("coin")}</Text>
            <Text style={styles.textSub}>{t("pricePerKg")}</Text>
          </View>
          <MaterialCommunityIcons
            style={styles.btnMenu}
            name="dots-vertical"
            size={25}
            color={Colors.white}
            onPress={() => {}}
          />
        </View>
      </View>
      <Tab.Navigator
        initialRouteName={t("home")}
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          iconStyle: { alignItems: "center" },
          activeTintColor: Colors.white,
          inactiveTintColor: Colors.shadow,
          indicatorStyle: { backgroundColor: Colors.white },
          style: { backgroundColor: Colors.primary },
        }}
      >
        <Tab.Screen
          name={t("home")}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={t("purchase")}
          component={PurchaseScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={t("sale")}
          component={SaleScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="currency-usd"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={t("simulation")}
          component={SimulationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="scale-balance"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={t("report")}
          component={ReportScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-pie"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={t("news")}
          component={NewsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="newspaper"
                size={20}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  topLayer: {
    paddingTop: 5,
    flexDirection: "row",
    backgroundColor: Colors.primary, // #1F1E2E
    alignItems: "center",
    height: 50, // pensar
  },
  contentTop: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    height: 65,
    width: 85,
    marginLeft: 15,
  },
  textTitle: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  textSub: {
    color: Colors.white,
    fontSize: 11,
    fontWeight: "bold",
  },
  rightPrice: {
    alignItems: "center",
    marginLeft: 20,
  },
  btnMenu: {
    marginHorizontal: 15,
    top: 2.5,
  },
});

export default AppNavigator;
