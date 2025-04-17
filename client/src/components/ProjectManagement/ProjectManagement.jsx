import React, { useState } from "react";
import styles from "./ProjectManagement.module.css";
import Header from "./Header";
import ProjectList from "./ProjectList";
import CreateProject from "./CreateProject";
import DeleteModal from "./DeleteModal";

function ProjectManagement() {
  const [userName] = useState("John Doe");
  const [showSearch, setShowSearch] = useState(false);
  const [currentView, setCurrentView] = useState("list");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [newProject, setNewProject] = useState({
    name: "",
    startDate: "",
    selectedEmployees: [],
  });

  const [employees] = useState([
    { id: 1, name: "Alice Johnson", role: "Developer" },
    { id: 2, name: "Bob Smith", role: "Designer" },
    { id: 3, name: "Carol White", role: "Project Manager" },
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      status: "In Progress",
      dueDate: "2024-02-28",
    },
    {
      id: 2,
      name: "Mobile App Development",
      status: "Planning",
      dueDate: "2024-03-15",
    },
    {
      id: 3,
      name: "Marketing Campaign",
      status: "Completed",
      dueDate: "2024-02-10",
    },
  ]);

  const toggleSearch = () => setShowSearch(!showSearch);
  const navigateToCreate = () => setCurrentView("create");
  const navigateToList = () => setCurrentView("list");

  const handleEmployeeSelection = (employeeId) => {
    setNewProject((prev) => ({
      ...prev,
      selectedEmployees: prev.selectedEmployees.includes(employeeId)
        ? prev.selectedEmployees.filter((id) => id !== employeeId)
        : [...prev.selectedEmployees, employeeId],
    }));
  };

  const openDeleteModal = (projectId) => {
    setProjectToDelete(projectId);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setProjectToDelete(null);
  };

  const confirmDelete = () => {
    setProjects(projects.filter((project) => project.id !== projectToDelete));
    closeDeleteModal();
  };

  return (
    <div className={styles.projectManagement}>
      <Header
        userName={userName}
        showSearch={showSearch}
        toggleSearch={toggleSearch}
      />
      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Projects Overview</h1>
          <button
            className={styles.newProjectButton}
            onClick={navigateToCreate}
          >
            New Project
          </button>
        </div>
        {currentView === "create" ? (
          <CreateProject
            navigateToList={navigateToList}
            newProject={newProject}
            setNewProject={setNewProject}
            employees={employees}
            handleEmployeeSelection={handleEmployeeSelection}
          />
        ) : (
          <ProjectList projects={projects} openDeleteModal={openDeleteModal} />
        )}
        {showDeleteModal && (
          <DeleteModal
            closeDeleteModal={closeDeleteModal}
            confirmDelete={confirmDelete}
          />
        )}
      </main>
    </div>
  );
}

export default ProjectManagement;
