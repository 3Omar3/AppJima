import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../config/colors";

function AlertLabel({ text, money, coin = "MXN" }) {
  const [warningVisible, setWarningVisible] = useState(true); // warning

  if (warningVisible === true) {
    return (
      <View style={styles.card}>
        <MaterialCommunityIcons
          style={styles.warningIcon}
          name="alert-circle-outline"
          size={22}
          color="black"
        />
        <Text style={styles.warningText}>
          {text}{" "}
          <Text style={styles.warningMoney}>
            {money} {coin}
          </Text>
        </Text>
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <MaterialCommunityIcons
            name="close"
            size={22}
            color={Colors.gray}
            onPress={() => {
              setWarningVisible(!warningVisible);
            }}
          />
        </TouchableOpacity>
      </View>
    );
  } else return null;
}

const styles = StyleSheet.create({
  card: {
    width: "92%",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 5,
    overflow: "hidden",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: Colors.liteGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
  },
  warningIcon: {
    marginRight: 2,
    alignSelf: "center",
  },
  warningText: {
    fontSize: 12,
    width: "85%",
    textAlign: "center",
  },
  warningMoney: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AlertLabel;
