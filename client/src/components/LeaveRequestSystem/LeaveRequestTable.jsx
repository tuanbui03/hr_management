import React from "react";
import styles from "./LeaveRequestSystem.module.css";

const LeaveRequestTable = ({ leaveRequests, onApproveClick }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.leaveRequestTable}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.tableHeaderCell}>Full Name</th>
            <th className={styles.tableHeaderCell}>Department</th>
            <th className={styles.tableHeaderCell}>Start Date</th>
            <th className={styles.tableHeaderCell}>End Date</th>
            <th className={styles.tableHeaderCell}>Status</th>
            <th className={styles.tableHeaderCell}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((request) => (
            <tr key={request.id} className={styles.tableRow}>
              <td className={styles.tableCell}>{request.name}</td>
              <td className={styles.tableCell}>{request.department}</td>
              <td className={styles.tableCell}>
                {new Date(request.startDate).toLocaleDateString()}
              </td>
              <td className={styles.tableCell}>
                {new Date(request.endDate).toLocaleDateString()}
              </td>
              <td className={styles.statusCell}>
                <span className={styles.statusBadge}>{request.status}</span>
              </td>
              <td className={styles.actionCell}>
                <button
                  className={`${styles.actionButton} ${styles.approveButton}`}
                  onClick={() => onApproveClick(request.id)}
                  aria-label={`Approve request for ${request.name}`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </button>
                <button
                  className={`${styles.actionButton} ${styles.rejectButton}`}
                  aria-label={`Reject request for ${request.name}`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequestTable;
