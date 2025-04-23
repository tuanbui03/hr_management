// src/utils/localstore.js

// Lưu dữ liệu vào LocalStorage
export const setLocalStorage = (key, value) => {
    if (!key) return;
    localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
  };
  
  // Lấy dữ liệu từ LocalStorage
  export const getLocalStorage = (key) => {
    if (!key) return null;
    return localStorage.getItem(key);
  };
  
  // Xóa dữ liệu khỏi LocalStorage
  export const removeLocalStorage = (key) => {
    if (!key) return;
    localStorage.removeItem(key);
  };
  
  // Xóa toàn bộ LocalStorage
  export const clearLocalStorage = () => {
    localStorage.clear();
  };
  