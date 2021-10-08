import axios from "axios";

const path = "https://api.intelzy.co/api/";

const axiosInstance = axios.create({
  baseURL: path,
  headers: {
    Authorization: localStorage.getItem("access")
      ? "Bearer " + localStorage.getItem("access")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
export default axiosInstance;
