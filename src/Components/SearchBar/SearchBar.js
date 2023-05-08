import React, { useState } from "react";
import "../../App.css";
import { appKeys } from "../../keys";

function SearchBar({ setSearchResult }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function formatInputString(inputString) {
    let formattedString = inputString.replace(/\s+/g, "+");
    return formattedString;
  }

  function prepareData(tracks) {
    let output = [];

    tracks.forEach((track) => {
      output.push({
        song: track.name,
        artists: getArtists(track.artists),
        album: track.album.name,
        year: new Date(track.album.release_date).getFullYear(),
      });
    });
    return output;
  }

  function getArtists(artists) {
    if (artists.length === 1) {
      return artists[0].name;
    }

    let artistsString = "";
    for (let i = 0; i < artists.length; i++) {
      artistsString += artists[i].name;

      if (i < artists.length - 1) {
        const complement = i === artists.length - 2 ? " and " : ", ";
        artistsString += complement;
      }
    }
    return artistsString;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const userInput = formatInputString(searchInput);

    if (!userInput) {
      setSearchResult(null);
      return;
    }
    const params = new URLSearchParams();
    params.append("q", userInput);
    params.append("type", "track");
    params.append("market", "US");
    params.append("limit", "15");
    params.append("offset", "0");
    const response = await fetch(
      `https://api.spotify.com/v1/search?${params.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(appKeys.tokenId)}`,
        },
      }
    );
    const data = await response.json();
    setSearchResult(prepareData(data.tracks.items));
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search a track..."
        value={searchInput}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
