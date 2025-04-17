import React, { useState } from "react";
import styles from "./DepartmentList.module.css";
import DepartmentCard from "./DepartmentCard";

const DepartmentList = ({ departments }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [viewingDepartment, setViewingDepartment] = useState(false);

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setViewingDepartment(true);
  };

  return (
    <div className={styles.departmentGrid} role="list">
      {departments?.map((dept) => (
        <DepartmentCard
          key={dept.id}
          department={dept}
          onSelect={handleDepartmentSelect}
        />
      ))}
    </div>
  );
};

export default DepartmentList;
