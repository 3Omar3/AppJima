import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.56.1:3000/",
});

apiClient.addResponseTransform((res) => {
  if (!res.ok) throw res;
});

export default apiClient;
