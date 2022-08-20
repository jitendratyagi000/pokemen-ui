const SortBy = ({ sortBy, handleClick }) => {
  return (
    <div>
      <label>Sory By:</label>
      <div className="btn-group ms-2" role="group" aria-label="Basic example">
        <button
          onClick={() => handleClick("name")}
          type="button"
          className={`btn ${
            sortBy.key === "name" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Name{" "}
          {sortBy.key === "name" && sortBy.direction === "asc" && (
            <i className="bi bi-sort-alpha-down"></i>
          )}
          {sortBy.key === "name" && sortBy.direction === "desc" && (
            <i className="bi bi-sort-alpha-up"></i>
          )}
        </button>
        <button
          onClick={() => handleClick("height")}
          type="button"
          className={`btn ${
            sortBy.key === "height" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Height{" "}
          {sortBy.key === "height" && sortBy.direction === "asc" && (
            <i className="bi bi-sort-alpha-down"></i>
          )}
          {sortBy.key === "height" && sortBy.direction === "desc" && (
            <i className="bi bi-sort-alpha-up"></i>
          )}
        </button>
        <button
          onClick={() => handleClick("weight")}
          type="button"
          className={`btn ${
            sortBy.key === "weight" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Weight{" "}
          {sortBy.key === "weight" && sortBy.direction === "asc" && (
            <i className="bi bi-sort-alpha-down"></i>
          )}
          {sortBy.key === "weight" && sortBy.direction === "desc" && (
            <i className="bi bi-sort-alpha-up"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default SortBy;
