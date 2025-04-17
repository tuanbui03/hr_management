import React from 'react';
import styles from './LeaveRequestSystem.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img
            loading="lazy"
            src="https://placehold.co/120x40"
            alt="Company Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.searchContainer}>
          <label htmlFor="searchInput" className={styles['visually-hidden']}>Search</label>
          <input
            id="searchInput"
            className={styles.searchInput}
            type="text"
            placeholder="Search..."
            aria-label="Search"
          />
          <div className={styles.searchIcon} aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
        <div className={styles.userInfo}>
          <img
            loading="lazy"
            src="https://placehold.co/40x40"
            alt="User Avatar"
            className={styles.userAvatar}
          />
          <span className={styles.userName}>John Smith</span>
        </div>
      </div>
    </header>
  );
};

export default Header;