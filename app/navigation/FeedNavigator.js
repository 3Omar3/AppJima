import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import AppNavigator from "./AppNavigator";
import ProfileScreen from "../screen/ProfileScreen";
import FundingScreen from "../screen/FundingScreen";
import RetirementScreen from "../screen/RetirementScreen";
import AccountScreen from "../screen/AccountScreen";
import SettingScreen from "../screen/SettingScreen";
import ConfirmPurchase from "../screen/ConfirmPurchase";

// source
import { t } from "../config/locales";

// theme
import navigationTheme from "./navigationTheme";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator theme={navigationTheme}>
    <Stack.Screen
      name="Navigator"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Funding"
      component={FundingScreen}
      options={{ title: t("funding") }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: t("profile") }}
    />
    <Stack.Screen
      name="ConfirmPurchase"
      component={ConfirmPurchase}
      options={{ title: t("confirm purchase") }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
