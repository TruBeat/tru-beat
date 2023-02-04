import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Controls.css";
import volume from "./volume";

import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Controls(props) {

  return (
    <div>
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
      {/* <div>
        <SpeakerHigh size={40}  className="Speaker"/>
        <div className="slider-control">
        <Slider percentage={percentage} onChange={onChange} />
        <ControlPanel
          duration={duration}
          currentTime={currentTime}
          audioRef={props.audioRef}
          gettimeupdate={getCurrDuration}
          />
          </div>
        </div> */}
      </div>
  );
}

export default Controls;