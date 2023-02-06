import React from "react";
import './index.css'

const LoginWindow = (props) => {

    function loginHandler(){
        props.setAuthenticated(true);
    }

    return (
        <div className="LoginPage">
        <div className="Logo"/>
        <form className="User-Login">
            <h2 className="Login-window-message">Welcome to TruBeat</h2>
            <h3 className="login-window__form"> User Login</h3>
            <input className="login-window__form" placeholder="UserId" type="email" name="email" />
            <input className="login-window__form" placeholder="Password" type="password" name="password" id="email" />
            <button className="login-window__form sign_in" onClick={loginHandler}>Sign In</button>
            <button className="login-window__form forget-password">Forgot Password</button>
            <button className="login-window__form sign_up">Not a member yet ? sign up</button>
            </form>
        </div>
     );
};

export default LoginWindow;

