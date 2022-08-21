import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../components/Search/Search';

describe('Search', () => {
    it('Should call changeHandler on change of input', () => {
      const onSearch = jest.fn((value) => {})
      
      const { queryByPlaceholderText } = render(<Search changeHandler={onSearch}/>)
  
      const searchInput = queryByPlaceholderText('Search Pokemon by name and activities...')
  
      fireEvent.change(searchInput, { target: { value: 'test' } })
  
      expect(searchInput.value).toBe('test');
      expect(onSearch).toHaveBeenCalledTimes(1);
    })
  })