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
        <div id="form-name-div" className="input-flex">
          <label htmlFor="playlist-name">Playlist Name</label>
          <input
            className="form-inputs"
            id="playlist-name"
            type="text"
            onChange={handleChange}
            value={playlistName}
            required
          />
        </div>
        <button
          className="form-inputs"
          id="continue-button"
          onClick={handleClickContinue}
        >
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

        <div className="input-flex">
          <label htmlFor="playlist-description">Description</label>
          <textarea
            id="description"
            className="form-inputs"
            name="description"
            rows="5"
            cols="40"
          ></textarea>
        </div>

        <div className="horiz-form-div">
          <input type="checkbox" id="playlist-collaborative" />
          <label htmlFor="playlist-collaborative">Collaborative</label>
        </div>
        <div className="horiz-form-div">
          <label>
            <input type="radio" name="privacy" value="public" />
            Public
          </label>
          <label>
            <input type="radio" name="privacy" value="private" />
            Private
          </label>
        </div>
        <button className="form-inputs" type="submit">
          Send to Spotify
        </button>
      </section>
    </form>
  );
}

export default Playlist;
