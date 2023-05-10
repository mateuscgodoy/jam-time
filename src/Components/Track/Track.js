import React from "react";
import "../../App.css";

function Track({ trackInfo }) {
  return (
    <div>
      <h4 className="song-name">{trackInfo.song}</h4>
      <p className="album-year">
        {trackInfo.album} | {trackInfo.year}
      </p>
      <p>
        <em>{trackInfo.artists}</em>
      </p>
    </div>
  );
}

export default Track;
