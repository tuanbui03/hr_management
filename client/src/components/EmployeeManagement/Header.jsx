import React from "react";
import styles from "./EmployeeManagement.module.css";
import SearchBar from "./SearchBar";

const Header = ({ onToggleSidebar, searchQuery, updateSearch }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <button
          className={styles.menuButton}
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <h1 className={styles.headerTitle}>Employee Management System</h1>
        <SearchBar searchQuery={searchQuery} updateSearch={updateSearch} />
      </div>
      <div className={styles.userInfo}>
        <img
          src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
          alt="Admin user avatar"
          className={styles.userAvatar}
        />
        <span className={styles.userName}>Admin User</span>
      </div>
    </header>
  );
};

export default Header;
