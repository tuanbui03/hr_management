import axios from "axios";
import { getLocalStorage } from "./utils/localstore"; 
import { Constant } from "./utils/constant";

const instance = axios.create({
  baseURL: Constant.API.BASE_URL, // đổi thành base url thật của bạn
});

// Reusable function
export const callApi = async (method, url, payload = {}, file = false) => {
  const token = getLocalStorage(Constant.STORAGE.ACCESS_TOKEN);

  const headers = {
    Authorization: token ? `Bearer ${token}` : "no-author",
    "Content-Type": file
      ? "multipart/form-data"
      : "application/json; charset=utf-8",
  };

  try {
    const res = await instance({
      method,
      url,
      data: ["post", "put"].includes(method) ? payload : undefined,
      params: ["get", "delete"].includes(method) ? payload : undefined,
      headers,
    });

    const { status, message, metadata } = res.data;

    return {
      status,
      message,
      token: metadata?.token || "",
      data: metadata?.data || {},
    };
  } catch (error) {
    console.error("API Call Failed:", error);
    return {
      status: error.response?.status || 500,
      message: error.response?.data?.message || "Something went wrong",
      token: "",
      data: {},
    };
  }
};
