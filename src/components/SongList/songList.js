import React from "react";
import "./songList.css";
import { Play } from "phosphor-react";

const musicList = () => {

    return (
        <div  className="Lists">
            <div className="songDisplay"> <Play size={20} /> Ashiqui Aa Gayi </div>
            <div className="songDisplay"> <Play size={20} /> Bachpan Ka Pyar </div>
            <div className="songDisplay"> <Play size={20} /> Baris Ki Jaaye </div>
            <div className="songDisplay"> <Play size={20} /> Baaris </div>
            <div className="songDisplay"> <Play size={20} /> Humnava </div>
            <div className="songDisplay"> <Play size={20} /> Hamaris Saanson </div>
            <div className="songDisplay"> <Play size={20} /> Kala Chasma</div>
            <div className="songDisplay"> <Play size={20} /> Galliyan </div>
        </div>
    );
};

export default musicList;
    