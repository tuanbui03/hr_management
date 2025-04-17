import React from "react";
import styles from "./EmployeeManagement.module.css";

const Sidebar = ({ isOpen, onToggle }) => {
  const sidebarItems = [
    "Employee Management",
    "Department Management",
    "Project Management",
    "Contract Management",
    "Salary Management",
    "Leave Management",
    "Reward Management",
    "Policy Management",
  ];

  return (
    <>
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
        aria-label="Main Navigation"
      >
        <nav>
          <ul className={styles.sidebarList}>
            {sidebarItems.map((item) => (
              <li key={item}>
                <button className={styles.sidebarButton}>{item}</button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {isOpen && (
        <div
          className={styles.sidebarOverlay}
          onClick={onToggle}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
