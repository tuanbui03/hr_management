import React from "react";
import styles from "./PolicyGrid.module.css";

function PolicyGrid({ policies }) {
  return (
    <div className={styles.policyGrid}>
      {policies.map((policy) => (
        <PolicyCard key={policy.id} policy={policy} />
      ))}
    </div>
  );
}

function PolicyCard({ policy }) {
  return (
    <div className={styles.policyCard} tabIndex="0">
      <img src={policy.image} alt="" className={styles.policyImage} />
      <div className={styles.policyInfo}>
        <h3 className={styles.policyName}>{policy.name}</h3>
        <span
          className={`${styles.policyStatus} ${
            policy.status === "Active"
              ? styles.statusActive
              : styles.statusPending
          }`}
        >
          {policy.status}
        </span>
      </div>
    </div>
  );
}

export default PolicyGrid;
