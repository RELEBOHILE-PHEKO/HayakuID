import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="hero-section">
            <h2>Welcome to HayakuID</h2>
            <p>Revolutionizing digital identity management in Lesotho.</p>
            <div className="cta-buttons">
                <Link to="/register" className="btn btn-primary">Sign Up</Link>
                <Link to="/login" className="btn btn-secondary">Log In</Link>
            </div>
        </section>
    );
}

export default Home;
