import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

// Source
import authTheme from "./app/navigation/authTheme";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import FeedNavigator from "./app/navigation/FeedNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

// Status network
import NetScreen from "./app/screen/NetScreen";

// Before rendering any navigation stack, perfomance
import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  // Storage user, token
  const [user, setUser] = useState();
  const [ready, setReady] = useState(false);
  // Network status
  const netInfo = useNetInfo();
  // if (!netInfo.isInternetReachable) return <NetScreen />;

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (token) setUser(user);
  };

  if (!ready)
    return (
      <AppLoading startAsync={restoreToken} onFinish={() => setReady(true)} />
    );

  return (
    // <ProfileScreen />
    <AuthContext.Provider value={{ user, setUser }}>
      {user ? (
        <NavigationContainer theme={navigationTheme}>
          <FeedNavigator />
        </NavigationContainer>
      ) : (
        <NavigationContainer theme={authTheme}>
          <AuthNavigator />
        </NavigationContainer>
      )}
    </AuthContext.Provider>
  );
}
