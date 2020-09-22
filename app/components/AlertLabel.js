import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../config/colors";

function AlertLabel({ children, styleContainer }) {
  const [warningVisible, setWarningVisible] = useState(true); // warning

  if (warningVisible === true) {
    return (
      <View style={[styles.card, { styleContainer }]}>
        <MaterialCommunityIcons
          style={styles.warningIcon}
          name="alert-circle-outline"
          size={24}
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
            style={{ marginRight: 1 }}
            name="close"
            size={24}
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
    marginRight: 1,
    marginLeft: 3,
    alignSelf: "center",
  },
  containerChildren: {
    flexDirection: "column",
    width: "80%",
  },
});

export default AlertLabel;
