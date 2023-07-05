import React, { useCallback } from "react";

import "./Track.css";

const Track = (props) => {

  const addTrack = useCallback(             // See below to add without useCallback (simplified)
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(          // See below to remove without useCallback (simplified)
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    );
  };
  
// See below for song name with URI link
  return (
    <div className="Track">
      <div className="Track-information">
      <h3>{props.track.name}</h3>             
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );

};

export default Track;



/*

Add without useCallback
const addTrack = () => {
    props.onAdd(props.track);
};

Remove without useCallback
const removeTrack = () => {
  props.onRemove(props.track);
}

*/