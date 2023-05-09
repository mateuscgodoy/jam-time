import React from "react";
import "../../App.css";
import Track from "../Track/Track";

function Tracklist({ tracks, buttonElement, title }) {
  let i = 0;
  let trackListItems = [];
  if (tracks) {
    trackListItems = tracks.map((track) => {
      i++;
      return (
        <li
          key={`${i}${track.song}`}
          className={i % 2 === 0 ? "default-track list-item" : "default-track"}
        >
          <Track trackInfo={track} />
          {buttonElement}
        </li>
      );
    });
  }

  return (
    <>
      <h2>{title}</h2>
      <ul className="tracklist">{trackListItems}</ul>
    </>
  );
}

export default Tracklist;
