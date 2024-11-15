// src/Header.jsx
import React from 'react';
import './Header.css';

function Header({ isLoggedIn, userRole, onLogout }) {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="/" className="navbar-logo">TravelDestinations</a>
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <a href="/" className="navbar-link">Home</a>
                        </li>
                        {isLoggedIn && userRole === 'admin' && (
                            <li className="navbar-item">
                                <a href="/admin" className="navbar-link">Admin Dashboard</a>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li className="navbar-item">
                                <button onClick={onLogout} className="navbar-link navbar-signout-btn">Sign Out</button>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
