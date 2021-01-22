import * as SecureStore from "expo-secure-store";

const key = "authToken";

const setToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (e) {
    console.log("error storing the auth token" + e);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (e) {
    console.log("error getting the auth token" + e);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (e) {
    console.log("error removing the auth token" + e);
  }
};

export default { setToken, getToken, removeToken };
