import { useState, useEffect } from "react";
import Player from "./Player";
import './main.css';
import song1 from "../music/Titliaan Warga.mp3";
import song2 from "../music/Naach Meri Rani.mp3";
import song3 from "../music/Care Ni Karda.mp3";
import song4 from "../music/BurjKhalifa.mp3";
import song5 from "../music/ParovStelarGeorgiaGibbs-TangoDelFuego.mp3";
import song6 from "../music/JasonDerulo-TakeYouDancing.mp3";
import song7 from "../music/Ashnikko-Daisy.mp3";
import song8 from "../music/PatzGrimbard-DollySong.mp3";

function MainScreen() {
  const [songs] = useState([
    {
      title: "Titaliya",
      artist: "Hardy Sandhu",
      img_src: "../images/titaliya.jpg",
      src: song1,
    },
    {
      title: "Nach Meri Rani",
      artist: "Yo Yo Honey Singh",
      img_src: "../images/nach-meri-rani.jpg",
      src: song2,
    },
    {
      title: "Care Ni Karda",
      artist: "Yo Yo Honey Singh",
      img_src: "../images/care-ni-karda.jpg",
      src: song3,
    },
    {
      title: "Burj Khalifa",
      artist: "Shashi",
      img_src: "../images/burjkalifa.jpg",
      src: song4,
    },
    {
      title: "Tango Del Fuego",
      artist: "Parov Stelar",
      img_src: "../images/ParovStelarGeorgiaGibbs-TangoDelFuego.jpg",
      src: song5,
    },
    {
      title: "Take You Dancing",
      artist: "Jason Derulo",
      img_src: "../images/JasonDerulo-TakeYouDancing.jpg",
      src: song6,
    },
    {
      title: "Daisy",
      artist: "Ashnikko",
      img_src: "../images/Ashnikko-Daisy.jpg",
      src: song7,
    },
    {
      title: "Dolly Song",
      artist: "Partz Grimbad",
      img_src: "../images/PatzGrimbard-DollySong.jpg",
      src: song8,
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
  );
}

export default MainScreen;
