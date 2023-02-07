import React from "react";
import "./navBar.css";
import Swal from 'sweetalert2';

const NavBar = (props) => {
    const handleLogout = () => {
        Swal.fire({
        icon: 'question',
        title: 'Logging Out',
        text: 'Are you sure you want to log out?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        }).then(result => {
        if (result.value) {
            Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            },
            willClose: () => {
                localStorage.setItem('is_authenticated', false);
                props.setAuthenticated(false);
            },
            });
        }
        });
    };
    
    return (
        <div className="navBar">
            <h1 className="Title">TruBeat</h1>
            <button className="navButton">Home</button>
            <button className="navButton">About</button>
            <button className="navButton">Contact</button>
            {
                (props.authenticated) ?
                <button className="navButton" onClick={handleLogout}>Logout</button> :
                <button className="navButton">Login</button>
            }
        </div>
    );
}

export default NavBar;
