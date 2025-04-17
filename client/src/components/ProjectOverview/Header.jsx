import React from "react";
import styles from "./ProjectOverview.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img
            loading="lazy"
            alt="Company Logo"
            src="https://images.pexels.com/photos/9843189/pexels-photo-9843189.jpeg"
            className={styles.logo}
          />
          <span className={styles.companyName}>TEST</span>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.searchContainer}>
            <label htmlFor="searchInput" className={styles["visually-hidden"]}>
              Search
            </label>
            <input
              id="searchInput"
              className={styles.searchInput}
              type="text"
              placeholder="Search..."
              aria-label="Search"
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className={styles.searchIcon}
              aria-hidden="true"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.userInfo}>
            <img
              loading="lazy"
              alt="User avatar"
              src="https://images.pexels.com/photos/31473555/pexels-photo-31473555.jpeg"
              className={styles.userAvatar}
            />
            <span className={styles.userName}>John Smith</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
