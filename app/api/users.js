import client from "./client";

const register = (info) => client.post("/signup", info);

const recoveryMail = (email) => client.post("/account/recovery", { email });

export default { register, recoveryMail };
