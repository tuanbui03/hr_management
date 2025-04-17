import React from "react";
import styles from "./EmployeeRewards.module.css";

const EmployeeTable = ({ employees, onView, onEdit, onDelete }) => {
  return (
    <table className={styles.employeeTable}>
      <thead>
        <tr className={styles.tableHeader}>
          <th className={styles.tableHeaderCell}>Name</th>
          <th className={styles.tableHeaderCell}>Department</th>
          <th className={styles.tableHeaderCell}>Email</th>
          <th className={styles.tableHeaderCell}>Reason for Award</th>
          <th className={styles.tableHeaderCell}>Phone</th>
          <th className={styles.tableHeaderCellActions}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr className={styles.tableRow} key={employee.id}>
            <td className={styles.tableCell}>{employee.name}</td>
            <td className={styles.tableCell}>{employee.department}</td>
            <td className={styles.tableCellHiddenMobile}>{employee.email}</td>
            <td className={styles.tableCell}>{employee.reason}</td>
            <td className={styles.tableCellHiddenMobile}>{employee.phone}</td>
            <td className={styles.tableCellActions}>
              <div className={styles.actionButtons}>
                <button
                  className={styles.actionButton}
                  onClick={() => onView(employee)}
                  aria-label={`View details for ${employee.name}`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => onEdit(employee)}
                  aria-label={`Edit reward for ${employee.name}`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => onDelete(employee)}
                  aria-label={`Delete reward for ${employee.name}`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
