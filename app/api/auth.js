import client from "./client";
import endpoint from "./routes";

const login = (email, password) =>
  client.post(endpoint.REGISTER, { email, password });

export default { login };
