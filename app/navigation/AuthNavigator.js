import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as ScreenOrientation from "expo-screen-orientation";

// Screens
import WelcomeScreen from "../screen/WelcomeScreen";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  // Screen orientation
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
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
};

export default AuthNavigator;
