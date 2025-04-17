import React from "react";
import styles from "./CreatePolicyButton.module.css";

function CreatePolicyButton() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.createButton}>
        <PlusIcon />
        <span>Create New Policy</span>
      </button>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4v16m-8-8h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CreatePolicyButton;
