import React, { useState } from "react";
import styles from "./LeaveRequestSystem.module.css";
import Header from "./Header";
import LeaveRequestTable from "./LeaveRequestTable";
import CreateLeaveRequestModal from "./CreateLeaveRequestModal";
import ConfirmationModal from "./ConfirmationModal";

const LeaveRequestSystem = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      department: "Marketing",
      startDate: "2024-02-15",
      endDate: "2024-02-20",
      status: "Approved",
    },
    {
      id: 2,
      name: "Michael Chen",
      department: "Engineering",
      startDate: "2024-02-18",
      endDate: "2024-02-25",
      status: "Pending",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      department: "Human Resources",
      startDate: "2024-03-01",
      endDate: "2024-03-05",
      status: "Approved",
    },
    {
      id: 4,
      name: "James Wilson",
      department: "Sales",
      startDate: "2024-03-10",
      endDate: "2024-03-15",
      status: "Rejected",
    },
  ]);

  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  const handleApproveClick = (requestId) => {
    setSelectedRequestId(requestId);
    setShowApprovalModal(true);
  };

  const handleApprovalConfirm = (approved) => {
    setLeaveRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === selectedRequestId
          ? { ...request, status: approved ? "Approved" : "Rejected" }
          : request,
      ),
    );
    setShowApprovalModal(false);
    setSelectedRequestId(null);
  };

  const handleCreateSubmit = (newRequest) => {
    setLeaveRequests((prevRequests) => [
      ...prevRequests,
      { ...newRequest, id: prevRequests.length + 1, status: "Pending" },
    ]);
    setShowCreateForm(false);
  };

  return (
    <div className={styles.leaveRequestSystem}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Leave Requests</h1>
          <button
            className={styles.newRequestButton}
            onClick={handleCreateClick}
            aria-label="Create new leave request"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>New Leave Request</span>
          </button>
        </div>
        <LeaveRequestTable
          leaveRequests={leaveRequests}
          onApproveClick={handleApproveClick}
        />
        {showCreateForm && (
          <CreateLeaveRequestModal
            onSubmit={handleCreateSubmit}
            onClose={() => setShowCreateForm(false)}
          />
        )}
        {showApprovalModal && (
          <ConfirmationModal
            onConfirm={handleApprovalConfirm}
            onClose={() => setShowApprovalModal(false)}
          />
        )}
      </main>
    </div>
  );
};

export default LeaveRequestSystem;
