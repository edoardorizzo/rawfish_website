import React from 'react';
import { useDispatch } from 'react-redux';
import { filterUsers } from '../js/userSlice';

function SearchBarComponent() {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const query = event.target.value;
    dispatch(filterUsers({ query }));
  };

  return (
    <div className="search_bar">
      <p>Find the people you want by searching for their first name, last name, city, or state.</p>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
    </div>
  );
}

export default SearchBarComponent;
