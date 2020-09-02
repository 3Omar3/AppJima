import client from "./client";

const register = (info) => client.post("/signup", info);

export default { register };
