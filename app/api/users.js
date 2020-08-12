import client from "./client";

const register = (userInfo) => client.post("/usuarios", userInfo);

export default {
  register,
};
