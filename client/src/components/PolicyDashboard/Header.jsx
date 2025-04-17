import React, { useState } from "react";
import styles from "./Header.module.css";

function Header({ searchQuery, setSearchQuery }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [username] = useState("John Doe");

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          src="https://placehold.co/120x40"
          alt="Company Logo"
          className={styles.logo}
        />
        <div className={styles.desktopSearch}>
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>
      <div className={styles.userSection}>
        <button
          className={styles.mobileSearchButton}
          onClick={toggleSearch}
          aria-label="Toggle search"
        >
          <SearchIcon />
        </button>
        <div className={styles.userInfo}>
          <img
            src="https://placehold.co/40x40"
            alt={`${username}'s avatar`}
            className={styles.userAvatar}
          />
          <span className={styles.username}>{username}</span>
        </div>
      </div>
      {isSearchOpen && (
        <div className={styles.mobileSearch}>
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      )}
    </header>
  );
}

function SearchInput({ searchQuery, setSearchQuery }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="search"
        placeholder="Search..."
        className={styles.searchInput}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search policies"
      />
      <SearchIcon />
    </div>
  );
}

function SearchIcon() {
  return (
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
      />
    </svg>
  );
}

export default Header;
