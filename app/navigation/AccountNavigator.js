import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import FundingScreen from "../screen/FundingScreen";
import ProfileScreen from "../screen/ProfileScreen";
import RetirementScreen from "../screen/RetirementScreen";
import AccountScreen from "../screen/AccountScreen";
import SettingScreen from "../screen/SettingScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
