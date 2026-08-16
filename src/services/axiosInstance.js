import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://e-cart-be-2.onrender.com",
});

export default axiosInstance;