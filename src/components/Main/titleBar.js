import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./titleBar.css";
import { SpeakerHigh } from 'phosphor-react';
import { SpeakerX } from 'phosphor-react';

import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Controls(props) {
  const [currentVolume, setCurrentVolume] = useState(1);
  const [playVolume, setPlayVolume] = useState(1);

  useEffect(() => {
    props.audioRef.volume = playVolume;
  }, [playVolume]);

  const volumeMuteUnmute = () => {
    if (playVolume === 0) {
       setPlayVolume(currentVolume);
      setCurrentVolume(0);
    }
    else {
      setCurrentVolume(playVolume);
      setPlayVolume(0);
    }
  };

  return (
    <div className="position-style">
    {/* <LinearProgress variant="determinate" /> */}
    <div className="c-player--controls">
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
      <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn" onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
      </div>
       
      <div className="Volume">
      <button className="volumeMuteUnmute" onClick={volumeMuteUnmute}>
        {currentVolume === 0 ? ( 
          <SpeakerX size={23} />
        ) : (
          <SpeakerHigh size={23} />
        )}
        {" "}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={playVolume}
          onChange={(e) => { setPlayVolume(e.target.value) }}
      />
    </div>
    </div>
  );
}

export default Controls;