import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search apartments..."
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

export default SearchBar;
