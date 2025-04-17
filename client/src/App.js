import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import các component bạn đã generate
import LoginPage from "./components/LoginForm/LoginForm.jsx";
import ContractManagement from "./components/ContractManagement/ContractList.jsx";
import DepartmentList from "./components/DepartmentList/DepartmentList.jsx";
import EmployeeManagement from "./components/EmployeeManagement/EmployeeManagement.jsx";
import EmployeeRewards from "./components/EmployeeRewards/EmployeeRewards.jsx";
import EmployeeSalaryManagement from "./components/EmployeeSalaryManagement/EmployeeSalaryManagement.jsx";
import LeaveRequestSystem from "./components/LeaveRequestSystem/LeaveRequestSystem.jsx";
import PolicyDashboard from "./components/PolicyDashboard/PolicyDashboard.jsx";
import ProjectDashboard from "./components/ProjectDashboard/ProjectDashboard.jsx";
import ProjectManagement from "./components/ProjectManagement/ProjectManagement.jsx";
import ProjectOverview from "./components/ProjectOverview/ProjectOverview.jsx";

// (Import các component khác nếu cần)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contracts" element={<ContractManagement />} />
        <Route path="/departments" element={<DepartmentList />} />
        <Route path="/employee" element={<EmployeeManagement />} />
        <Route path="/employee/rewards" element={<EmployeeRewards />} />
        <Route path="/employee/salary" element={<EmployeeSalaryManagement />} />
        <Route path="/leave/request" element={<LeaveRequestSystem />} />
        <Route path="/policy" element={<PolicyDashboard />} />
        <Route path="/project/dashboard" element={<ProjectDashboard />} />
        <Route path="/projects" element={<ProjectManagement />} />
        <Route path="/project/overview" element={<ProjectOverview />} />
        {/* Tạo thêm routes nếu cần */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
