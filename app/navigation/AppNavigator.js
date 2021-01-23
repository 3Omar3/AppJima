import React, { useEffect, useState } from "react";
import {
  StatusBar,
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { vh, vw } from "react-native-css-vh-vw";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Menu, Provider, TouchableRipple } from "react-native-paper";
import * as ScreenOrientation from "expo-screen-orientation";
import RNPickerSelect from "react-native-picker-select";

// Screens
import HomeScreen from "../screen/HomeScreen";
import SaleScreen from "../screen/SaleScreen";
import SimulationScreen from "../screen/SimulationScreen";
import ReportScreen from "../screen/ReportScreen";
import NewsScreen from "../screen/NewsScreen";
import PurchaseScreen from "../screen/PurchaseScreen";

// Resource
import Colors from "../config/colors";
import { changeLaguage, t } from "../config/locales";

// API
import useAuth from "../auth/useAuth";
import modelApi from "../api/model";

// Images
const logo = require("../assets/png/blanco.png");

// Component
import Loading from "../components/Loading";
const Tab = createMaterialTopTabNavigator();

// Screen orientation
ScreenOrientation.unlockAsync();
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);

const AppNavigator = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { logOut } = useAuth(); // logout
  const [data, setData] = useState({}); // data info
  const [ready, setReady] = useState(false);

  // menu
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // load data
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const res = await modelApi.getData();
    setData(res.data);
    setReady(true);
  }

  if (!ready)
    return (
      <Loading
        styleContainer={{ backgroundColor: Colors.white, opacity: 1 }}
        loading={true}
      />
    );
  else
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.secondary} />
        <Loading loading={loading} />
        <Provider>
          <View style={styles.topLayer}>
            <Image source={logo} resizeMode="contain" style={styles.logo} />
            <View style={styles.contentTop}>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.textTitle}>
                  ${Number.parseFloat(data.precios.plant).toFixed(2)}{" "}
                  {t("coin")}
                </Text>
                <Text style={styles.textSub}>{t("pricePerPlant")}</Text>
              </View>
              <View style={styles.rightPrice}>
                <Text style={styles.textTitle}>
                  ${Number.parseFloat(data.precios.kg).toFixed(2)} {t("coin")}
                </Text>
                <Text style={styles.textSub}>{t("pricePerKg")}</Text>
              </View>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                statusBarHeight={0}
                anchor={
                  <MaterialCommunityIcons
                    style={styles.btnMenu}
                    name="dots-vertical"
                    size={vh(1.8) + vw(3.5)}
                    color={Colors.white}
                    onPress={openMenu}
                  />
                }
              >
                <TouchableRipple
                  style={styles.containerButton}
                  onPress={() => {
                    navigation.navigate("Funding");
                  }}
                >
                  <View style={styles.containerFunding}>
                    <MaterialIcons
                      name="attach-money"
                      size={18.5}
                      color={Colors.green}
                    />
                    <Text style={styles.textButton}>{t("funding")}</Text>
                  </View>
                </TouchableRipple>
                <Menu.Item
                  onPress={() => navigation.navigate("Profile")}
                  title={t("profile")}
                  titleStyle={{ color: Colors.text }}
                />
                <RNPickerSelect
                  placeholder={{}}
                  onValueChange={(value) => {
                    if (value == 0) return;
                    changeLaguage(value);
                  }}
                  style={pickerSelect}
                  Icon={() => {
                    return (
                      <MaterialCommunityIcons
                        name="chevron-down"
                        size={25}
                        color={Colors.gray}
                        style={{ top: 12, marginLeft: 4, marginRight: 10 }}
                      />
                    );
                  }}
                  items={[
                    { label: t("labelLanguage"), value: 0 },
                    { label: t("spanish"), value: "es" },
                    { label: t("english"), value: "en" },
                  ]}
                  useNativeAndroidPickerStyle={false}
                />
                <Menu.Item
                  onPress={() => logOut()}
                  title={t("logout")}
                  titleStyle={{ color: Colors.text }}
                />
              </Menu>
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
              initialParams={{ data }}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    size={vh(2) + vw(2)}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name={t("purchase")}
              component={PurchaseScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="cart"
                    size={vh(2) + vw(2)}
                    color={color}
                  />
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
                    size={vh(2) + vw(2)}
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
                    size={vh(2) + vw(2)}
                    color={color}
                  />
                ),
              }}
            />
            {/* <Tab.Screen
              name={t("report")}
              component={ReportScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="chart-pie"
                    size={vh(2) + vw(2)}
                    color={color}
                  />
                ),
              }}
            /> */}
            <Tab.Screen
              name={t("news")}
              component={NewsScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="newspaper"
                    size={vh(2) + vw(2)}
                    color={color}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </Provider>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  topLayer: {
    paddingTop: 5,
    flexDirection: "row",
    backgroundColor: Colors.primary,
    alignItems: "center",
    height: vh(6.5) + vw(2),
  },
  contentTop: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    top: 1.1,
    height: vh(10),
    width: vw(22.5),
    marginLeft: 15,
  },
  textTitle: {
    color: Colors.white,
    fontSize: vh(1.1) + vw(1),
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  textSub: {
    color: Colors.white,
    fontSize: vh(1) + vw(1),
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  rightPrice: {
    alignItems: "center",
    marginLeft: 20,
  },
  btnMenu: {
    marginHorizontal: 15,
    top: 2.5,
  },
  containerButton: {
    backgroundColor: "#E5F0F2",
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  textButton: {
    color: Colors.green,
    fontWeight: "bold",
    letterSpacing: 0.6,
    fontSize: 15,
  },
  containerFunding: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const pickerSelect = StyleSheet.create({
  inputIOS: {
    color: Colors.text,
    fontSize: 16.2,
    paddingLeft: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  inputAndroid: {
    color: Colors.text,
    fontSize: 16.2,
    paddingLeft: 16,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default AppNavigator;
