import React from "react";
import "../../App.css";

function SearchBar() {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
