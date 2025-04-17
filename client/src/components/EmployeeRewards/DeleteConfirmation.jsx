import React from "react";
import styles from "./EmployeeRewards.module.css";

const DeleteConfirmation = ({ employee, onConfirm, onCancel }) => {
  return (
    <div className={styles.modalOverlay}>
      <div
        className={styles.modalContent}
        role="dialog"
        aria-labelledby="deleteConfirmTitle"
      >
        <h3 id="deleteConfirmTitle" className={styles.modalTitle}>
          Confirm Delete
        </h3>
        <p className={styles.modalText}>
          Are you sure you want to delete this reward for {employee?.name}?
        </p>
        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.deleteButton} onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
