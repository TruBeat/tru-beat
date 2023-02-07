import React from "react";
import "./home.css";
import { House, Headphones, Users, Activity, Queue, Disc, User, Playlist } from "phosphor-react";

const home = () => {
    return (
        <div className="Home">
            <div className="home-content">
                <button className="HButton"> <House size={23} /> Home </button>
                <button className="HButton"> <Headphones size={23} /> Music </button>
                <button className="HButton"> <Users size={23} /> Artist </button>
                <button className="HButton"> <Activity size={23} /> About </button>
                <button className="HButton"><Queue size={23} />My Playlists</button>
                <button className="HButton"> <Disc size={23} />My Albums</button>
                <button className="HButton"><User size={23} />My Artists</button>
                <button className="HButton"><Playlist size={23} />Recently Played</button>
            </div>
        </div>
    );
}

export default home;
