import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";
import "./Player.css";
import { SpeakerHigh } from 'phosphor-react';
import { SpeakerX } from 'phosphor-react';

function Player(props) {
  const [audioEl] = useState(new Audio(props.songs[props.currentSongIndex].src));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(1);
  const [playVolume, setPlayVolume] = useState(1);
  
  useEffect(() => {
    audioEl.volume = playVolume;
  }, [playVolume]);

  useEffect(() => {
    if (isPlaying) {
      audioEl.play();  
    } else {
      audioEl.pause();
    }
  }, [isPlaying, audioEl]);
  
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        audioEl.src = props.songs[temp].src;
        if(isPlaying)
          audioEl.play();
        else
          audioEl.pause();
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        audioEl.src = props.songs[temp].src;
        if(isPlaying)
          audioEl.play();
        else
          audioEl.pause();
        return temp;
    });
    }
  };
  
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
    <div>
      <div className="Search">
      <input className="search" type="text" placeholder="  Search for song, artist etc..." >
        </input>
      <button className="searchButton">Search</button>
    </div>
  <div className="c-player">

    {isPlaying ? <h4>Playing now...</h4> : <h4>Paused</h4>}
    <Details song={props.songs[props.currentSongIndex]} />
    <Controls
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      SkipSong={SkipSong}
      audioRef={audioEl}
    />
    <div className="Volume">
      <button className="volumeMuteUnmute" onClick={volumeMuteUnmute}>
        {currentVolume === 0 ? ( 
          <SpeakerX size={40} />
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
    <div className="next-song">
      <h6 className="NextColor1">Next up:</h6>
      <span className="NextColor2">
        {props.songs[props.nextSongIndex].title} by{" "}
        {props.songs[props.nextSongIndex].artist}
      </span>
    </div>
      </div>
      </div>
  );
}

export default Player;