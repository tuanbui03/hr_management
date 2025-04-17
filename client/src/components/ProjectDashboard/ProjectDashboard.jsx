import React, { useState } from "react";
import Header from "./Header";
import ProjectStats from "./ProjectStats";
import styles from "./ProjectDashboard.module.css";

const ProjectDashboard = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [username] = useState("John Doe");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const stats = {
    monthly: {
      total: 24,
      completed: 18,
      inProgress: 6,
      trend: "+15%",
    },
    quarterly: {
      total: 65,
      completed: 52,
      inProgress: 13,
      trend: "+28%",
    },
  };

  return (
    <div className={styles.dashboardContainer}>
      <Header
        username={username}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSearchOpen={isSearchOpen}
        toggleSearch={toggleSearch}
      />
      <main className={styles.mainContent}>
        <div className={styles.statsContainer}>
          <ProjectStats title="Monthly Projects" stats={stats.monthly} />
          <ProjectStats title="Quarterly Projects" stats={stats.quarterly} />
        </div>
      </main>
    </div>
  );
};

export default ProjectDashboard;
