import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { vh, vw } from "react-native-css-vh-vw";

import Colors from "../config/colors";

function AlertLabel({ children, styleContainer }) {
  const [warningVisible, setWarningVisible] = useState(true); // warning

  if (warningVisible === true) {
    return (
      <View style={[styles.card, { styleContainer }]}>
        <MaterialCommunityIcons
          style={styles.warningIcon}
          name="alert-circle-outline"
          size={vw(5.5)}
          color={Colors.gray}
        />
        <View style={styles.containerChildren}>{children}</View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
          }}
          onPress={() => {
            setWarningVisible(!warningVisible);
          }}
        >
          <MaterialCommunityIcons
            style={{ marginRight: 4 }}
            name="close"
            size={vw(5.5)}
            color={Colors.gray}
          />
        </TouchableOpacity>
      </View>
    );
  } else return null;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 5,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  warningIcon: {
    marginRight: 4,
    marginLeft: 4,
    alignSelf: "center",
  },
  containerChildren: {
    flexDirection: "column",
    width: "80%",
  },
});

export default AlertLabel;
