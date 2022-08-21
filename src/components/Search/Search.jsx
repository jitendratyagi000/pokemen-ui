import React from "react";

const Search = ({value, changeHandler}) => {
  return (
    <div className="row mb-5">
      <div className="col">
        <input
          value={value}
          onChange={(event) => changeHandler(event.target.value)}
          className="form-control"
          placeholder="Search Pokemon by name and activities..."
        />
      </div>
    </div>
  );
};

export default Search;
