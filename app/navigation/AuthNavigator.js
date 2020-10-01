import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import WelcomeScreen from "../screen/WelcomeScreen";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator options={{ headerShown: false }}>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false, animationEnabled: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
