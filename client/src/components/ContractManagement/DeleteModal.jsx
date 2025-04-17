import React from "react";
import styles from "./ContractList.module.css";

function DeleteModal({ onConfirm, onCancel }) {
  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true">
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Confirm Delete</h2>
        <p className={styles.modalMessage}>
          Are you sure you want to delete this contract?
        </p>
        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.confirmDeleteButton} onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
