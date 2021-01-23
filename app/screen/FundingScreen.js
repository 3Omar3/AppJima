import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { vh, vw } from "react-native-css-vh-vw";

// resource
import { t } from "../config/locales";
import Colors from "../config/colors";

function FundingScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.card}>
          <Text
            style={{
              color: Colors.text,
              letterSpacing: 0.6,
              textAlign: "center",
              fontSize: vw(5),
            }}
          >
            Transacciones
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: vw(7),
              color: Colors.chi,
              letterSpacing: 0.6,
              marginVertical: 20,
            }}
          >
            $0.00
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.containerIcon} onPress={() => {}}>
              <MaterialCommunityIcons
                name="chart-donut"
                size={vw(5.5)}
                color={Colors.chi}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcon} onPress={() => {}}>
              <MaterialCommunityIcons
                name="cart-minus"
                size={vw(5.5)}
                color={Colors.chi}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// default styles
const styles = StyleSheet.create({
  // card graphics
  card: {
    backgroundColor: Colors.white,
    padding: 20,
    margin: 20,
    borderRadius: 15,
  },
  containerIcon: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.liteGray,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FundingScreen;
