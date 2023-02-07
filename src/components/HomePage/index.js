import React from "react";
import "./index.css";
import Home from "../Home/home"
import MusicCarousel from "../MusicCarousel/MiniWindow";
import Main from "../Main/main";
import NavBar from "../NavBar/navBar";

const HomePage = () => {
    return (
        <div className="Home-Page-1">
            <div className="container-1">
                <Home />
            </div>
            <div className="Home-Page-2">
                <div className="container-2">
                    <MusicCarousel/>
                </div>
                <div className="Home-Page-3">
                    <div className="container-3">
                        <Main/>
                    </div>
                    <div className="container-4"> 4</div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
