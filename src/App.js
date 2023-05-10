import React, { useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import SearchResult from "./Components/SearchResults/SearchResults";
import Playlist from "./Components/Playlist/Playlist";
import SearchBar from "./Components/SearchBar/SearchBar";
import Login from "./Components/Login/Login";

function App() {
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  function selectTrack(event) {
    const selectedSong =
      event.target.parentElement.querySelector(".song-name").innerHTML;
    const selectedAlbum = event.target.parentElement
      .querySelector(".album-year")
      .innerHTML.split(" | ")[0];

    if (
      selectedTracks.some(
        (track) => track.song === selectedSong && track.album === selectedAlbum
      )
    ) {
      alert("This song is already on your playlist.");
      return;
    }

    const trackIndex = searchResult.findIndex(
      (track) => track.song === selectedSong && track.album === selectedAlbum
    );
    // const newSelection = [...selectedTracks, searchResult[trackIndex]];
    setSelectedTracks((prevSelection) => [
      ...prevSelection,
      searchResult[trackIndex],
    ]);
  }

  function removeTrack(event) {
    const selectedSong =
      event.target.parentElement.querySelector(".song-name").innerHTML;
    const selectedAlbum = event.target.parentElement
      .querySelector(".album-year")
      .innerHTML.split(" | ")[0];

    const updateSelection = selectedTracks.filter(
      (track) => track.album !== selectedAlbum || track.song !== selectedSong
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
        <Login setUserInfo={setUserInfo} />
        <SearchBar setSearchResult={setSearchResult} />
        <section className="lists-section">
          <div id="search-results">
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
