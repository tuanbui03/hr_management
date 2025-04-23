// src/components/Loading.js
import React from "react";
import "./Loading.css"; // nhớ import css

function Loading({ isUploading = false }) {
  return (
    <div className={`loading-indicator ${isUploading ? "uploading" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
}

export default Loading;
