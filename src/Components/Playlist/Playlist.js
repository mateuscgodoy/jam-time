import React, { useState } from "react";
import "../../App.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ tracks, handleClick }) {
  const trackButton = (
    <button className="track-button" onClick={handleClick}>
      ➖
    </button>
  );
  const [playlistName, setPlaylistName] = useState("");

  const handleChange = (event) => {
    setPlaylistName(event.target.value);
  };

  return (
    <div id="user-playlist">
      <form className="form-playlist">
        <div className="search-section">
          <label htmlFor="playlist-name">Playlist Name</label>
          <input
            id="playlist-name"
            type="text"
            onChange={handleChange}
            value={playlistName}
          />
        </div>
        <button type="submit">Send</button>
      </form>
      <Tracklist
        tracks={tracks}
        title={playlistName}
        buttonElement={trackButton}
      />
    </div>
  );
}

export default Playlist;
