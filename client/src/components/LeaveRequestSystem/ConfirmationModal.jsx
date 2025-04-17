import React from "react";
import styles from "./LeaveRequestSystem.module.css";

const ConfirmationModal = ({ onConfirm, onClose }) => {
  return (
    <div
      className={styles.confirmationModal}
      role="dialog"
      aria-labelledby="confirmModalTitle"
    >
      <div className={styles.confirmationContent}>
        <h3 id="confirmModalTitle" className={styles.confirmationTitle}>
          Confirm Leave Request Approval
        </h3>
        <p className={styles.confirmationMessage}>
          Do you want to approve this leave request?
        </p>
        <div className={styles.confirmationButtons}>
          <button
            className={styles.confirmButton}
            onClick={() => onConfirm(true)}
            aria-label="Yes, approve the leave request"
          >
            Yes
          </button>
          <button
            className={styles.rejectConfirmButton}
            onClick={() => onConfirm(false)}
            aria-label="No, reject the leave request"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
