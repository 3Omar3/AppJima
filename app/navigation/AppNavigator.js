import React from "react";
import { StatusBar, Text, View, Image } from "react-native";
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
const logo = require("../assets/png/jimablanco2.png");

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => (
  <>
    <StatusBar backgroundColor={"#1F1E2E"} />
    <View style={{ flexDirection: "row", backgroundColor: Colors.menu }}>
      <Image
        source={logo}
        resizeMode="contain"
        style={{ top: 4, height: 65, width: 100, marginLeft: 15 }}
      />
      <View style={{ flexDirection: "row", top: 22 }}>
        <View style={{ marginLeft: 40, alignItems: "center" }}>
          <Text
            style={{ color: Colors.white, fontSize: 12, fontWeight: "bold" }}
          >
            $112.00 MX
          </Text>
          <Text
            style={{ color: Colors.white, fontSize: 11, fontWeight: "bold" }}
          >
            Precio por planta
          </Text>
        </View>
        <View style={{ marginLeft: 35, alignItems: "center" }}>
          <Text
            style={{ color: Colors.white, fontSize: 12, fontWeight: "bold" }}
          >
            $27.00 MX
          </Text>
          <Text
            style={{ color: Colors.white, fontSize: 11, fontWeight: "bold" }}
          >
            Precio por Kilo
          </Text>
        </View>
      </View>
    </View>
    <Tab.Navigator
      initialRouteName={t("home")}
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        iconStyle: { alignItems: "center" },
        activeTintColor: Colors.white,
        inactiveTintColor: Colors.gray,
        indicatorStyle: { backgroundColor: Colors.white },
        style: { backgroundColor: Colors.menu },
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
            <MaterialCommunityIcons name="shopping" size={20} color={color} />
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
            <MaterialCommunityIcons name="test-tube" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={t("report")}
        component={ReportScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-pie" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={t("news")}
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  </>
);

export default AppNavigator;
