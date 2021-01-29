import React, { useState } from "react";
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
import RNPickerSelect from "react-native-picker-select";
import * as DocumentPicker from "expo-document-picker";

// components
import Spinner from "../components/Spinner";

// resource
import { t } from "../config/locales";
import Colors from "../config/colors";
import { Image } from "react-native";

// Images
const bancos = {
  bancomer: require("../assets/bancos/bancomer.jpg"),
  banorte: require("../assets/bancos/banorte.jpg"),
  banamex: require("../assets/bancos/banamex.png"),
  mercado: require("../assets/bancos/mercadoPago.png"),
};

function Funding() {
  const [select, setSelect] = useState(<Bancaria />);

  function Bancaria() {
    return (
      <>
        <View
          style={[
            styles.card,
            {
              marginVertical: 15,
            },
          ]}
        >
          <View
            style={{
              marginTop: 10,
              marginBottom: 15,
            }}
          >
            <Text style={styles.txtTop}>Cuenta fiscal:</Text>
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4),
                textAlign: "center",
              }}
            >
              INVERSIONES JIMA
            </Text>
          </View>
          <View
            style={{
              marginVertical: 15,
              alignItems: "center",
            }}
          >
            <Image
              source={bancos.bancomer}
              style={{ height: vh(3), width: vw(40), marginBottom: 15 }}
            />
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
                fontWeight: "bold",
              }}
            >
              No. de cuenta
            </Text>
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
                marginBottom: 10,
              }}
            >
              0115225477
            </Text>
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
                fontWeight: "bold",
              }}
            >
              CLABE Interbancaria
            </Text>
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
              }}
            >
              012327001152254775
            </Text>
          </View>
          <View
            style={{
              marginVertical: 15,
              alignItems: "center",
            }}
          >
            <Image
              source={bancos.banorte}
              style={{ height: vh(2.2), width: vw(32), marginBottom: 15 }}
            />
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
                fontWeight: "bold",
              }}
            >
              No. de cuenta
            </Text>
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
                marginBottom: 10,
              }}
            >
              1085144032
            </Text>
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
                fontWeight: "bold",
              }}
            >
              CLABE Interbancaria
            </Text>
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
              }}
            >
              072327010851440329
            </Text>
          </View>
          <View
            style={{
              marginVertical: 15,
              alignItems: "center",
            }}
          >
            <Image
              source={bancos.banamex}
              style={{ height: vh(4), width: vw(30.5), marginBottom: 15 }}
            />
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
                fontWeight: "bold",
              }}
            >
              No. de cuenta
            </Text>
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
                marginBottom: 10,
              }}
            >
              34410501
            </Text>
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
                fontWeight: "bold",
              }}
            >
              CLABE Interbancaria
            </Text>
            <Text
              style={{
                color: Colors.text,
                letterSpacing: 0.6,
                fontSize: vw(4.2),
              }}
            >
              002327701234410501
            </Text>
          </View>
        </View>
        <View style={[styles.card, { marginTop: 20, marginBottom: 15 }]}>
          <Text
            style={{
              fontSize: vw(4),
              letterSpacing: 0.6,
              color: Colors.text,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Banco para transacción
          </Text>
          <View style={styles.containerSelector}>
            <RNPickerSelect
              placeholder={{ label: "Seleccione una opción", value: 0 }}
              onValueChange={(value) => {
                if (value === 0) return;
              }}
              style={pickerSelect}
              Icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={22}
                    color={Colors.gray}
                    style={{ top: 4, marginLeft: 4, marginRight: 2 }}
                  />
                );
              }}
              items={[
                { label: "No. de cuenta BBVA Bancomer", value: 1 },
                { label: "CLABE Inter. BBVA Bancomer", value: 2 },
                { label: "No. de cuenta Banorte", value: 3 },
                { label: "CLABE Inter. Banorte", value: 4 },
                { label: "No. de cuenta Banamex", value: 5 },
                { label: "CLABE Inter. Banamex", value: 6 },
              ]}
              useNativeAndroidPickerStyle={false}
            />
          </View>
          <View style={{ marginTop: 25, marginBottom: 20 }}>
            <Spinner
              styleText={{
                alignSelf: "center",
                fontSize: vw(4),
                color: Colors.text,
              }}
              text={"Monto de transacción"}
              icon="card-bulleted-outline"
              config={{
                step: 1,
                precision: 2,
                value: 0,
                max: 99999999,
                min: 0,
                type: "float",
              }}
              onChange={(n) => {
                // console.log(n);
              }}
            />
          </View>
          <View style={{ marginBottom: 10, marginTop: 5 }}>
            <Text
              style={{
                fontSize: vw(4),
                letterSpacing: 0.6,
                color: Colors.text,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Comprobante
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: Colors.liteGray,
                width: "70%",
                alignSelf: "center",
                borderRadius: 10,
                marginBottom: 15,
                padding: 5,
              }}
              onPress={() => {
                DocumentPicker.getDocumentAsync();
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: vw(4),
                  color: Colors.chi,
                  letterSpacing: 0.6,
                }}
              >
                Seleccionar archivo...
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              backgroundColor: "khaki",
              fontSize: vw(3.5),
              fontWeight: "bold",
              letterSpacing: 0.6,
              color: Colors.text,
              textAlign: "center",
              borderRadius: 10,
              padding: 10,
              margin: 10,
              marginBottom: 15,
            }}
          >
            La transacción será revisada y confirmada en las proximas 24 horas.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.chi,
              padding: 8,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: vw(4.3),
                color: Colors.white,
                letterSpacing: 0.6,
                fontWeight: "bold",
              }}
            >
              Enviar
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  function MercadoPago() {
    return (
      <View
        style={[
          styles.card,
          {
            marginVertical: 15,
            marginBottom: 15,
          },
        ]}
      >
        <Spinner
          styleText={{
            alignSelf: "center",
            fontSize: vw(4),
            color: Colors.text,
          }}
          text={"Monto a invertir en JIMA"}
          icon="card-bulleted-outline"
          config={{
            step: 1,
            precision: 2,
            value: 0,
            max: 99999999,
            min: 0,
            type: "float",
          }}
          onChange={(n) => {
            // console.log(n);
          }}
        />
        <View style={{ alignItems: "center", marginVertical: 25 }}>
          <Text style={{ fontSize: vw(4), letterSpacing: 0.6 }}>
            Monto despues de comisión
          </Text>
          <Text
            style={{
              fontSize: vw(5),
              letterSpacing: 0.6,
              marginTop: 10,
              color: Colors.chi,
            }}
          >
            $0.00
          </Text>
        </View>
        <Text
          style={{
            fontSize: vw(3.8),
            color: Colors.gray,
            letterSpacing: 0.6,
            textAlign: "center",
          }}
        >
          Comisión: 3.49% + $4.00MXN
        </Text>
        <Text
          style={{
            fontSize: vw(3.8),
            color: Colors.gray,
            letterSpacing: 0.6,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          No incluye IVA
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "khaki",
            alignItems: "center",
            borderRadius: 15,
            marginTop: 25,
          }}
        >
          <Image
            source={bancos.mercado}
            style={{ width: 100, height: 26, margin: 8 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <View style={styles.card}>
        <Text
          style={{
            fontSize: vw(4.2),
            letterSpacing: 0.6,
            color: Colors.text,
            textAlign: "center",
          }}
        >
          Método de pago
        </Text>
        <View style={styles.containerSelector}>
          <RNPickerSelect
            placeholder={{}}
            onValueChange={(value) => {
              if (value === 1) setSelect(<Bancaria />);
              else setSelect(<MercadoPago />);
            }}
            style={pickerSelect}
            Icon={() => {
              return (
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={22}
                  color={Colors.gray}
                  style={{ top: 4, marginLeft: 4, marginRight: 2 }}
                />
              );
            }}
            items={[
              { label: "Transacción bancaria", value: 1 },
              { label: "Mercado pago", value: 2 },
            ]}
            useNativeAndroidPickerStyle={false}
          />
        </View>
      </View>
      {select}
    </>
  );
}

function Retirement() {
  return (
    <View>
      <Text
        style={{
          fontSize: vw(3.5),
          letterSpacing: 0.6,
          color: Colors.gray,
          textAlign: "center",
        }}
      >
        Método de retiro
      </Text>
    </View>
  );
}

function FundingScreen({ navigation }) {
  // estados de los botones
  const on = Colors.chi;
  const off = Colors.gray;

  // React Hooks declarations
  const [screen, setScreen] = useState(<Funding />); // recibe la pantalla inicial
  const [display, setDisplay] = useState([on, off]);

  function selectDisplay(i) {
    let seleccion = [off, off];
    seleccion[i] = on;
    setDisplay(seleccion);
    setScreen(i ? <Retirement /> : <Funding />);
  }

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.txtTitle}>Transacciones</Text>
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
        <Text
          style={{
            fontSize: vw(4.2),
            letterSpacing: 0.6,
            color: Colors.gray,
            marginBottom: 15,
            textAlign: "center",
          }}
        >
          Moneda de pago: MXN
        </Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            style={[styles.containerIcon, { marginRight: 10 }]}
            onPress={() => {
              selectDisplay(0);
            }}
          >
            <MaterialCommunityIcons
              name="download-outline"
              size={vw(6.8)}
              color={display[0]}
            />
            <Text style={[styles.txtButton, { color: display[0] }]}>
              {t("funding")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => {
              selectDisplay(1);
            }}
          >
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={vw(5.5)}
              color={display[1]}
            />
            <Text style={[styles.txtButton, { color: display[1] }]}>
              Retirar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {screen}
    </ScrollView>
  );
}

// default styles
const styles = StyleSheet.create({
  // card graphics
  card: {
    backgroundColor: Colors.white,
    padding: 20,
    margin: 20,
    marginBottom: 0,
    borderRadius: 15,
  },
  txtTitle: {
    color: Colors.text,
    letterSpacing: 0.6,
    textAlign: "center",
    fontSize: vw(5),
  },
  containerIcon: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.liteGray,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  txtButton: {
    color: Colors.gray,
    fontSize: vw(3.2),
    letterSpacing: 0.6,
    marginTop: 2.5,
  },
  containerSelector: {
    alignSelf: "center",
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.liteGray,
    borderRadius: 10,
    height: 35,
    justifyContent: "center",
    marginTop: 10,
  },
  txtTop: {
    color: Colors.text,
    letterSpacing: 0.6,
    fontSize: vw(4.2),
    fontWeight: "bold",
    textAlign: "center",
  },
});

const pickerSelect = StyleSheet.create({
  inputIOS: {
    color: Colors.text,
    fontSize: vw(4),
    paddingLeft: 8,
    paddingRight: 25,
    alignSelf: "center",
    letterSpacing: 0.6,
  },
  inputAndroid: {
    color: Colors.text,
    fontSize: vw(4),
    paddingLeft: 8,
    paddingRight: 25,
    alignSelf: "center",
    letterSpacing: 0.6,
  },
});

export default FundingScreen;
