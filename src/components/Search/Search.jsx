const Search = () => {
  return (
    <div className="row mb-5">
      <div className="col-md-10 col-sm-12">
        <input
          className="form-control"
          placeholder="Search Pokemon by name and activities..."
        />
      </div>
      <div className="col-md-2 col-sm-12 mt-sm-2 mt-md-0">
        <button className="btn btn-primary w-100">Search</button>
      </div>
    </div>
  );
};

export default Search;
