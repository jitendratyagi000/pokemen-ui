import React from "react";

const InformationRow = ({ label, items, render }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <strong>{label}:</strong>
      <div>
        {items.map((item, index) => (
          <span key={`${index}${label}`} className="badge bg-primary rounded-pill ms-2">
            {render(item)}
          </span>
        ))}
      </div>
    </li>
  );
};

export default InformationRow;
