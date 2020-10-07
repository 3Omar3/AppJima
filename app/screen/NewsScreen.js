import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

function NewsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: "https://blog.jima.mx" }} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default NewsScreen;
