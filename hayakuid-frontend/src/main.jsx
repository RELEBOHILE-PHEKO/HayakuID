// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the main App component
import './index.css'; // Global styles for the app

const root = ReactDOM.createRoot(document.getElementById('root')); // Attach React to the 'root' div in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
