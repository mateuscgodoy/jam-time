import React from "react";
import "../../App.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResult({ searchResult, handleClick }) {
  const trackButton = (
    <button className="track-button" onClick={handleClick}>
      ➕
    </button>
  );

  return (
    <Tracklist
      tracks={searchResult}
      buttonElement={trackButton}
      title={"Search Results"}
    />
  );
}

export default SearchResult;
