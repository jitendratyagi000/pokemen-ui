import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination/Pagination';

describe('Pagination', () => {
	it('should disabled the buttons if props are null', () => {
		const { getByText } = render(
			<Pagination prev={null} next={null} />
		);

        expect(getByText(/Prev/i).closest('button')).toBeDisabled();
        expect(getByText(/Next/i).closest('button')).toBeDisabled();
	});

    it('should enable the buttons if props passed', () => {
		const { getByText } = render(
			<Pagination prev="https://test.com" next="https://test.com" />
		);

        expect(getByText(/Prev/i).closest('button')).not.toBeDisabled();
        expect(getByText(/Next/i).closest('button')).not.toBeDisabled();
	});

    it('should trigger on change event', () => {
        const onPageChange = jest.fn((value) => {})
		const { getByText } = render(
			<Pagination prev="https://test.com" next="https://test.com" handleChange={onPageChange} />
		);

        fireEvent.click(getByText(/Prev/i).closest('button'));

        expect(onPageChange).toHaveBeenCalledTimes(1);
	});
});
