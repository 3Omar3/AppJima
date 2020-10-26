import client from "./client";

const register = (info) => client.post("/signup", info);

const recoveryMail = (email) => client.put("/account/recovery", { email });

export default { register, recoveryMail };
