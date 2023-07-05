import React, { useCallback } from "react";

import "./Playlist.css";

import TrackList from "../Tracklist/Tracklist";

const Playlist = (props) => {

  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList 
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className="Playlist-save">
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
