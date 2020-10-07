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
  <Stack.Navigator>
    <Stack.Screen name="Funding" component={FundingScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Retirement" component={RetirementScreen} />
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Setting" component={SettingScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
