import React from "react";
import styles from "./ProjectManagement.module.css";

const Header = ({ userName, showSearch, toggleSearch }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          loading="lazy"
          alt="Company Logo"
          src="https://images.pexels.com/photos/28450983/pexels-photo-28450983.jpeg"
          className={styles.logo}
        />
      </div>
      <div className={styles.headerActions}>
        <button
          className={styles.searchToggle}
          onClick={toggleSearch}
          aria-label="Toggle search"
        >
          <img
            loading="lazy"
            alt=""
            src="https://images.pexels.com/photos/7788351/pexels-photo-7788351.jpeg"
            className={styles.searchIcon}
            style={{ opacity: showSearch ? 0.7 : 1 }}
          />
        </button>
        <div className={styles.userInfo}>
          <img
            loading="lazy"
            alt={`${userName}'s avatar`}
            src="https://images.pexels.com/photos/31585388/pexels-photo-31585388.jpeg"
            className={styles.userAvatar}
          />
          <span className={styles.userName}>{userName}</span>
        </div>
      </div>
      {showSearch && (
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Search..."
            aria-label="Search projects"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
