import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";
import "./Player.css";

function Player(props) {
  const audioEl = new Audio(props.songs[props.currentSongIndex].src);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    console.log(isPlaying);
    if (isPlaying) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  },[isPlaying]);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <h4>Playing now...</h4>
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />

      <audio
        className="c-player--audio"
        src={audioEl}
        controls
        Play
        Pause
      />

      
      <p className="next-song">
        <h6 className="NextColor1">Next up:</h6>
          <span className="NextColor2">
          {props.songs[props.nextSongIndex].title} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
}

export default Player;