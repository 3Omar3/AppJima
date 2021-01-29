import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Modal,
} from "react-native";
import { ButtonGroup } from "react-native-elements";
import { vh, vw } from "react-native-css-vh-vw";
import ImageViewer from "react-native-image-zoom-viewer";

// API
import modelApi from "../api/model";

// source
import { t } from "../config/locales";
import Colors from "../config/colors";
import Routes from "../navigation/routes";

// components
import CardPreview from "../components/CardPreview";
import Loading from "../components/Loading";

// predios images
const images = {
  predio1: require("../assets/terrenos/1.png"),
  predio2: require("../assets/terrenos/2.png"),
  predio3: require("../assets/terrenos/3.png"),
  predio4: require("../assets/terrenos/4.png"),
  predio6: require("../assets/terrenos/6.png"),
  predio7: require("../assets/terrenos/7.png"),
  predio9: require("../assets/terrenos/9.png"),
};

function SaleScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [years, setYears] = useState([]); // button group
  const [index, setSelectedIndex] = useState(); // years selected
  const [predios, setPredios] = useState([]); // predios
  const [image, setImage] = useState();
  const [visible, setVisible] = useState(false);

  // load data
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const res = await modelApi.getSale();

    if (res.status === 400) return setEmpty(true);

    setYears(res.data.years);
    setSelectedIndex(res.data.years.length - 1);
    setPredios(res.data.predios);
    setLoading(false);
  }

  if (empty)
    return (
      <Text
        style={{
          fontSize: vw(4.5),
          fontWeight: "bold",
          textAlign: "center",
          color: Colors.gray,
          letterSpacing: 0.6,
          lineHeight: 30,
          margin: 10,
        }}
      >
        NO HAY PLANTAS DISPONIBLES PARA REALIZAR UNA VENTA
      </Text>
    );
  else
    return (
      <>
        <Loading
          loading={loading}
          styleContainer={{
            backgroundColor: Colors.white,
            opacity: 1,
          }}
        />
        <Modal visible={visible} transparent={true}>
          <ImageViewer
            imageUrls={[
              {
                url: "",
                props: {
                  source: images[`predio${image}`],
                },
              },
            ]}
            onClick={() => {
              setVisible(false);
            }}
          />
        </Modal>
        <ScrollView
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: "flex-start",
          }}
        >
          <View style={{ padding: 15, paddingTop: 10 }}>
            <ButtonGroup
              buttons={years}
              containerStyle={styles.buttonGroupContainer}
              onPress={async (n) => {
                if (index === n) return;

                setSelectedIndex(n);
                setLoading(true);
                const res = await modelApi.getSalePredios(years[n]);
                setPredios(res.data.predios);
                setLoading(false);
              }}
              selectedIndex={index}
              textStyle={styles.textButtonGroup}
              selectedButtonStyle={{ backgroundColor: Colors.chi }}
            />
            <FlatList
              data={predios}
              keyExtractor={(predio) => predio.id_predio.toString()}
              renderItem={({ item }) => (
                <CardPreview
                  data={item}
                  textButton={t("buy")}
                  onPress={() => navigation.navigate("ConfirmPurchase", item)}
                  onPhotoPress={() => {
                    setImage(item.id_predio), setVisible(true);
                  }}
                />
              )}
            />
          </View>
        </ScrollView>
      </>
    );
}

const styles = StyleSheet.create({
  buttonGroupContainer: {
    height: 27,
    borderRadius: 5,
    marginTop: 0,
    marginHorizontal: 0,
    borderColor: Colors.white,
  },
  textButtonGroup: {
    fontSize: vw(3.5),
    color: Colors.gray,
  },
});

export default SaleScreen;
