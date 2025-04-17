import React from "react";
import styles from "./EmployeeManagement.module.css";

const EmployeeForm = ({ employee, onSave, onCancel }) => {
  const [formData, setFormData] = React.useState(
    employee || {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dob: "",
      address: "",
      role: "",
    },
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>
          {employee ? "Edit Employee" : "Add Employee"}
        </h2>
        <button
          className={styles.backButton}
          onClick={onCancel}
          aria-label="Back to employee list"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to List</span>
        </button>
      </div>
      <form onSubmit={handleSubmit} className={styles.employeeForm}>
        {[
          "firstName",
          "lastName",
          "email",
          "phoneNumber",
          "dob",
          "address",
          "role",
        ].map((field) => (
          <div className={styles.formField} key={field}>
            <label htmlFor={field} className={styles.fieldLabel}>
              {field.charAt(0).toUpperCase() +
                field
                  .slice(1)
                  .replace(/([A-Z])/g, " $1")
                  .trim()}
              :
            </label>
            <input
              id={field}
              name={field}
              type={
                field === "dob" ? "date" : field === "email" ? "email" : "text"
              }
              value={formData[field]}
              onChange={handleChange}
              className={styles.fieldInput}
              required
            />
          </div>
        ))}
        <button type="submit" className={styles.saveButton}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
