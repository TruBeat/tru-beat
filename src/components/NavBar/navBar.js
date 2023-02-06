import React from "react";
import "./navBar.css";
import LoginPage from "../LoginWindow";
import Popup from 'reactjs-popup';

const NavBar = () => {
    return (
        <div className="navBar">
            <h1 className="Title">TruBeat</h1>
            <button className="navButton">Home</button>
            <button className="navButton">About</button>
            <button className="navButton">Contact</button>
            <button className="navButton">Login</button>
        </div>
    );
}

export default NavBar;
