import React, { useState } from "react";
import styles from "./LeaveRequestSystem.module.css";

const CreateLeaveRequestModal = ({ onSubmit, onClose }) => {
  const [newRequest, setNewRequest] = useState({
    name: "",
    department: "",
    startDate: "",
    endDate: "",
  });

  const departments = [
    "Marketing",
    "Engineering",
    "Human Resources",
    "Sales",
    "Finance",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newRequest);
  };

  return (
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-labelledby="createModalTitle"
    >
      <div className={styles.modalContent}>
        <h2 id="createModalTitle" className={styles.modalTitle}>
          Create New Leave Request
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Full Name
            </label>
            <input
              id="name"
              className={styles.input}
              type="text"
              name="name"
              value={newRequest.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="department" className={styles.label}>
              Department
            </label>
            <select
              id="department"
              className={styles.input}
              name="department"
              value={newRequest.department}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.dateGroup}>
            <div className={styles.dateInput}>
              <label htmlFor="startDate" className={styles.label}>
                Start Date
              </label>
              <input
                id="startDate"
                className={styles.input}
                type="date"
                name="startDate"
                value={newRequest.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.dateInput}>
              <label htmlFor="endDate" className={styles.label}>
                End Date
              </label>
              <input
                id="endDate"
                className={styles.input}
                type="date"
                name="endDate"
                value={newRequest.endDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLeaveRequestModal;
