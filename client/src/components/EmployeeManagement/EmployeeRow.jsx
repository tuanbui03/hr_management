import React from "react";
import styles from "./EmployeeManagement.module.css";

const EmployeeRow = ({ employee, onView, onEdit, onDelete }) => {
  return (
    <tr className={styles.employeeRow}>
      <td>{employee.fullName}</td>
      <td>{employee.address}</td>
      <td>{employee.dob}</td>
      <td>{employee.role}</td>
      <td>
        <div className={styles.actionButtons}>
          <button
            className={`${styles.actionButton} ${styles.viewButton}`}
            onClick={() => onView(employee.id)}
            aria-label={`View details for ${employee.fullName}`}
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
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
          <button
            className={`${styles.actionButton} ${styles.editButton}`}
            onClick={() => onEdit(employee.id)}
            aria-label={`Edit details for ${employee.fullName}`}
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
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button
            className={`${styles.actionButton} ${styles.deleteButton}`}
            onClick={() => onDelete(employee.id)}
            aria-label={`Delete ${employee.fullName}`}
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
              <path d="M3 6h18" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;
