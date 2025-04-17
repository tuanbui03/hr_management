import React from "react";
import styles from "./EmployeeRewards.module.css";

const Header = ({
  username,
  searchQuery,
  setSearchQuery,
  isSearchOpen,
  toggleSearch,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          loading="lazy"
          alt="Company Logo"
          src="https://placehold.co/120x40"
          className={styles.companyLogo}
        />
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <input
              className={styles.searchInput}
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search employees"
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className={styles.searchIcon}
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.userActions}>
        <button
          className={styles.mobileSearchButton}
          onClick={toggleSearch}
          aria-label="Toggle search"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <div className={styles.userInfo}>
          <img
            loading="lazy"
            alt={`${username}'s avatar`}
            src="https://placehold.co/40x40"
            className={styles.userAvatar}
          />
          <span className={styles.username}>{username}</span>
        </div>
      </div>
      <div
        className={styles.mobileSearchContainer}
        style={{
          display: isSearchOpen ? "block" : "none",
        }}
      >
        <input
          className={styles.mobileSearchInput}
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search employees"
        />
      </div>
    </header>
  );
};

export default Header;
