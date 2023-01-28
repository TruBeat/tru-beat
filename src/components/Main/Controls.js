import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Controls.css";
import Slider from "./Slider";
import ControlPanel from "./ControlPanel";
import { SpeakerHigh } from "phosphor-react";

import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Controls(props) {
  // add volume slider
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const onChange = (e) => {
    const audio = props.audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

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
      <div>
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
        </div>
      </div>
  );
}

export default Controls;