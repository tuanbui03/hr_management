import React from "react";
import styles from "./DepartmentList.module.css";

const DepartmentCard = ({ department, onSelect }) => {
  return (
    <div
      className={styles.departmentCard}
      onClick={() => onSelect(department)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect(department);
        }
      }}
      tabIndex="0"
      role="button"
      aria-label={`Select ${department.name} department`}
    >
      <h3 className={styles.departmentName}>{department.name}</h3>
      <p className={styles.departmentInfo}>
        <span className={styles["visually-hidden"]}>Manager: </span>
        {department.manager}
      </p>
      <p className={styles.departmentInfo}>
        <span className={styles["visually-hidden"]}>Employees: </span>
        {department.employees}
      </p>
    </div>
  );
};

export default DepartmentCard;
