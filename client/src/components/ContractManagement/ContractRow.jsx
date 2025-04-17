import React from "react";
import styles from "./ContractList.module.css";

function ContractRow({ contract, onDelete }) {
  return (
    <tr className={styles.contractRow}>
      <td>{contract.fullname}</td>
      <td>{contract.effectiveDate}</td>
      <td>
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(contract.id)}
          aria-label={`Delete contract for ${contract.fullname}`}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContractRow;
