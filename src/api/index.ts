import axios, { AxiosRequestConfig, AxiosHeaders } from "axios";
import { getStorage } from "../utils/storage";

const axiosInstance = axios.create({ baseURL: `http://localhost:8080` });

const token = getStorage("token");

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (token) {
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.dir("response error", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
