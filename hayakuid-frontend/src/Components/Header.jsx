import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">HayakuID</Link>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
}

export default Header;
