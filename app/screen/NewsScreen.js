import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

// Status network
import NetScreen from "./NetScreen";

function NewsScreen({ navigation }) {
  // Network status
  const netInfo = useNetInfo();
  if (!netInfo.isInternetReachable) return <NetScreen />;

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: "https://blog.jima.mx" }} />
    </View>
  );
}

export default NewsScreen;
