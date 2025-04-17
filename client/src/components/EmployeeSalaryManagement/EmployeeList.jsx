import React from "react";
import styles from "./EmployeeSalaryManagement.module.css";

const EmployeeList = ({ employees, goToEdit, openDeleteModal }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.employeeTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Phone Number</th>
            <th>Basic Salary</th>
            <th>Bonus</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.phone}</td>
              <td>${employee.salary.toLocaleString()}</td>
              <td>${employee.bonus.toLocaleString()}</td>
              <td>
                <div className={styles.actionButtons}>
                  <button
                    className={styles.viewButton}
                    aria-label={`View ${employee.name}'s details`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                  <button
                    className={styles.editButton}
                    onClick={() => goToEdit(employee)}
                    aria-label={`Edit ${employee.name}'s details`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => openDeleteModal(employee)}
                    aria-label={`Delete ${employee.name}'s record`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
