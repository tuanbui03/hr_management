import React from "react";
import styles from "./ProjectOverview.module.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { icon: "📊", label: "Index" },
    { icon: "👥", label: "Employee Management" },
    { icon: "🏢", label: "Department Management" },
    { icon: "📊", label: "Project Management" },
    { icon: "📄", label: "Contract Management" },
    { icon: "💰", label: "Salary Management" },
    { icon: "🗓", label: "Leave Management" },
    { icon: "🏆", label: "Reward Management" },
    { icon: "📋", label: "Policy Management" },
  ];

  return (
    <aside
      className={styles.sidebar}
      style={{
        width: isOpen ? "280px" : "80px",
        "@media (max-width: 991px)": {
          width: isOpen ? "240px" : "0",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        },
      }}
    >
      <button
        className={styles.toggleButton}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            stroke="#4B5563"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isOpen ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
          />
        </svg>
      </button>
      <nav>
        {navItems.map((item) => (
          <div
            className={styles.navItem}
            key={item.label}
            style={{
              "@media (max-width: 991px)": {
                padding: isOpen ? "12px 16px" : "0",
                opacity: isOpen ? 1 : 0,
              },
            }}
          >
            <span className={styles.navIcon} aria-hidden="true">
              {item.icon}
            </span>
            <span
              className={styles.navLabel}
              style={{
                opacity: isOpen ? 1 : 0,
                "@media (max-width: 991px)": {
                  display: isOpen ? "block" : "none",
                },
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
