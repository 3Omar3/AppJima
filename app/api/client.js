import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.56.1:3000/",
});

export default apiClient;
