import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../../../constants";

export const URL = "http://localhost:3000";

const apiConfigForProject = {
  baseURL: URL,
};

export const api = axios.create(apiConfigForProject);

api.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return axiosConfig;
});
