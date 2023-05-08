import React, { useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import SearchResult from "./Components/SearchResults/SearchResults";
import Playlist from "./Components/Playlist/Playlist";
import SearchBar from "./Components/SearchBar/SearchBar";
import Authorization from "./Components/Auth/Authorization";

function App() {
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  function selectTrack(event) {
    const selectedSong =
      event.target.parentElement.querySelector(".song-name").innerHTML;

    if (selectedTracks.some((track) => track.song === selectedSong)) {
      alert("This song is already on your playlist.");
      return;
    }

    const trackIndex = searchResult.findIndex(
      (track) => track.song === selectedSong
    );
    const newSelection = [...selectedTracks, searchResult[trackIndex]];
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
      <Authorization />
      <section id="main-body">
        <h1>
          Jam
          <br />
          Time!
        </h1>
        <SearchBar setSearchResult={setSearchResult} />
        <section className="lists-section">
          <div>
            <SearchResult
              searchResult={searchResult}
              handleClick={selectTrack}
            />
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
