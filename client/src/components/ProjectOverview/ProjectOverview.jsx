import React, { useState } from "react";
import styles from "./ProjectOverview.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import StatCard from "./StatCard";
import ProjectsTable from "./ProjectsTable";

const ProjectOverview = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const stats = [
    { title: "Completed Projects", value: 24, type: "completed" },
    { title: "Pending Projects", value: 12, type: "pending" },
    { title: "Active Projects", value: 8, type: "active" },
  ];

  const projects = [
    {
      name: "Website Redesign",
      lead: "Sarah Johnson",
      status: "Completed",
      deadline: "Dec 31, 2023",
    },
    {
      name: "Mobile App Development",
      lead: "Mike Chen",
      status: "In Progress",
      deadline: "Jan 15, 2024",
    },
    {
      name: "Database Migration",
      lead: "Alex Thompson",
      status: "Delayed",
      deadline: "Feb 1, 2024",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <Header />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main
        className={styles.mainContent}
        style={{
          marginLeft: isSidebarOpen ? "280px" : "80px",
        }}
      >
        <div className={styles.contentWrapper}>
          <section className={styles.overviewSection}>
            <h1 className={styles.sectionTitle}>Project Overview</h1>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>
          </section>
          <section className={styles.projectsSection}>
            <h2 className={styles.projectsTitle}>Recent Projects</h2>
            <ProjectsTable projects={projects} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectOverview;
