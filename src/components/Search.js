import { React, useEffect, useState } from "react";

function Search({ searchTerm,setSearchTerm }) {

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
