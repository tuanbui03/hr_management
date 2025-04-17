import React from "react";
import styles from "./ProjectManagement.module.css";

const CreateProject = ({
  navigateToList,
  newProject,
  setNewProject,
  employees,
  handleEmployeeSelection,
}) => {
  return (
    <div className={styles.createProjectContainer}>
      <div className={styles.createProjectHeader}>
        <button
          className={styles.backButton}
          onClick={navigateToList}
          aria-label="Go back to project list"
        >
          ← Back
        </button>
        <h2 className={styles.createProjectTitle}>Create New Project</h2>
      </div>
      <form className={styles.createProjectForm}>
        <div className={styles.formGroup}>
          <label htmlFor="projectName" className={styles.formLabel}>
            Project Name
          </label>
          <input
            id="projectName"
            className={styles.formInput}
            type="text"
            value={newProject.name}
            onChange={(e) =>
              setNewProject({ ...newProject, name: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="startDate" className={styles.formLabel}>
            Start Date
          </label>
          <input
            id="startDate"
            className={styles.formInput}
            type="date"
            value={newProject.startDate}
            onChange={(e) =>
              setNewProject({ ...newProject, startDate: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.formGroup}>
          <fieldset>
            <legend className={styles.formLabel}>Team Members</legend>
            <div className={styles.employeeList}>
              {employees.map((employee) => (
                <label key={employee.id} className={styles.employeeCheckbox}>
                  <input
                    type="checkbox"
                    checked={newProject.selectedEmployees.includes(employee.id)}
                    onChange={() => handleEmployeeSelection(employee.id)}
                  />
                  <div>
                    <div className={styles.employeeName}>{employee.name}</div>
                    <div className={styles.employeeRole}>{employee.role}</div>
                  </div>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <div className={styles.formActions}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={navigateToList}
          >
            Cancel
          </button>
          <button type="submit" className={styles.createButton}>
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
