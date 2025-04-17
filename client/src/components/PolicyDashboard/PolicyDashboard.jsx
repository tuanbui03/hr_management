import React, { useState } from "react";
import Header from "./Header";
import PolicyGrid from "./PolicyGrid";
import CreatePolicyButton from "./CreatePolicyButton";
import styles from "./PolicyDashboard.module.css";

function PolicyDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [policies, setPolicies] = useState([
    {
      id: 1,
      name: "Health Insurance",
      status: "Active",
      image: "https://placehold.co/300x200",
    },
    {
      id: 2,
      name: "Car Insurance",
      status: "Active",
      image: "https://placehold.co/300x200",
    },
    {
      id: 3,
      name: "Home Insurance",
      status: "Pending",
      image: "https://placehold.co/300x200",
    },
    {
      id: 4,
      name: "Life Insurance",
      status: "Active",
      image: "https://placehold.co/300x200",
    },
  ]);

  return (
    <div className={styles.dashboard}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className={styles.mainContent}>
        <CreatePolicyButton />
        <PolicyGrid policies={policies} />
      </main>
    </div>
  );
}

export default PolicyDashboard;
