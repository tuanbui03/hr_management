import React, { useState } from 'react';
import styles from './EmployeeSalaryManagement.module.css';
import Header from './Header';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import DeleteModal from './DeleteModal';

const EmployeeSalaryManagement = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [username] = useState("John Doe");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState("list");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    phone: "",
    salary: "",
    bonus: "",
  });

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      department: "Marketing",
      phone: "(555) 123-4567",
      salary: 65000,
      bonus: 5000,
    },
    {
      id: 2,
      name: "Michael Chen",
      department: "Engineering",
      phone: "(555) 234-5678",
      salary: 85000,
      bonus: 8500,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      department: "Sales",
      phone: "(555) 345-6789",
      salary: 70000,
      bonus: 7000,
    },
  ]);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const goToCreate = () => {
    setCurrentPage("create");
    setSelectedEmployee(null);
    setFormData({
      name: "",
      department: "",
      phone: "",
      salary: "",
      bonus: "",
    });
  };

  const goToList = () => {
    setCurrentPage("list");
    setSelectedEmployee(null);
    setFormData({
      name: "",
      department: "",
      phone: "",
      salary: "",
      bonus: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedEmployee) {
      const updatedEmployees = employees.map(e =>
        e.id === selectedEmployee.id ? { ...e, ...formData, salary: Number(formData.salary), bonus: Number(formData.bonus) } : e
      );
      setEmployees(updatedEmployees);
    } else {
      const newId = Math.max(...employees.map(e => e.id)) + 1;
      setEmployees([...employees, { id: newId, ...formData, salary: Number(formData.salary), bonus: Number(formData.bonus) }]);
    }
    goToList();
  };

  const deleteEmployee = () => {
    setEmployees(employees.filter(e => e.id !== employeeToDelete.id));
    setShowDeleteModal(false);
    setEmployeeToDelete(null);
  };

  const openDeleteModal = (employee) => {
    setShowDeleteModal(true);
    setEmployeeToDelete(employee);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setEmployeeToDelete(null);
  };

  const goToEdit = (employee) => {
    setCurrentPage("edit");
    setSelectedEmployee(employee);
    setFormData({ ...employee });
  };

  return (
    <div className={styles.appContainer}>
      <Header
        username={username}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSearchOpen={isSearchOpen}
        toggleSearch={toggleSearch}
      />
      <main className={styles.mainContent}>
        {currentPage === "create" || currentPage === "edit" ? (
          <EmployeeForm
            currentPage={currentPage}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            goToList={goToList}
          />
        ) : (
          <>
            <div className={styles.actionBar}>
              <button
                className={styles.createButton}
                onClick={goToCreate}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span>Create New Salary</span>
              </button>
            </div>
            <EmployeeList
              employees={employees}
              goToEdit={goToEdit}
              openDeleteModal={openDeleteModal}
            />
          </>
        )}
      </main>
      {showDeleteModal && (
        <DeleteModal
          employeeToDelete={employeeToDelete}
          closeDeleteModal={closeDeleteModal}
          deleteEmployee={deleteEmployee}
        />
      )}
    )}
    </div>
  );
};

export default EmployeeSalaryManagement;