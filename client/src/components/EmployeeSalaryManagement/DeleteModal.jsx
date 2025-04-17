import React from "react";
import styles from "./EmployeeSalaryManagement.module.css";

const DeleteModal = ({
  employeeToDelete,
  closeDeleteModal,
  deleteEmployee,
}) => {
  return (
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-labelledby="deleteModalTitle"
    >
      <div className={styles.modalContent}>
        <h3 id="deleteModalTitle" className={styles.modalTitle}>
          Confirm Delete
        </h3>
        <p className={styles.modalText}>
          Are you sure you want to delete {employeeToDelete?.name}'s salary
          record? This action cannot be undone.
        </p>
        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={closeDeleteModal}>
            Cancel
          </button>
          <button className={styles.deleteButton} onClick={deleteEmployee}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
