import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="mb2">
      <input
        className="search-box br2" // padding-horizontal, padding-vertical
        type="search"
        placeholder="Search Monster..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
