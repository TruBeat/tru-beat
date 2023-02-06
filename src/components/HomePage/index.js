import React from "react";
import "./index.css";

const HomePage = () => {
    return (
        <div className="Home-Page">
            <div className="navBar">
                <h2 className="Title">TruBeat</h2>
                <button className="navButton">Home</button>
                <button className="navButton">About</button>
                <button className="navButton">Contact</button>
                <button className="navButton">Login</button>
            </div>
            <div className="container1"> </div>
            <div className="container2"> </div>
        </div>
    );
};

export default HomePage;
