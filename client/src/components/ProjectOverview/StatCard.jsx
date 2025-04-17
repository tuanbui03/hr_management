import React from "react";
import styles from "./ProjectOverview.module.css";

const StatCard = ({ title, value, type }) => {
  const cardClass = `${styles.statCard} ${styles[`${type}Card`]}`;
  const valueClass = `${styles.statValue} ${styles[`${type}Value`]}`;

  return (
    <div className={cardClass}>
      <h3 className={styles.statTitle}>{title}</h3>
      <p className={valueClass}>{value}</p>
    </div>
  );
};

export default StatCard;
