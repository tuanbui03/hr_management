import React from "react";
import styles from "./ProjectDashboard.module.css";

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
          className={styles.logo}
        />
        <div className={styles.desktopSearch}>
          <label htmlFor="desktopSearchInput" className={styles.visuallyHidden}>
            Search
          </label>
          <input
            id="desktopSearchInput"
            className={styles.searchInput}
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
      </div>
      <div className={styles.userSection}>
        <button
          className={styles.mobileSearchButton}
          onClick={toggleSearch}
          aria-label="Toggle search"
        >
          <svg
            width="20"
            height="20"
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
        className={styles.mobileSearchOverlay}
        style={{
          display: isSearchOpen ? "block" : "none",
        }}
      >
        <div className={styles.mobileSearchWrapper}>
          <label htmlFor="mobileSearchInput" className={styles.visuallyHidden}>
            Search
          </label>
          <input
            id="mobileSearchInput"
            type="search"
            placeholder="Search..."
            className={styles.mobileSearchInput}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button className={styles.cancelButton} onClick={toggleSearch}>
            Cancel
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
