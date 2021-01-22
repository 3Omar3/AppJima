import { create } from "apisauce";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://10.10.2.101:3000/",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["access-token"] = authToken;
});

export default apiClient;
