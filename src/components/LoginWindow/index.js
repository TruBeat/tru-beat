import React, { useState } from 'react';
import './index.css'
import Swal from 'sweetalert2';

const LoginWindow = (props) => {
    const adminEmail = 'admin@example.com';
    const adminPassword = 'qwerty';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = e => {
        e.preventDefault();

        if (email === adminEmail && password === adminPassword) {
        Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
            Swal.showLoading();
            },
            willClose: () => {
            localStorage.setItem('is_authenticated', true);
            props.setAuthenticated(true);

            Swal.fire({
                icon: 'success',
                title: 'Successfully logged in!',
                showConfirmButton: false,
                timer: 1500,
            });
            },
        });
        } else {
        Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
            Swal.showLoading();
            },
            willClose: () => {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Incorrect email or password.',
                showConfirmButton: true,
            });
            },
        });
        }
    };

    return (
        <div className="LoginPage">
        <div className="Logo"/>
            <form className="User-Login">
                <h2 className="Login-window-message">Welcome to TruBeat</h2>
                <h3 className="login-window__form"> User Login</h3>
                <input className="login-window__form"
                    placeholder="UserId"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                
                <input className="login-window__form"
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="email"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="login-window__form sign_in" onClick={handleLogin}>Sign In</button>
                <button className="login-window__form forget-password">Forgot Password</button>
                <button className="login-window__form sign_up">Not a member yet ? sign up</button>
            </form>
        </div>
     );
};

export default LoginWindow;

