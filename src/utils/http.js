import axios from "axios";
import { CookieStorage, CookiesKeys } from "./cookie";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = CookieStorage.get(CookiesKeys.AuthToken);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
