import React from "react";
import styles from "./EmployeeManagement.module.css";

const SearchBar = ({ searchQuery, updateSearch }) => {
  return (
    <div className={styles.searchBarContainer}>
      <label htmlFor="employeeSearch" className={styles.visuallyHidden}>
        Search employees
      </label>
      <input
        id="employeeSearch"
        type="search"
        placeholder="Search employees..."
        className={styles.searchInput}
        value={searchQuery}
        onChange={(e) => updateSearch(e)}
        aria-label="Search employees"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={styles.searchIcon}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          strokeWidth={2}
        />
      </svg>
    </div>
  );
};

export default SearchBar;
