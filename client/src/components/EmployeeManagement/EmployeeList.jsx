import React from "react";
import styles from "./EmployeeManagement.module.css";
import EmployeeRow from "./EmployeeRow";
import SearchBar from "./SearchBar";

const EmployeeList = ({
  employees,
  onView,
  onEdit,
  onDelete,
  searchQuery,
  updateSearch,
}) => {
  return (
    <div className={styles.employeeDirectory}>
      <h2 className={styles.directoryTitle}>Employee Directory</h2>
      <SearchBar searchQuery={searchQuery} updateSearch={updateSearch} />
      <div className={styles.tableWrapper}>
        <table className={styles.employeeTable}>
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Address</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
