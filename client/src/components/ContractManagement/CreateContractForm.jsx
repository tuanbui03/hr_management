import React from "react";
import styles from "./ContractList.module.css";

function CreateContractForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Create New Contract</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.label}>
            Full Name
          </label>
          <input
            id="fullName"
            className={styles.input}
            type="text"
            required
            aria-required="true"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="effectiveDate" className={styles.label}>
            Effective Date
          </label>
          <input
            id="effectiveDate"
            className={styles.input}
            type="date"
            required
            aria-required="true"
          />
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.submitButton}>
            Create Contract
          </button>
          <a href="/contracts" className={styles.cancelLink}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}

export default CreateContractForm;
