import React, { useState } from "react";
import styles from "./EmployeeRewards.module.css";
import Header from "./Header";
import EmployeeTable from "./EmployeeTable";
import RewardForm from "./RewardForm";
import DeleteConfirmation from "./DeleteConfirmation";

const EmployeeRewards = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [username] = useState("John Doe");
  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    email: "",
    reason: "",
    phone: "",
  });

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      department: "Marketing",
      email: "sarah.j@company.com",
      reason: "Outstanding Campaign Performance",
      phone: "(555) 123-4567",
    },
    {
      id: 2,
      name: "Michael Chen",
      department: "Engineering",
      email: "m.chen@company.com",
      reason: "Innovation Excellence",
      phone: "(555) 234-5678",
    },
    {
      id: 3,
      name: "Emma Davis",
      department: "Customer Success",
      email: "emma.d@company.com",
      reason: "Client Satisfaction Achievement",
      phone: "(555) 345-6789",
    },
  ]);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleNewReward = () => {
    setIsEditMode(false);
    setFormData({
      name: "",
      department: "",
      email: "",
      reason: "",
      phone: "",
    });
    setShowForm(true);
  };

  const handleEditReward = (employee) => {
    setSelectedEmployee(employee);
    setFormData({ ...employee });
    setIsEditMode(true);
    setShowForm(true);
  };

  const handleDeleteReward = (employee) => {
    setSelectedEmployee(employee);
    setShowDeleteConfirm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      setEmployees(
        employees.map((emp) =>
          emp.id === selectedEmployee.id ? { ...formData, id: emp.id } : emp,
        ),
      );
    } else {
      setEmployees([...employees, { ...formData, id: employees.length + 1 }]);
    }
    setShowForm(false);
    setSelectedEmployee(null);
    setFormData({
      name: "",
      department: "",
      email: "",
      reason: "",
      phone: "",
    });
  };

  const handleDeleteConfirm = () => {
    setEmployees(employees.filter((emp) => emp.id !== selectedEmployee.id));
    setShowDeleteConfirm(false);
    setSelectedEmployee(null);
  };

  return (
    <div className={styles.employeeRewardsContainer}>
      <Header
        username={username}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSearchOpen={isSearchOpen}
        toggleSearch={toggleSearch}
      />
      <main className={styles.mainContent}>
        <div className={styles.actionBar}>
          <button className={styles.newRewardButton} onClick={handleNewReward}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>New Reward</span>
          </button>
        </div>
        <EmployeeTable
          employees={employees}
          onView={() => {}}
          onEdit={handleEditReward}
          onDelete={handleDeleteReward}
        />
      </main>
      {showForm && (
        <RewardForm
          isEditMode={isEditMode}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
        />
      )}
      {showDeleteConfirm && (
        <DeleteConfirmation
          employee={selectedEmployee}
          onConfirm={handleDeleteConfirm}
          onCancel={() => {
            setShowDeleteConfirm(false);
            setSelectedEmployee(null);
          }}
        />
      )}
    </div>
  );
};

export default EmployeeRewards;
