import React, { useState, useEffect } from "react";
import Details from "./Details";
import "./Player.css";
import Controls from "./titleBar";

function Player(props) {
  const [audioEl] = useState(new Audio(props.songs[props.currentSongIndex].src));
  const [isPlaying, setIsPlaying] = useState(false);

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
  
  return (
  <div className="c-player">
    {isPlaying ? <h4>Playing now...</h4> : <h4>Paused</h4>}
    <Details song={props.songs[props.currentSongIndex]} />
    <Controls  
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      SkipSong={SkipSong}
      audioRef={audioEl}
    />

    <div className="next-song">
      <h6 className="NextColor1">Next up:</h6>
      <span className="NextColor2">
        {props.songs[props.nextSongIndex].title} by{" "}
        {props.songs[props.nextSongIndex].artist}
      </span>
    </div>
      </div>
  );
}

export default Player;