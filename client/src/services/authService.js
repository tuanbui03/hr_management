// src/services/authService.js

import { callApi } from "./api";
import { getLocalStorage } from "./utils/localstore"; 
import { Constant } from "./utils/constant"; 

const TOKEN_KEY = Constant.STORAGE.ACCESS_TOKEN;
const USER_KEY = Constant.STORAGE.USER_INFO;

// LOGIN
export const loginApi = async (email, password) => {
  const payload = { email, password };

  const res = await callApi("post", "/api/users/login", payload);

  if (res.status === 200) {
    localStorage.setItem(TOKEN_KEY, res.token);
    localStorage.setItem(USER_KEY, JSON.stringify(res.data));
  }

  return res;
};

// LOGOUT
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

// GET CURRENT USER
export const getCurrentUser = () => {
  const user = getLocalStorage(USER_KEY);
  if (user) return JSON.parse(user);
  return null;
};

// CHECK IS LOGGED IN
export const isLoggedIn = () => {
  const token = getLocalStorage(TOKEN_KEY);
  return !!token;
};
