import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";
import "./Player.css";

function Player(props) {
  const audioEl = useRef(new Audio(props.songs[props.currentSongIndex].src));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();  
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

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
    {isPlaying ? <h4>Playing now...</h4> : <h4>Paused</h4>}

    <Details song={props.songs[props.currentSongIndex]} />
    <Controls
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      SkipSong={SkipSong}
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