import axios, {
  AxiosHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";

const axiosConfig = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

axiosConfig.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get("token");
    console.log("Token:", token);
    const headers: AxiosHeaders = new AxiosHeaders({
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : "",
    });
    config.headers = headers;
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosConfig;
