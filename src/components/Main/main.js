import { useState, useEffect } from "react";
import Player from "./Player";
import song1 from "../music/Titliaan Warga.mp3";
import song2 from "../music/Naach Meri Rani.mp3";
import song3 from "../music/Care Ni Karda.mp3";
import song4 from "../music/BurjKhalifa.mp3";
import song5 from "../music/ParovStelarGeorgiaGibbs-TangoDelFuego.mp3";
import song6 from "../music/JasonDerulo-TakeYouDancing.mp3";
import song7 from "../music/Ashnikko-Daisy.mp3";
import song8 from "../music/PatzGrimbard-DollySong.mp3";
import img1 from "../images/titaliya.jpg";
import img2 from "../images/nach-meri-rani.jpg";
import img3 from "../images/care-ni-karda.jpg";
import img4 from "../images/burjkalifa.jpg";
import img5 from "../images/ParovStelarGeorgiaGibbs-TangoDelFuego.jpg";
import img6 from "../images/JasonDerulo-TakeYouDancing.jpg";
import img7 from "../images/Ashnikko-Daisy.jpg";
import img8 from "../images/PatzGrimbard-DollySong.jpg";

function MainScreen() {
  const [songs] = useState([
    {
      title: "Titaliya",
      artist: "Hardy Sandhu",
      img_src: img1,
      src: song1,
    },
    {
      title: "Nach Meri Rani",
      artist: "Yo Yo Honey Singh",
      img_src: img2,
      src: song2,
    },
    {
      title: "Care Ni Karda",
      artist: "Yo Yo Honey Singh",
      img_src: img3,
      src: song3,
    },
    {
      title: "Burj Khalifa",
      artist: "Shashi",
      img_src: img4,
      src: song4,
    },
    {
      title: "Tango Del Fuego",
      artist: "Parov Stelar",
      img_src: img5,
      src: song5,
    },
    {
      title: "Take You Dancing",
      artist: "Jason Derulo",
      img_src: img6,
      src: song6,
    },
    {
      title: "Daisy",
      artist: "Ashnikko",
      img_src: img7,
      src: song7,
    },
    {
      title: "Dolly Song",
      artist: "Partz Grimbad",
      img_src: img8,
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
