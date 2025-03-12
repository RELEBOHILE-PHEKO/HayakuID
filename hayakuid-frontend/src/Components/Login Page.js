import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!formData.emailOrPhone || !formData.password) {
            setError('Please enter both email/phone and password!');
            return;
        }
        // Handle login logic here
    };

    return (
        <section className="login-form">
            <h2>Login to HayakuID</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Email or Phone"
                    value={formData.emailOrPhone}
                    onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <Link to="/register" className="link">Don't have an account? Sign up</Link>
        </section>
    );
}

export default Login;
