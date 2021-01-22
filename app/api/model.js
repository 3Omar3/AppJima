import client from "./client";

// home
const getData = () => client.get("/data");
const getTransacciones = (tipo = 2) =>
  client.post("/report/transacciones", { tipo });

// purchase
const getPurchase = () => client.get("/purchase");
const getPurchasePredios = (anio) => client.post("/purchase/predios", { anio });

// sale
const getSale = () => client.get("/sale");
const getSalePredios = (anio) => client.post("/sale/predios", { anio });

export default {
  getData,
  getTransacciones,
  getPurchase,
  getPurchasePredios,
  getSale,
  getSalePredios,
};
