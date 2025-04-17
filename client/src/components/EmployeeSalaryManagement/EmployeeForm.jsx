import React from "react";
import styles from "./EmployeeSalaryManagement.module.css";

const EmployeeForm = ({
  currentPage,
  formData,
  setFormData,
  handleSubmit,
  goToList,
}) => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>
        {currentPage === "create" ? "Create New Salary" : "Edit Salary"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formFields}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              id="name"
              className={styles.input}
              type="text"
              required
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="department" className={styles.label}>
              Department
            </label>
            <input
              id="department"
              className={styles.input}
              type="text"
              required
              value={formData.department}
              onChange={(event) =>
                setFormData({ ...formData, department: event.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="phone" className={styles.label}>
              Phone Number
            </label>
            <input
              id="phone"
              className={styles.input}
              type="tel"
              required
              value={formData.phone}
              onChange={(event) =>
                setFormData({ ...formData, phone: event.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="salary" className={styles.label}>
              Basic Salary
            </label>
            <input
              id="salary"
              className={styles.input}
              type="number"
              min="0"
              required
              value={formData.salary}
              onChange={(event) =>
                setFormData({ ...formData, salary: event.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="bonus" className={styles.label}>
              Bonus
            </label>
            <input
              id="bonus"
              className={styles.input}
              type="number"
              min="0"
              required
              value={formData.bonus}
              onChange={(event) =>
                setFormData({ ...formData, bonus: event.target.value })
              }
            />
          </div>
          <div className={styles.formActions}>
            <button
              className={styles.cancelButton}
              type="button"
              onClick={goToList}
            >
              Cancel
            </button>
            <button className={styles.submitButton} type="submit">
              {currentPage === "create" ? "Create" : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
