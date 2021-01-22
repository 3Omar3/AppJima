import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import PurchaseScreen from "../screen/PurchaseScreen";
import ConfirmPurchase from "../screen/ConfirmPurchase";

// source
import { t } from "../config/locales";

// theme
import navigationTheme from "./navigationTheme";

const Stack = createStackNavigator();

const FeedPurchaseNavigator = () => (
  <Stack.Navigator theme={navigationTheme}>
    <Stack.Screen
      name="PurchaseScreen"
      component={PurchaseScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ConfirmPurchase"
      component={ConfirmPurchase}
      options={{ title: t("confirm purchase") }}
    />
  </Stack.Navigator>
);

export default FeedPurchaseNavigator;
