import React from "react";
import styles from "./ProjectManagement.module.css";

const DeleteModal = ({ closeDeleteModal, confirmDelete }) => {
  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true">
      <div className={styles.modalContent}>
        <h3 className={styles.modalTitle}>Confirm Deletion</h3>
        <p className={styles.modalText}>
          Are you sure you want to delete this project? This action cannot be
          undone.
        </p>
        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={closeDeleteModal}>
            Cancel
          </button>
          <button className={styles.deleteButton} onClick={confirmDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
