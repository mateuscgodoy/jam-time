import React, { useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import SearchResult from "./Components/SearchResults/SearchResults";
import Playlist from "./Components/Playlist/Playlist";
import SearchBar from "./Components/SearchBar/SearchBar";

const tracks = [
  {
    song: "Rebollation",
    band: "Red Hot Chilly Peppers",
    year: "1988",
    album: "The Number of the Beast",
  },
  {
    song: "Banho de Lua",
    band: "Angelica",
    year: "1212",
    album: "Albom",
  },
  {
    song: "Ciranda-Cirandinha",
    band: "Palhaço Tragédia",
    year: "20223",
    album: "Album Best Golden Increduble Hits",
  },
];

function App() {
  const [selectedTracks, setSelectedTracks] = useState([]);

  function selectTrack(event) {
    const selectedSong =
      event.target.parentElement.querySelector(".song-name").innerHTML;

    if (selectedTracks.some((track) => track.song === selectedSong)) {
      alert("This song is already on your playlist.");
      return;
    }

    const trackIndex = tracks.findIndex((track) => track.song === selectedSong);
    const newSelection = [...selectedTracks, tracks[trackIndex]];
    setSelectedTracks(newSelection);
  }

  function removeTrack(event) {
    const selectedSong =
      event.target.parentElement.querySelector(".song-name").innerHTML;
    const updateSelection = selectedTracks.filter(
      (track) => track.song !== selectedSong
    );
    setSelectedTracks(updateSelection);
  }

  return (
    <Background>
      <section id="main-body">
        <h1>
          Jam
          <br />
          Time!
        </h1>
        <SearchBar />
        <section className="lists-section">
          <div>
            <SearchResult searchResult={tracks} handleClick={selectTrack} />
          </div>
          <div>
            <Playlist tracks={selectedTracks} handleClick={removeTrack} />
          </div>
        </section>
      </section>
    </Background>
  );
}

export default App;
