import React, { useState, useCallback } from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

const App = () => {
  
  const mockData = [
    {
    id: 1,
    name: "Wild World",
    artist: "Cat Stevens",
    album: "Tea For The Tillerman",
    uri: "spotify:track:7mjSHL2Eb0kAwiKbvNNyD9"
    },
    {
    id: 2,
    name: "Piano Man",
    artist: "Billy Joel",
    album: "Piano Man"
    },
    {
      id: 3,
      name: "Wonderwall",
      artist: "Oasis",
      album: "What's The Story"
      },
      {
      id: 4,
      name: "Same Size Feet",
      artist: "Sterophonics",
      album: "Word Gets Around"
      },
  ];

  

  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    mockData.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback((track) => {                   // See below to add without useCallback (simplified)
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return
        setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {                // See below to remove without useCallback (simplified)
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);
  
  
  

  return (
    <div className="anchor">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <h3><a href="spotify:track:7mjSHL2Eb0kAwiKbvNNyD9">Test URI Link</a></h3>      
      <div className="App">
        <SearchBar 
          onSearch={search} 
        />
      <div className="App-playlist">
        <SearchResults 
          searchResults={mockData}
          onAdd={addTrack}          
        />
        <Playlist
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
        />
      </div>
      </div>
    </div>
  );
};

export default App;




/*

Add without useCallback
  const addTrack = (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return
        setPlaylistTracks((prevTracks) => [...prevTracks, track]);
      };


Remove without useCallback
  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  };

*/