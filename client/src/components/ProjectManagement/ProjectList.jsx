import React from "react";
import styles from "./ProjectManagement.module.css";

const ProjectList = ({ projects, openDeleteModal }) => {
  return (
    <div className={styles.projectListContainer}>
      <table className={styles.projectTable}>
        <thead>
          <tr>
            <th scope="col">Project Name</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className={styles.projectRow}>
              <td>{project.name}</td>
              <td>
                <span
                  className={styles.statusBadge}
                  style={{
                    backgroundColor:
                      project.status === "Completed"
                        ? "#e8f5e9"
                        : project.status === "In Progress"
                          ? "#e3f2fd"
                          : "#fff3e0",
                    color:
                      project.status === "Completed"
                        ? "#2e7d32"
                        : project.status === "In Progress"
                          ? "#1565c0"
                          : "#ef6c00",
                  }}
                >
                  {project.status}
                </span>
              </td>
              <td>{project.dueDate}</td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => openDeleteModal(project.id)}
                  aria-label={`Delete ${project.name} project`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
