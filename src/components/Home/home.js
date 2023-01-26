import React from "react";
import "./home.css";

const home = () => {
    return (
        <div className="Home">
            <h1 className="app-name" > TruBeat </h1>
              <p class="w3-xxlarge w3-serif">
            <h8 className="app-caption"> <span >&#10077;</span> Beat for everyone... <span>&#10078;</span></h8> </p>
            <p></p>
            <div className="home-content1">
                <button className="Button"> Home </button>
                <button className="Button"> Music </button>
                <button className="Button"> About </button>
                <button className="Button"> Artist </button>
            </div>

            <div className="home-content2">
                <h1 className="MusicStyle">My Music</h1>
                <button className="Button">My Playlists</button>
                <button className="Button"> My Albums</button>
                <button className="Button">My Artists</button>
                <button className="Button">Recently Played</button>
            </div>
        </div>
    );
}

export default home;
