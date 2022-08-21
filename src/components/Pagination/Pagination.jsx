import React from "react";

const Pagiantion = ({ prev, next, handleChange }) => {
  return (
    <nav>
      <ul className="pagination pagination-md">
        <li className="page-item active" aria-current="page">
          <button
            className={`page-link ${!prev ? "disabled" : ""}`}
            type="button"
            disabled={!prev}
            onClick={() => handleChange(prev)}
          >
            Prev
          </button>
        </li>
        <li className="page-item active">
          <button
            className={`page-link ${!next ? "disabled" : ""}`}
            type="button"
            disabled={!next}
            onClick={() => handleChange(next)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagiantion;
