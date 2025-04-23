import React, { useState } from "react";
import styles from "./EmployeeManagement.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";
import EmployeeDetails from "./EmployeeDetails";
import DeleteConfirmation from "./DeleteConfirmation";

const EmployeeManagement = () => {
  const [currentView, setCurrentView] = useState("list");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [employees, setEmployees] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      fullName: "John Smith",
      address: "123 Tech Street, San Francisco, CA",
      dob: "1990-05-15",
      role: "Software Engineer",
      email: "john.smith@company.com",
      phoneNumber: "+1 (555) 123-4567",
    },
    {
      id: 2,
      firstName: "Sarah",
      lastName: "Johnson",
      fullName: "Sarah Johnson",
      address: "456 Innovation Ave, Seattle, WA",
      dob: "1988-09-23",
      role: "Product Manager",
      email: "sarah.johnson@company.com",
      phoneNumber: "+1 (555) 987-6543",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Chen",
      fullName: "Michael Chen",
      address: "789 Design Blvd, Austin, TX",
      dob: "1992-03-10",
      role: "UX Designer",
      email: "michael.chen@company.com",
      phoneNumber: "+1 (555) 456-7890",
    },
  ]);

  const handleView = (id) => {
    const employee = employees.find((emp) => emp.id === id);
    setSelectedEmployee(employee);
    setCurrentView("detail");
  };

  const handleEdit = (id) => {
    const employee = employees.find((emp) => emp.id === id);
    setSelectedEmployee(employee);
    setCurrentView("edit");
  };

  const handleDelete = (id) => {
    setEmployeeToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    setEmployees(employees.filter((emp) => emp.id !== employeeToDelete));
    setShowDeleteConfirm(false);
    setEmployeeToDelete(null);
    setCurrentView("list");
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setEmployeeToDelete(null);
  };

  const updateSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSave = (employeeData) => {
    if (employeeData.id) {
      setEmployees(
        employees.map((emp) =>
          emp.id === employeeData.id ? { ...emp, ...employeeData } : emp,
        ),
      );
    } else {
      setEmployees([...employees, { ...employeeData, id: Date.now() }]);
    }
    setCurrentView("list");
    setSelectedEmployee(null);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.fullName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className={styles.employeeManagement}>
      <div className={styles.mainContent}>
        <main className={styles.contentArea}>
          {currentView === "list" && (
            <EmployeeList
              employees={filteredEmployees}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
              searchQuery={searchQuery}
              updateSearch={updateSearch}
            />
          )}
          {currentView === "edit" && (
            <EmployeeForm
              employee={selectedEmployee}
              onSave={handleSave}
              onCancel={() => setCurrentView("list")}
            />
          )}
          {currentView === "detail" && (
            <EmployeeDetails
              employee={selectedEmployee}
              onBack={() => setCurrentView("list")}
            />
          )}
        </main>
      </div>
      {showDeleteConfirm && (
        <DeleteConfirmation onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
};

export default EmployeeManagement;
