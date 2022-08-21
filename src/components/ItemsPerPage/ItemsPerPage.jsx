import React from 'react';

const ItemsPerPage = ({ perPageItem, handleChange }) => {
	return (
		<div className="input-group mb-3">
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
			<label className="input-group-text" htmlFor="itemperpage">
				Items Per Page
			</label>
            <select
					className="form-select"
					id="itemperpage"
                    data-testid="itemperpage"
					value={perPageItem}
					onChange={(event) => handleChange(event.target.value)}
				>
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="50">50</option>
				</select>
		</div>
	);
};

export default ItemsPerPage;
