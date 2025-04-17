import React, { useState } from "react";
import styles from "./ContractList.module.css";
import ContractRow from "./ContractRow";
import DeleteModal from "./DeleteModal";
import CreateContractForm from "./CreateContractForm";

function ContractList() {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      fullname: "John Smith",
      effectiveDate: "2024-01-15",
    },
    {
      id: 2,
      fullname: "Sarah Johnson",
      effectiveDate: "2024-02-01",
    },
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [contractToDelete, setContractToDelete] = useState(null);

  const deleteContract = (id) => {
    setContracts(contracts.filter((contract) => contract.id !== id));
    setShowDeleteModal(false);
    setContractToDelete(null);
  };

  const openDeleteModal = (id) => {
    setShowDeleteModal(true);
    setContractToDelete(id);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setContractToDelete(null);
  };

  return (
    <div className={styles.contractManagement}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contract List</h1>
        <a href="/contracts/new" className={styles.createButton}>
          Create New Contract
        </a>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.contractTable}>
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Effective Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => (
              <ContractRow
                key={contract.id}
                contract={contract}
                onDelete={openDeleteModal}
              />
            ))}
          </tbody>
        </table>
      </div>
      {window.location.pathname === "/contracts/new" && <CreateContractForm />}
      {showDeleteModal && (
        <DeleteModal
          onConfirm={() => deleteContract(contractToDelete)}
          onCancel={closeDeleteModal}
        />
      )}
    </div>
  );
}

export default ContractList;
