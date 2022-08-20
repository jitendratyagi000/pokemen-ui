const ItemsPerPage = ({perPageItem, handleChange}) => {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text">
        Items Per Page
      </label>
      <select className="form-select" value={perPageItem} onChange={(event) => handleChange(event.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default ItemsPerPage;
