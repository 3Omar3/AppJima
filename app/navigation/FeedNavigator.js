import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import AppNavigator from "./AppNavigator";
import ProfileScreen from "../screen/ProfileScreen";

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
      name="Profile"
      component={ProfileScreen}
      options={{ title: t("profile") }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
