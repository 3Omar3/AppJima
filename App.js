import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";

// Before rendering any navigation stack, perfomance
import { enableScreens } from "react-native-screens";
enableScreens();

export default function App({ navigation }) {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
