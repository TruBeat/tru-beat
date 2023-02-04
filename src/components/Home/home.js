import React from "react";
import "./home.css";
import { House, Headphones, Users, Activity, Queue, Disc, User, Playlist } from "phosphor-react";

const home = () => {
    return (
        <div className="Home">
            <div className="home-content1">
                <button className="Button"> <House size={23} /> Home </button>
                <button className="Button"> <Headphones size={23} /> Music </button>
                <button className="Button"> <Users size={23} /> Artist </button>
                <button className="Button"> <Activity size={23} /> About </button>
            </div>

            <div className="home-content2">
                <h1 className="MusicStyle">My Music</h1>
                <button className="Button"><Queue size={23} />My Playlists</button>
                <button className="Button"> <Disc size={23} />My Albums</button>
                <button className="Button"><User size={23} />My Artists</button>
                <button className="Button"><Playlist size={23} />Recently Played</button>
            </div>
        </div>
    );
}

export default home;
