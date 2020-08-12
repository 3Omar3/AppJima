import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

function ScreenScroll({ children, justify = "center" }) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[styles.scroll, { justifyContent: justify }]}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    alignItems: "center",
  },
});

export default ScreenScroll;
