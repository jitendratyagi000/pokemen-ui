import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemsPerPage from '../components/ItemsPerPage/ItemsPerPage';

describe('Items Per Page', () => {
	it('Value prop should select the option 20', async () => {
		const { getByTestId } = render(
			<ItemsPerPage perPageItem={20} />
		);

		const component = getByTestId('itemperpage');

		expect(component[1].selected).toBeTruthy();
	});

	it('Should trigger handleChange on change', async () => {
		const changeHandler = jest.fn();
		const { getByTestId } = render(
			<ItemsPerPage perPageItem={20} handleChange={changeHandler} />
		);
		const searchInput = getByTestId('itemperpage');
		fireEvent.change(searchInput, { target: { value: 20 } });

		expect(changeHandler).toHaveBeenCalledTimes(1);
	});
});
