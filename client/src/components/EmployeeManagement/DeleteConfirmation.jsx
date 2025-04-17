import React from "react";
import styles from "./EmployeeManagement.module.css";

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true">
      <div className={styles.modalContent}>
        <h3 className={styles.modalTitle}>Confirm Delete</h3>
        <p className={styles.modalMessage}>
          Are you sure you want to delete this employee? This action cannot be
          undone.
        </p>
        <div className={styles.modalActions}>
          <button
            className={`${styles.modalButton} ${styles.cancelButton}`}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={`${styles.modalButton} ${styles.deleteButton}`}
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
