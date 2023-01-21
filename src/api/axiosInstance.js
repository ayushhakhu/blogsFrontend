import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
