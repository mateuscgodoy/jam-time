import React, { useState } from "react";
import "../../App.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ tracks, handleClick }) {
  const [playlistName, setPlaylistName] = useState("");
  const trackButton = (
    <button className="track-button" onClick={handleClick}>
      ➖
    </button>
  );

  const handleChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleClickContinue = (event) => {
    event.preventDefault();
    const shouldDeploy = event.target.textContent === "Continue";
    const deploySection =
      event.target.parentElement.parentElement.querySelector(
        "#deploy-playlist"
      );
    deploySection.style.display = shouldDeploy ? "flex" : "none";
    const buildSection =
      event.target.parentElement.parentElement.querySelector("#build-playlist");
    buildSection.style.display = !shouldDeploy ? "block" : "none";
    // console.log(event.target.textContent);
    event.target.textContent = shouldDeploy ? "Back" : "Continue";
  };

  return (
    <form id="submit-form">
      <section id="common-part">
        <div className="search-section">
          <label htmlFor="playlist-name">Playlist Name</label>
          <input
            id="playlist-name"
            type="text"
            onChange={handleChange}
            value={playlistName}
          />
        </div>
        <button id="continue-button" onClick={handleClickContinue}>
          Continue
        </button>
      </section>
      <section id="build-playlist">
        <Tracklist
          tracks={tracks}
          title={playlistName}
          buttonElement={trackButton}
        />
      </section>
      <section id="deploy-playlist">
        <h2>{playlistName}</h2>

        <label htmlFor="playlist-description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          cols="40"
        ></textarea>

        <label htmlFor="playlist-collaborative">Collaborative</label>
        <input type="checkbox" id="playlist-collaborative" />
        <label>
          <input type="radio" name="privacy" value="public" />
          Public
        </label>
        <label>
          <input type="radio" name="privacy" value="private" />
          Private
        </label>
        <button type="submit">Send to Spotify</button>
      </section>
      {/* <form className="form-playlist">
        <div className="search-section">
          <label htmlFor="playlist-name">Playlist Name</label>
          <input
            id="playlist-name"
            type="text"
            onChange={handleChange}
            value={playlistName}
          />
        </div>
        <button onClick={handleClickContinue}>Continue</button>
        <div id="continue-form" className="continue-form after-continue">
          <p>{playlistName}</p>
          <p>Blah Blah Blah</p>
          <p>Blah Blah Blah</p>
          <p>Blah Blah Blah</p>
          <button type="submit">Send Playlist to Spotify</button>
        </div>
      </form>
      <div id="playlist">
        <Tracklist
          tracks={tracks}
          title={playlistName}
          buttonElement={trackButton}
        />
      </div> */}
    </form>
  );
}

export default Playlist;
