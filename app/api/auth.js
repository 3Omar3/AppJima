import client from "./client";

const login = (email, password, tipo_login) =>
  client.post("/login", { email, password, tipo_login });

export default { login };
