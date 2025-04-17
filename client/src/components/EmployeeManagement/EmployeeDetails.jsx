import React from "react";
import styles from "./EmployeeManagement.module.css";

const EmployeeDetails = ({ employee, onBack }) => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsHeader}>
        <h2 className={styles.detailsTitle}>Employee Details</h2>
        <button
          className={styles.backButton}
          onClick={onBack}
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
      <table className={styles.detailsTable}>
        <tbody>
          {[
            ["Full Name", `${employee.firstName} ${employee.lastName}`],
            ["First Name", employee.firstName],
            ["Last Name", employee.lastName],
            ["Date of Birth", employee.dob],
            ["Address", employee.address],
            ["Email", employee.email],
            ["Phone Number", employee.phoneNumber],
            ["Role", employee.role],
          ].map(([label, value]) => (
            <tr key={label} className={styles.detailRow}>
              <td className={styles.detailLabel}>{label}</td>
              <td className={styles.detailValue}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
