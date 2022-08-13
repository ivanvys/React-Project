import axios from "axios";
import { BASE_URL } from "../pages/Constants/constants";

const apiConfig = {
  baseURL: BASE_URL,
};

export const api = axios.create(apiConfig);
