import React from "react";
import styles from "./EmployeeRewards.module.css";

const RewardForm = ({
  isEditMode,
  formData,
  setFormData,
  onSubmit,
  onCancel,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.modalOverlay}>
      <div
        className={styles.modalContent}
        role="dialog"
        aria-labelledby="formTitle"
      >
        <h2 id="formTitle" className={styles.modalTitle}>
          {isEditMode ? "Edit Reward" : "New Reward"}
        </h2>
        <form onSubmit={onSubmit} className={styles.rewardForm}>
          <div className={styles.formField}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input
              id="name"
              name="name"
              className={styles.formInput}
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="department" className={styles.formLabel}>
              Department
            </label>
            <input
              id="department"
              name="department"
              className={styles.formInput}
              type="text"
              value={formData.department}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              id="email"
              name="email"
              className={styles.formInput}
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="reason" className={styles.formLabel}>
              Reason for Award
            </label>
            <textarea
              id="reason"
              name="reason"
              className={styles.formTextarea}
              value={formData.reason}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="phone" className={styles.formLabel}>
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              className={styles.formInput}
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RewardForm;
