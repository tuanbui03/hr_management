import React from "react";
import styles from "./ProjectDashboard.module.css";

const ProjectStats = ({ title, stats }) => {
  return (
    <div className={styles.projectStatsCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span
          className={styles.trendIndicator}
          style={{
            color: stats.trend.includes("+") ? "#10b981" : "#ef4444",
            background: stats.trend.includes("+") ? "#dcfce7" : "#fee2e2",
          }}
        >
          {stats.trend}
        </span>
      </div>
      <div className={styles.statsGrid}>
        <div>
          <p className={styles.statLabel}>Total Projects</p>
          <h4 className={styles.statValue}>{stats.total}</h4>
        </div>
        <div>
          <p className={styles.statLabel}>Completed</p>
          <h4 className={styles.statValueCompleted}>{stats.completed}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;
