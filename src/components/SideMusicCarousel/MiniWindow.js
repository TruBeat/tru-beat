import React, { Component } from "react";
import "./MiniWindow.css";
import song1 from "../audio/1.mp3";
import song2 from "../audio/2.mp3";
import song3 from "../audio/3.mp3";
import song4 from "../audio/4.mp3";
import song5 from "../audio/5.mp3";
import song6 from "../audio/6.mp3";
import song7 from "../audio/7.mp3";
import song8 from "../audio/8.mp3";
//import { Play, Pause,  SpeakerHigh, BellSimpleRinging} from "phosphor-react";
import ReactAudioPlayer from 'react-audio-player';

function App() {
    return (
      <div className="Container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">     
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
          </ol>
          
          <div className="Crousel">
          <a className="left" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
            
          <a className="right" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
          
          <div class="carousel-inner">
          <div class="carousel-item active" >
            <div className="Container-inside">
              <h1 className="Title">Hamari Saanson</h1>
              <h6>Artist: Arijit Singh</h6>
              <h6>Album: Baar Baar Dekho</h6>
              <h6>Released: 2016</h6> 
              <ReactAudioPlayer src={song1} Play controls unmuted />
            </div>
          </div>
          <div class="carousel-item">
            <div className="Container-inside">
            <h1 className="Title">Kala Chasma</h1>    
            <h6>Artist: Arijit Singh</h6>
            <h6>Album: Baar Baar Dekho</h6>
            <h6>Released: 2016</h6> 
          <div>
          <ReactAudioPlayer src={song2} Play controls unmuted />
          </div>
        </div>
          </div>
          <div class="carousel-item">
            <div className="Container-inside">
              <h1 className="Title">Mann Bharya</h1>
              <h6>Artist: Arijit Singh</h6>
              <h6>Album: Baar Baar Dekho</h6>
              <h6>Released: 2016</h6> 
              <div>
              <ReactAudioPlayer src={song3} Play controls unmuted />
              </div>
            </div>
          </div>
        <div class="carousel-item">
          <div className="Container-inside">
            <h1 className="Title">Ashiqui Aa Gayi</h1>
            <h6>Artist: Arijit Singh</h6>
            <h6>Album: Baar Baar Dekho</h6> 
            <h6>Released: 2016</h6>
            <div>
            <ReactAudioPlayer src={song4} Play controls unmuted />
            </div>
          </div>
            </div>
        <div class="carousel-item">
          <div className="Container-inside">
            <h1 className="Title">Baaris</h1>
            <h6>Artist: Arijit Singh</h6>
            <h6>Album: Baar Baar Dekho</h6> 
            <h6>Released: 2016</h6>
            <div>
            <ReactAudioPlayer src={song5} Play controls unmuted />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="Container-inside">
            <h1 className="Title">Baris Ki Jaaye</h1>
            <h6>Artist: Arijit Singh</h6>
            <h6>Album: Baar Baar Dekho</h6> 
            <h6>Released: 2016</h6>
            <div>
            <ReactAudioPlayer src={song6} Play controls unmuted />
            </div>
          </div>
            </div>
        <div class="carousel-item">
          <div className="Container-inside">
            <h1 className="Title">Bachpan Ka Pyar</h1>
            <h6>Artist: Arijit Singh</h6>
            <h6>Album: Baar Baar Dekho</h6> 
            <h6>Released: 2016</h6>
            <div>
            <ReactAudioPlayer src={song7} Play controls unmuted />
            </div>
          </div>
            </div>
        <div class="carousel-item">
          <div className="Container-inside">
            <h1 className="Title">Galliyan</h1>
            <h6>Artist: Arijit Singh</h6>
            <h6>Album: Baar Baar Dekho</h6> 
            <h6>Released: 2016</h6>
            <div>
            <ReactAudioPlayer src={song8} Play controls unmuted />
            </div>
          </div>
          </div>
          </div>      

      </div>
      </div>
    );}

export default App;