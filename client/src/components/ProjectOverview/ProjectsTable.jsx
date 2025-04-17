import React from "react";
import styles from "./ProjectOverview.module.css";

const ProjectsTable = ({ projects }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return styles.completedStatus;
      case "in progress":
        return styles.inProgressStatus;
      case "delayed":
        return styles.delayedStatus;
      default:
        return "";
    }
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.projectsTable}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.tableHeaderCell}>Project Name</th>
            <th className={styles.tableHeaderCell}>Team Lead</th>
            <th className={styles.tableHeaderCell}>Status</th>
            <th className={styles.tableHeaderCell}>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className={styles.tableCell}>{project.name}</td>
              <td className={styles.tableCell}>{project.lead}</td>
              <td className={styles.tableCell}>
                <span
                  className={`${styles.statusBadge} ${getStatusClass(project.status)}`}
                >
                  {project.status}
                </span>
              </td>
              <td className={styles.tableCell}>{project.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
